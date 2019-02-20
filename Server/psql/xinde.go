package psql

import "fmt"

// XindeInfo 是一个心得的对象
type XindeInfo struct {
	UID       int
	WechatID  string
	Createdat string
	Xinde     string
	Title     string
}

//Getxinde 是获取心得的函数
func Getxinde() []XindeInfo {
	rows, err := db.Query("SELECT * from xinde")
	checkError(err)
	var (
		xindelist []XindeInfo
		xinde     XindeInfo
	)
	for rows.Next() {
		err = rows.Scan(&xinde.UID, &xinde.WechatID, &xinde.Createdat, &xinde.Xinde, &xinde.Title)
		checkError(err)
		fmt.Println("uid=", xinde.UID, "wechatid=", xinde.WechatID, "time = ", xinde.Createdat, "xinde = ", xinde.Xinde, "Title = ", xinde.Title)
		xindelist = append(xindelist, xinde)
	}
	defer rows.Close()
	return xindelist
}

// Addxinde 是添加心得的函数
func Addxinde(newxinde XindeInfo) {
	if (newxinde.Xinde) == "" {
		return
	}
	stmt, err := db.Prepare("insert into xinde(wechatid,xinde,title) values($1, $2,$3)")
	stmt.Exec(newxinde.WechatID, newxinde.Xinde, newxinde.Title)
	checkError(err)
}
