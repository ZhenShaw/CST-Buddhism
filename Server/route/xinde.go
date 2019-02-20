package route

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"../psql"
)

// Res 是用来返回前端是否正确操作的信息
type Res struct {
	Resstring string `json:"resstring"`
}

// Checkerr 检查错误函数
func Checkerr(err error) {
	if err != nil {
		fmt.Println("error:", err)
	}
}

// GetXinderoute 是获取心得的函数
func GetXinderoute(w http.ResponseWriter, r *http.Request) {
	sethead(w)
	r.ParseForm()
	fmt.Println("本次心得请求为:", r.Method)
	var Xindelist []psql.XindeInfo
	Xindelist = psql.Getxinde()
	res, _ := json.Marshal(Xindelist)
	fmt.Println("xindelist=", Xindelist)
	w.Write(res)
}

// AddXinderoute 是添加心得的函数
func AddXinderoute(w http.ResponseWriter, r *http.Request) {
	sethead(w)
	r.ParseForm()
	fmt.Println("本次心得请求为：", r.Method)
	defer r.Body.Close()
	res, err := ioutil.ReadAll(r.Body)
	Checkerr(err)
	var newxinde psql.XindeInfo
	var re Res
	var rs []byte
	err = json.Unmarshal([]byte(string(res)), &newxinde)
	psql.Addxinde(newxinde)
	fmt.Println("添加成功！")
	re.Resstring = "Succeed!"
	rs, err = json.Marshal(re)
	w.Write(rs)
}
