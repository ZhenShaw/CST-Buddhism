package psql

type Result struct {
	NianMing  string
	TianYun   string
	ShengXiao string
	BenMing   string
	MingGua   string
}

func Getresult(yinli string) Result {
	var user Result
	rows, err := db.Query("select nianMing,tianyun,shengxiao,benming,minggua from bazi where yinli=$1", yinli)
	checkError(err)
	rows.Scan(&user.NianMing, &user.TianYun, &user.ShengXiao, &user.BenMing, &user.MingGua)
	return user
}
