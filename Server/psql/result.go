package psql

import (
	"fmt"
	"strconv"
	"strings"
)

type Result struct {
	YinLi     string
	NianMing  string
	TianYun   string
	ShengXiao string
	BenMing   string
	MingGua   string
}

func Getresult(year string, month string, day string, sex string) Result {
	var user Result
	var date string = year + "/" + month + "/" + day
	var yinli_year string
	var yinli_month string
	var yinli_day string
	foryear, err := strconv.Atoi(year)
	checkError(err)
	rows, err := db.Query("select year, month, day, shuxiang, nianming, rizhu from bazizhu where gongli=$1", date)
	checkError(err)
	for rows.Next() {
		rows.Scan(&yinli_year, &yinli_month, &yinli_day, &user.ShengXiao, &user.NianMing, &user.TianYun)
	}
	user.YinLi = yinli_year + "年 " + yinli_month + " " + yinli_day
	tianyun := strings.Split(user.TianYun, "")
	var Tianyun string = tianyun[0]
	var a int = foryear / 1000
	var b int = (foryear / 100) % 10
	var c int = (foryear / 10) % 10
	var d int = foryear % 10
	var sum int = a + b + c + d
	if sex == "男" {
		if sum > 9 {
			sum = 11 - sum%10 - sum/10
			if sum > 9 {
				sum = sum - 9
			}
		} else {
			sum = 11 - sum
		}
		if sum == 5 {
			user.MingGua = "坤"
		} else {
			switch sum {
			case 1:
				user.MingGua = "坎"
			case 2:
				user.MingGua = "坤"
			case 3:
				user.MingGua = "震"
			case 4:
				user.MingGua = "巽"
			case 6:
				user.MingGua = "乾"
			case 7:
				user.MingGua = "兑"
			case 8:
				user.MingGua = "艮"
			case 9:
				user.MingGua = "离"
			}
		}
	} else {
		if sum > 9 {
			sum = sum%10 + sum/10 + 4
			if sum > 9 {
				sum = sum - 9
			}
		} else {
			sum = sum + 4
			if sum > 9 {
				sum = sum - 9
			}
		}
		if sum == 5 {
			user.MingGua = "艮"
		} else {
			switch sum {
			case 1:
				user.MingGua = "坎"
			case 2:
				user.MingGua = "坤"
			case 3:
				user.MingGua = "震"
			case 4:
				user.MingGua = "巽"
			case 6:
				user.MingGua = "乾"
			case 7:
				user.MingGua = "兑"
			case 8:
				user.MingGua = "艮"
			case 9:
				user.MingGua = "离"
			}
		}
	}
	switch user.ShengXiao {
	case "鼠":
		user.BenMing = "千手观音菩萨"
	case "牛":
		user.BenMing = "虚空藏菩萨"
	case "虎":
		user.BenMing = "虚空藏菩萨"
	case "兔":
		user.BenMing = "文殊菩萨"
	case "龙":
		user.BenMing = "普贤菩萨"
	case "蛇":
		user.BenMing = "普贤菩萨"
	case "马":
		user.BenMing = "大势至菩萨"
	case "羊":
		user.BenMing = "大日如来"
	case "猴":
		user.BenMing = "大日如来"
	case "鸡":
		user.BenMing = "不动尊菩萨"
	case "狗":
		user.BenMing = "阿弥陀佛"
	case "猪":
		user.BenMing = "阿弥陀佛"
	}
	switch Tianyun {
	case "甲":
		user.TianYun = "木"
	case "乙":
		user.TianYun = "木"
	case "丙":
		user.TianYun = "火"
	case "丁":
		user.TianYun = "火"
	case "戊":
		user.TianYun = "土"
	case "己":
		user.TianYun = "土"
	case "庚":
		user.TianYun = "金"
	case "辛":
		user.TianYun = "金"
	case "壬":
		user.TianYun = "水"
	case "癸":
		user.TianYun = "水"
	}
	fmt.Println(user)
	return user
}
