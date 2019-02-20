package route

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	"../psql"
)

type name struct {
	Bookname string `json:"bookname"`
}
func Search(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json

	if r.Method == "POST" {
		// 解析url传递的参数
		r.ParseForm()

		for k ,v:= range r.Form{
			var temp name
			err:=json.Unmarshal([]byte(k),&temp)
			//解析失败会报错，如json字符串格式不对，缺"号，缺}等。
			if err!=nil{
				fmt.Println(err)
			}

			psql.SearchResult(temp.Bookname)
			//join() 方法用于把数组中的所有元素放入一个字符串。
			//元素是通过指定的分隔符进行分隔的
			strings.Join(v, "")
		}

	}

	//编码，根据内容生成json文本
	//control,_:= json.Marshal(s)
	control, err := json.MarshalIndent(psql.List, "", "    ") //格式化编码
	if err != nil {
		fmt.Println("err = ", err)
		return
	}

	fmt.Fprint(w, string(control))  //向前端传值

}

