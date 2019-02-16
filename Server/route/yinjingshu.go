package route

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"../psql"
)

type Response struct {
	SList	[]psql.Scripture	`json:"slist"`
	DList   []psql.Donator		`json:"dlist"`
	RString  string				`json:"rstring"`
}

func Yinjingshu(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json
	r.ParseForm()
	fmt.Println("收到客户端请求: ",r.Method)
	defer r.Body.Close()
	con, err:= ioutil.ReadAll(r.Body)
	var user psql.Userinf
	err1:= json.Unmarshal([]byte(string(con)),&user)
	//错误提示
	if err != nil {
		fmt.Println("error:", err)
	}
	if err1 != nil {
		fmt.Println("error:", err)
	}

	//初始化列表
	scriptureList:=make([]psql.Scripture,0,10)
	donatorList:=make([]psql.Donator,0,100)

	//对应请求执行函数
	var rs []byte
	var response Response
	if user.Do=="init"{							//初始化页面
		response.SList,response.DList=psql.YinjingshuInit(scriptureList,donatorList)
		response.RString="Get List"
		rs,err = json.Marshal(response)
	}else if user.Do=="donate"{					//捐赠请求处理
		psql.YinjingshuDonator(user)
		response.RString="Donate Succeed"
		rs,err = json.Marshal(response)
	}else{										//未知请求处理
		response.RString="Error:Without Corrected Do"
		rs,err = json.Marshal(response)
	}
	if err != nil {
		log.Fatalln(err)
	}
	w.Write(rs)

}




