package route

import (
"encoding/json"
"fmt"
"net/http"
"strings"
"../psql"
)

type changeInf struct {
	Booktype string `json:"booktype"`
	Bookname string `json:"bookname"`
	Readnumber string `json:"readnumber"`
}
func ChangeNumber(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json


	if r.Method == "POST" {
		// 解析url传递的参数
		r.ParseForm()

		for k ,v:= range r.Form{
			var temp changeInf
			err:=json.Unmarshal([]byte(k),&temp)
			//解析失败会报错，如json字符串格式不对，缺"号，缺}等。
			if err!=nil{
				fmt.Println(err)
			}

			psql.Change(temp.Booktype,temp.Bookname,temp.Readnumber)

			//join() 方法用于把数组中的所有元素放入一个字符串。
			//元素是通过指定的分隔符进行分隔的
			strings.Join(v, "")
		}

	}


}


