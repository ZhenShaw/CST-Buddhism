package psql

func Change(booktype string,bookname string,readnumber string){

	//更新数据
	if booktype=="fozhou"{
		stmt, err := db.Prepare("update public.fozhou set readnumber=$1 where bookname=$2")
		checkError(err)
		_,err =stmt.Exec(booktype,bookname,readnumber)
		checkError(err)


	}else if booktype=="fojing"{
		stmt, err := db.Prepare("update public.fojing set readnumber=$1 where bookname=$2")
		checkError(err)
		_,err =stmt.Exec(booktype,bookname,readnumber)
		checkError(err)

	}

}
