package route

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"../psql"
)

type Personmsg struct {
	Wechatid, Name, Number, Leixing string
}

func checkError1(err error) {
	if err != nil {
		panic(err)
	}
}

var ifsuccess bool = false

func Juanxianghuo(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json
	Userinfo := Personmsg{}
	r.ParseForm()
	data, err := ioutil.ReadAll(r.Body) //读取r中的所有数据，返回读取的数据和读取过程中遇到的任何错误，如果读取成功，则 err 返回 nil，而不是 EOF
	checkError1(err)
	FormData := make(map[string]string)
	json.Unmarshal([]byte(data), &FormData) //func Unmarshal(data [] byte, v interface{}) error  interface可以接受所有类型
	//成功将数据转换成string类型
	Userinfo.Wechatid = FormData["wechatid"]
	Userinfo.Name = FormData["name"]
	Userinfo.Number = FormData["number"]
	Userinfo.Leixing = FormData["type"]
	if Userinfo.Name != "" && Userinfo.Leixing != "" {
		psql.Juanxianghuoinfo(Userinfo.Wechatid, Userinfo.Name, Userinfo.Number, Userinfo.Leixing)
		ifsuccess = true
	}
	println(ifsuccess)
	result, err := json.Marshal(ifsuccess)
	if err != nil {
		fmt.Println("error:", err)
	}
	w.Write(result)
}
