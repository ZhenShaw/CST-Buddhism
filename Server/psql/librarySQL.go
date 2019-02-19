package psql

type bookInf struct {
	Bookname  string `json:"bookname"`
	Readnumber string `json:"readnumber"`
	Bookintroduce string `json:"bookintroduce"`
	Contentintroduce string `json:"contentintroduce"`
	Yuanwen string `json:"yuanwen"`
	Yiwen string `json:"yiwen"`
}
var AllInf =[]bookInf{} //所有人的信息，切片存储
func Gain(tp string ){

	var one bookInf
	if tp=="佛咒" {
		rows, err := db.Query("select * from public.fozhou")
		checkError(err)

		for rows.Next() {
			err = rows.Scan(&one.Bookname, &one.Readnumber,&one.Bookintroduce,&one.Contentintroduce,&one.Yuanwen)
			checkError(err)
			AllInf = append(AllInf,one)
		}
	}else {
		rows, err := db.Query("select * from public.fojing")
		checkError(err)

		for rows.Next() {
			err = rows.Scan(&one.Bookname, &one.Readnumber,&one.Bookintroduce,&one.Contentintroduce,&one.Yuanwen,&one.Yiwen)
			checkError(err)
			AllInf = append(AllInf,one)
		}
	}

}