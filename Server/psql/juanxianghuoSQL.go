package psql

import (
	"fmt"
)

//将用户姓名，选择的香型，数量写入数据库
func Juanxianghuoinfo(wechatid string, name string, number string, leixing string) {
	stmt1, err := db.Prepare("INSERT INTO juanxianghuo(wechatid,xingming,shuliang,leixing) VALUES($1,$2,$3,$4) RETURNING uid")
	checkError(err)
	stmt1.Exec(wechatid, name, number, leixing)
	fmt.Println("test1")

}
