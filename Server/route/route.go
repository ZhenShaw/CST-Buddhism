package route

import (
	//"../psql"
	"fmt"
	"net/http"
)

func Test(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "hello")
}
