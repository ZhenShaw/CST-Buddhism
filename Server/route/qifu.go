package route

import (
	"encoding/json"
	"net/http"
)

//换佛
func Qifu(w http.ResponseWriter, r *http.Request) {
	sethead(w)

	if r.Method=="POST"{
		response, _ := json.Marshal("sucess")
		w.Write(response)
	}	
}