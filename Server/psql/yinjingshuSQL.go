package psql

import (
	"log"
)

//用户信息
type Userinf struct {
	WechatID      string `json:"wechatid"`      //微信用户ID
	ScriptureName string `json:"scripturename"` //捐赠的经书名
	DonateNum     int    `json:"donatenum"`     //捐赠经书数量
	Do            string `json:"do"`            //请求内容（init：初始化界面；donate:捐赠经书）
}

//经书项信息
type Scripture struct {
	ScriptureName string `json:"scripturename"` //经书名
	TargetNum     int    `json:"targetnum"`     //目标数量
	NowNum        int    `json:"nownum"`        //已达成数量
	DonatorNum    int    `json:"donatornum"`    //捐赠人数
}

//捐赠列表项
type Donator struct {
	DonatorID     string `json:"donatorid"`     //捐赠者ID
	ScriptureName string `json:"scripturename"` //经书名
	DonateNum     int    `json:"donatenum"`     //捐赠数量
}

//user.do=="init",调用函数YinjingshuInit
func YinjingshuInit(scriptureList []Scripture, donatorList []Donator) ([]Scripture, []Donator) {
	var scripture Scripture
	var donator Donator
	var donatorNum int

	//获取经书列表
	rows, err := db.Query("select scriptureName,targetNum,nowNum,donatorNum from scriptureinfo;")
	for i := 0; rows.Next(); i++ {
		if err := rows.Scan(&scripture.ScriptureName, &scripture.TargetNum, &scripture.NowNum, &scripture.DonatorNum); err != nil {
			log.Fatal(err)
		} else {
			scriptureList = append(scriptureList, scripture)
		}
	}

	//获取捐赠者列表（捐赠者总数小于10时，使用所有数据；大于10时，只调出最近更新的10条数据）
	rows, err = db.Query("select max(uid) from donatorinfo;")
	checkError(err)
	rows.Next()
	rows.Scan(&donatorNum)
	var rdlist []Donator
	if donatorNum < 10 { //捐赠者总数小于10
		rows, err := db.Query("select wechatID,scriptureName,donateNum from donatorinfo;")
		for i := 0; i < donatorNum; i++ {
			checkError(err)
			rows.Next()
			rows.Scan(&donator.DonatorID, &donator.ScriptureName, &donator.DonateNum)
			donatorList = append(donatorList, donator)
		}
		for i := 0; i < donatorNum; i++	{
			rdlist=append(rdlist,donatorList[donatorNum-i-1])
		}
	} else { //捐赠者总数大于10
		sqlStatement := "select wechatID,scriptureName,donateNum from donatorinfo where uid>$1 and uid<=$2;"
		rows, err := db.Query(sqlStatement, donatorNum-10, donatorNum)
		for i := 0; i < 10; i++ {
			checkError(err)
			rows.Next()
			rows.Scan(&donator.DonatorID, &donator.ScriptureName, &donator.DonateNum)
			donatorList = append(donatorList, donator)
		}
		for i := 0; i < 10; i++	{
			rdlist=append(rdlist,donatorList[9-i])
		}
	}

	defer rows.Close()

	return scriptureList, rdlist
}

//user.do=="donator",调用函数YinjingshuDonator
func YinjingshuDonator(user Userinf) {

	//向数据表donatorinfo中插入数据
	stmt, err := db.Prepare("insert into donatorinfo(wechatID,scriptureName,donateNum) values($1, $2, $3)")
	stmt.Exec(user.WechatID, user.ScriptureName, user.DonateNum)
	checkError(err)

	//增加数据表scriptureinfo对应经书的已达成数量（nowNum）
	var nownum int
	sqlStatement := "select nowNum from scriptureinfo where scriptureName=$1;"
	rows := db.QueryRow(sqlStatement, user.ScriptureName)
	rows.Scan(&nownum)
	nownum += user.DonateNum
	stmt, err = db.Prepare("update scriptureinfo set nowNum=$1 where scriptureName=$2;")
	checkError(err)
	stmt.Exec(nownum, user.ScriptureName)
}
