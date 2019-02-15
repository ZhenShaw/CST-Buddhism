package psql

import (
	"database/sql"

	_ "github.com/lib/pq"
)

//全局变量，数据库实例
var db *sql.DB

//数据库连接配置
const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "postgres"
	dbname   = "buddhism"
)

//初始化，调用包时执行
func init() {
	var err error
	//打开数据库
	db, err = sql.Open("postgres", "user=postgres password=postgres dbname=postgres sslmode=disable")
	checkError(err)
}

//关闭数据库
func Close() {
	db.Close()
}

//错误处理
func checkError(err error) {
	if err != nil {
		panic(err)
	}
}
