package psql

func SearchDetail(year, mouth, date, sex int) map[string]interface{} {
	id := ((year / mouth) * date) % 14
	id += 1
	rows, err := db.Query("SELECT uid,caiyun,jiankang,shiye,aiqing_male,aiqing_female FROM bazixiangjie")
	checkError(err)
	var instance map[string]interface{}
	for rows.Next() {
		var uid int
		var caiyun string
		var jiankang string
		var shiye string
		var aiqing_male string
		var aiqing_female string

		err = rows.Scan(&uid, &caiyun, &jiankang, &shiye, &aiqing_male, &aiqing_female)
		checkError(err)
		if uid == id {

			if sex == 1 {
				instance = map[string]interface{}{"caiyun": caiyun, "jiankang": jiankang, "shiye": shiye, "aiqing": aiqing_male}
			} else {
				instance = map[string]interface{}{"caiyun": caiyun, "jiankang": jiankang, "shiye": shiye, "aiqing": aiqing_female}
			}

		}

	}
	return instance

}
