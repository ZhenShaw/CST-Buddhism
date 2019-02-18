package psql
import (
	"fmt"
	_ "github.com/lib/pq"
)


type Qiuqian struct {
	Numbers string   `json:"numbers"`
	Types string     `json:"types"`
	Qianyu string    `json:"qianyu"`
	Jieqian string   `json:"jieqian"`
}


func Qiuqianinit(number string) Qiuqian {
	// db, err := sql.Open("postgres", "user=postgres password=267429 dbname=postgres sslmode=disable")
	// checkError(err)
	rows, err := db.Query(" SELECT types,qianyu,jieqian FROM  qiuqian  where numbers='"+ number +"'")
	checkError(err)
	var jieguo Qiuqian
	jieguo.Numbers=number
	for rows.Next() {
		err = rows.Scan(&jieguo.Types,&jieguo.Qianyu, &jieguo.Jieqian)
		checkError(err)
	}
	fmt.Println(jieguo)
	return jieguo
}
	
