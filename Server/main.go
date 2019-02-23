package main

import (
	"fmt"
	"log"
	"net/http"

	"./psql"
	"./route"
)

func main() {

	psql.TestDB()

	mux := http.NewServeMux()

	//路由列表
	mux.HandleFunc("/test", route.Test)
	mux.HandleFunc("/result", route.Result)
	mux.HandleFunc("/library", route.Library)
	mux.HandleFunc("/search", route.Search)
	mux.HandleFunc("/gongfo/fo", route.Fo)
	mux.HandleFunc("/gongfo/flower", route.Flower)
	mux.HandleFunc("/gongfo/xiang", route.Xiang)
	mux.HandleFunc("/gongfo/fruit", route.Fruit)
	mux.HandleFunc("/gongfo/qifu", route.Qifu)
	mux.HandleFunc("/yinjingshu", route.Yinjingshu)
	mux.HandleFunc("/jieqian", route.Jieqian)
	mux.HandleFunc("/xiuxing/xinde", route.GetXinderoute)
	mux.HandleFunc("/xiuxing/xinde/addxinde", route.AddXinderoute)
	mux.HandleFunc("/bazi/bazhidetail", route.BaziDetail)
	
	//监听9000端口
	fmt.Println("Web服务器启动...端口:9000")
	err := http.ListenAndServe(":9000", mux)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}

}
