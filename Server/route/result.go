package route

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func Result(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json
	r.ParseForm()
	var yinli string
	fmt.Println("收到客户端请求: ", r.Method)
	result, _ := ioutil.ReadAll(r.Body)
	r.Body.Close()
	fmt.Printf("%s\n", result)
	json.Unmarshal(result, &yinli)
	data, err := json.Marshal(yinli)
	if err != nil {
		fmt.Println("error:", err)
	}
	fmt.Fprintln(w, string(data))
}
