package psql

import (
	"database/sql"
	"fmt"

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
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)
	db, err = sql.Open("postgres", psqlInfo)

	err = db.Ping()
	checkError(err)
	fmt.Println("Successfully connected!")
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


func TestDB(){
	fmt.Print("数据库连接测试完成\n")
}
