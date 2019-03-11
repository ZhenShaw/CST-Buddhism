package route

import (
	"encoding/json"
	"net/http"
	//"io/ioutil"
)

func check(e error) {
    if e != nil {
        panic(e)
    }
}

func Qifu(w http.ResponseWriter, r *http.Request) {
	sethead(w)
	//r.ParseMultipartForm(500) 
	//blobfile:=r.MultipartForm.File
	a:=r.
    //err := ioutil.WriteFile("test.txt",r.b, 0644)
    check(err)
	if r.Method=="POST"{
		response, _ := json.Marshal("sucess")
		w.Write(response)
	}	
}