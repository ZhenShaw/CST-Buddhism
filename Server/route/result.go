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
	if r.Method == "POST" {
		fmt.Println("收到客户端请求: ", r.Method)
		result, _ := ioutil.ReadAll(r.Body)
		r.Body.Close()
		fmt.Printf("%s\n", result)
		var f interface{}
		json.Unmarshal(result, &f)
		m := f.(map[string]interface{})
		var year string
		var month string
		var day string
		var sex string
		for k, v := range m {
			switch vv := v.(type) {
			case string:
				if k == "year" {
					fmt.Println(k, "is string", vv)
					year = vv
				}
				if k == "month" {
					fmt.Println(k, "is string", vv)
					month = vv
				}
				if k == "day" {
					fmt.Println(k, "is string", vv)
					day = vv
				}
				if k == "sex" {
					fmt.Println(k, "is string", vv)
					sex = vv
				}
			}
		}
		var baziresult psql.Result
		baziresult = psql.Getresult(year, month, day, sex)
		var b string
		b = baziresult.NianMing + " " + baziresult.TianYun + " " + baziresult.ShengXiao + " " + baziresult.BenMing + " " + baziresult.MingGua + " " + baziresult.YinLi
		fmt.Println(b)
		bb, err := json.Marshal(b)
		Checkerr(err)
		w.Write([]byte(bb))
	}
}
