package psql

func Change(booktype string,bookname string,readnumber string){

	//更新数据
	if booktype=="fozhou"{
		stmt, err := db.Prepare("UPDATE public.fozhou SET readnumber=$1  WHERE bookname=$2 ")
		checkError(err)
		_, err = stmt.Exec(readnumber,bookname)
		checkError(err)


	}else {
		stmt, err := db.Prepare("UPDATE public.fojing SET readnumber=$1  WHERE bookname=$2 ")
		checkError(err)
		_, err = stmt.Exec(readnumber,bookname)
		checkError(err)

	}
}
