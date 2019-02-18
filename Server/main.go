package main

import (
	"./psql"
	"./route"
	"fmt"
	"log"
	"net/http"
)

func main() {

	psql.TestDB()


	mux := http.NewServeMux()

	//路由列表
	mux.HandleFunc("/test", route.Test)
	mux.HandleFunc("/library", route.Library)
	//监听9000端口
	fmt.Println("Web服务器启动...端口:9000")
	err := http.ListenAndServe(":9000", mux)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}

}
