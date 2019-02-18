package route
import (
	"encoding/json"
	"net/http"
	"fmt"
	"math/rand"
	"strconv"
	"time"
	"../psql"
)
func setheader(w http.ResponseWriter) {                 
	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*") //允许跨域
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type,access-control-allow-origin, access-control-allow-headers")
}

func response(jieguo psql.Qiuqian, w http.ResponseWriter) {
	response, _ := json.Marshal(jieguo)
	w.Write(response)                  //传数据给前端
}

func Jieqian(w http.ResponseWriter, r *http.Request) { 

	setheader(w)
	rand.Seed(time.Now().UnixNano())
	number :=strconv.Itoa(rand.Intn(10)+1)
	fmt.Println(number)
	huichuang :=psql.Qiuqianinit(number)
	response(huichuang, w)  
}