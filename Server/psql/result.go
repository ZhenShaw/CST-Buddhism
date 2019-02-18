package psql

type result struct {
	NianMing  string
	TianYun   string
	ShengXiao string
	BenMing   string
	MingGua   string
}

func getresult(yinli string) {
	var user result
	rows, err := db.Query("select NianMing,TianYun,ShengXiao,BenMing,MingGua from bazi where YinLi=$1", yinli)
	checkError(err)
	rows.Scan(&user.NianMing, &user.TianYun, &user.ShengXiao, &user.BenMing, &user.MingGua)
	return
}
