package route

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"../psql"
)

func Result(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json
	r.ParseForm()
	fmt.Println("收到客户端请求: ", r.Method)
	result, _ := ioutil.ReadAll(r.Body)
	r.Body.Close()
	fmt.Printf("%s\n", result)
	var f interface{}
	json.Unmarshal(result, &f)
	m := f.(map[string]interface{})
	var yinli string
	for k, v := range m {
		switch vv := v.(type) {
		case string:
			fmt.Println(k, "is string", vv)
			yinli = vv
		}
	}
	var baziresult psql.Result
	psql.Getresult(yinli)
	var b string
	b = baziresult.NianMing + baziresult.TianYun + baziresult.ShengXiao + baziresult.BenMing + baziresult.MingGua
	fmt.Fprintf(w, b)
}
