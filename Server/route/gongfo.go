package route

import (
	"encoding/json"
	"net/http"

	"../psql"
)

func sethead(w http.ResponseWriter) { //设置跨域访问
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json
}

//换佛
func Fo(w http.ResponseWriter, r *http.Request) {
	sethead(w)
	var listinfo []psql.Listinfo
	listinfo = psql.Search("where status=0")
	response, _ := json.Marshal(listinfo)
	w.Write(response)

}

//换花
func Flower(w http.ResponseWriter, r *http.Request) {
	sethead(w)
	var listinfo []psql.Listinfo
	listinfo = psql.Search("where status=1")
	response, _ := json.Marshal(listinfo)
	w.Write(response)
}

//换香
func Xiang(w http.ResponseWriter, r *http.Request) {
	sethead(w)
	var listinfo []psql.Listinfo
	listinfo = psql.Search("where status=3")
	response, _ := json.Marshal(listinfo)
	w.Write(response)
}

//换水果
func Fruit(w http.ResponseWriter, r *http.Request) {
	sethead(w)
	var listinfo []psql.Listinfo
	listinfo = psql.Search("where status=2")
	response, _ := json.Marshal(listinfo)
	w.Write(response)
}