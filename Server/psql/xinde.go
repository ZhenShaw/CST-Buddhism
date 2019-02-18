package psql

// XindeInfo 是一个心得的对象
type XindeInfo struct {
	UID       int
	WechatID  string
	Createdat string
	Xinde     string
}

//Getxinde 是获取心得的函数
func Getxinde() []XindeInfo {
	rows, err := db.Query("SELECT * from xinde")
	checkError(err)
	var (
		xindelist []XindeInfo
		xinde     XindeInfo
	)
	rows.Next()
	{
		err = rows.Scan(&xinde.UID, &xinde.WechatID, &xinde.Createdat, &xinde.Xinde)
		checkError(err)
		xindelist = append(xindelist, xinde)
	}
	defer rows.Close()
	return xindelist
}

// Addxinde 是添加心得的函数
func Addxinde(newxinde XindeInfo) {
	stmt, err := db.Prepare("insert into xinde(wechatID,xinde) values($1, $2)")
	stmt.Exec(newxinde.WechatID, newxinde.Xinde)
	checkError(err)
}
