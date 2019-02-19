package psql

type Listinfo struct {
	Name string	`json:"name"`	
	Details string	`json:"details"`
	Url string	`json:"url"`
	Status int	`json:"status"`
}

func Search(condition string) []Listinfo {
	//查询数据
	rows, err := db.Query("SELECT name,url,details,status FROM gongfo " + condition)
	checkError(err) 
	var 
	(list []Listinfo
	 info Listinfo
	)
	for rows.Next() {
		err = rows.Scan(&info.Name, &info.Url, &info.Details,&info.Status)
		checkError(err)
		list = append(list, info)
	}
	defer rows.Close()
	return list
}