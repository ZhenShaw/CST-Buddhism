package route

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"strconv"

	"../psql"
)

func BaziDetail(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("content-type", "application/json")
	if r.Method == "POST" {
		Input, _ := ioutil.ReadAll(r.Body)
		var dateInfo map[string]string
		json.Unmarshal(Input, &dateInfo)
		year := dateInfo["year"]
		month := dateInfo["month"]
		date := dateInfo["date"]
		sex := dateInfo["sex"]
		years, err := strconv.Atoi(year)
		if err != nil {
			panic(err)
		}
		months, err := strconv.Atoi(month)
		if err != nil {
			panic(err)
		}
		dates, err := strconv.Atoi(date)
		if err != nil {
			panic(err)
		}
		sexs, err := strconv.Atoi(sex)
		if err != nil {
			panic(err)
		}
		result := psql.SearchDetail(years, months, dates, sexs)
		jsonStr, _ := json.Marshal(result)
		w.Write(jsonStr)
	}

}
