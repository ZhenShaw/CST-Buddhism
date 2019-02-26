package psql

import (
	"fmt"
)

type Personmsg2 struct {
	Name, Number, Leixing string
}

//将用户姓名，选择的香型，数量写入数据库
func Juanxianghuoinfo(wechatid string, name string, number string, leixing string) {
	stmt1, err := db.Prepare("INSERT INTO juanxianghuo(wechatid,xingming,shuliang,leixing) VALUES($1,$2,$3,$4) RETURNING uid")
	checkError(err)
	stmt1.Exec(wechatid, name, number, leixing)
	fmt.Println("test1")

}

func Juanxianghuododisplay() []Personmsg2 {
	Tempinfo := Personmsg2{}
	var totaldata []Personmsg2 //定义一个personmsg类型的slice，动态分配大小的连续空间
	//遍历数据库的表将数据全部存储到切片中
	rows, err := db.Query("SELECT xingming,shuliang,leixing FROM juanxianghuo")
	checkError(err)
	for rows.Next() {
		var name, number, zhonglei string
		err := rows.Scan(&name, &number, &zhonglei) //获取数据库数据
		checkError(err)
		Tempinfo.Name = name
		Tempinfo.Number = number
		Tempinfo.Leixing = zhonglei
		//添加用户信息到切片中，切片在扩容时，按容量的2倍数扩充，1、2、4、8....
		totaldata = append(totaldata, Tempinfo)

	}
	return totaldata

}
