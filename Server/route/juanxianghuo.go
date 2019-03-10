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
type Personmsg2 struct {
	Name, Number, Leixing string
}

func checkError1(err error) {
	if err != nil {
		panic(err)
	}
}

func setheader2(w http.ResponseWriter) {
	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*") //允许跨域
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type,access-control-allow-origin, access-control-allow-headers")
}
func Juanxianghuo(w http.ResponseWriter, r *http.Request) {
	setheader2(w)
	var ifsuccess bool = false
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
func Juanxianghuodisplay(w http.ResponseWriter, r *http.Request) {

	setheader2(w)

	totaldata2 := psql.Juanxianghuododisplay()
	//将数据传回给前端
	data, err := json.Marshal(&totaldata2)
	if err != nil {
		fmt.Println("error:", err)
	}
	//打印数据
	println("data=", string(data))
	w.Write(data)
}
