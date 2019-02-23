package psql

import (
	"fmt"
	"strconv"
	"strings"
)

type Result struct {
	Mu        string
	Jin       string
	Shui      string
	Tu        string
	Huo       string
	NianZhu   string
	YueZhu    string
	RiZhu     string
	YinLi     string
	NianMing  string
	TianYun   string
	ShengXiao string
	BenMing   string
	MingGua   string
}
type Wuxing struct {
	Mu   int
	Jin  int
	Shui int
	Tu   int
	Huo  int
}

var forwuxing Wuxing

func resetwuxing() {
	forwuxing.Mu = 0
	forwuxing.Huo = 0
	forwuxing.Jin = 0
	forwuxing.Shui = 0
	forwuxing.Tu = 0
}

func getwuxing(wuxing1 string, wuxing2 string) {
	switch wuxing1 {
	case "甲":
		forwuxing.Mu = forwuxing.Mu + 1
	case "乙":
		forwuxing.Mu = forwuxing.Mu + 1
	case "丙":
		forwuxing.Huo = forwuxing.Huo + 1
	case "丁":
		forwuxing.Huo = forwuxing.Huo + 1
	case "戊":
		forwuxing.Tu = forwuxing.Tu + 1
	case "己":
		forwuxing.Tu = forwuxing.Tu + 1
	case "庚":
		forwuxing.Jin = forwuxing.Jin + 1
	case "辛":
		forwuxing.Jin = forwuxing.Jin + 1
	case "壬":
		forwuxing.Shui = forwuxing.Shui + 1
	case "癸":
		forwuxing.Shui = forwuxing.Shui + 1
	}
	switch wuxing2 {
	case "子":
		forwuxing.Shui = forwuxing.Shui + 1
	case "丑":
		forwuxing.Tu = forwuxing.Tu + 1
	case "寅":
		forwuxing.Mu = forwuxing.Mu + 1
	case "卯":
		forwuxing.Mu = forwuxing.Mu + 1
	case "辰":
		forwuxing.Tu = forwuxing.Tu + 1
	case "巳":
		forwuxing.Huo = forwuxing.Huo + 1
	case "午":
		forwuxing.Huo = forwuxing.Huo + 1
	case "未":
		forwuxing.Tu = forwuxing.Tu + 1
	case "申":
		forwuxing.Jin = forwuxing.Jin + 1
	case "酉":
		forwuxing.Jin = forwuxing.Jin + 1
	case "戌":
		forwuxing.Tu = forwuxing.Tu + 1
	case "亥":
		forwuxing.Shui = forwuxing.Shui + 1
	}
}

func Getresult(year string, month string, day string, sex string) Result {
	var user Result
	var date string = year + "/" + month + "/" + day
	var yinli_year string
	var yinli_month string
	var yinli_day string
	foryear, err := strconv.Atoi(year)
	checkError(err)
	rows, err := db.Query("select nianzhu, yuezhu, year, month, day, shuxiang, nianming, rizhu from bazizhu where gongli=$1", date)
	checkError(err)
	for rows.Next() {
		rows.Scan(&user.NianZhu, &user.YueZhu, &yinli_year, &yinli_month, &yinli_day, &user.ShengXiao, &user.NianMing, &user.RiZhu)
	}
	user.YinLi = yinli_year + "年 " + yinli_month + " " + yinli_day
	nianzhu := strings.Split(user.NianZhu, "")
	yuezhu := strings.Split(user.YueZhu, "")
	rizhu := strings.Split(user.RiZhu, "")
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
	switch rizhu[0] {
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
	getwuxing(nianzhu[0], nianzhu[1])
	getwuxing(yuezhu[0], yuezhu[1])
	getwuxing(rizhu[0], rizhu[1])
	user.Mu = strconv.Itoa(forwuxing.Mu)
	user.Huo = strconv.Itoa(forwuxing.Huo)
	user.Tu = strconv.Itoa(forwuxing.Tu)
	user.Shui = strconv.Itoa(forwuxing.Shui)
	user.Jin = strconv.Itoa(forwuxing.Jin)
	fmt.Println(user)
	fmt.Println(forwuxing)
	resetwuxing()
	return user
}
