package route

import (
	"bytes"
	"io"
	"log"
	"net/http"
	"os"
	"os/exec"

	"../aliyun"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func Shellout(command string) (error, string, string) {
	var stdout bytes.Buffer
	var stderr bytes.Buffer
	cmd := exec.Command("bash", "-c", command)
	cmd.Stdout = &stdout
	cmd.Stderr = &stderr
	err := cmd.Run()
	return err, stdout.String(), stderr.String()
}

func Qifu(w http.ResponseWriter, r *http.Request) {
	sethead(w)
	// r.ParseMultipartForm(500)
	//blobfile:=r.MultipartForm.File["content"]
	// err := ioutil.WriteFile("test.txt",blobfile, 0666)
	// check(err)
	if r.Method == "POST" {
		//r.ParseMultipartForm(500)
		files, _, err := r.FormFile("file")
		if err != nil {
			panic(err)
		}
		file, err := os.Create("/home/www/cst/file/voice")
		if err != nil {
			panic(err)
		}
		_, err = io.Copy(file, files)
		if err != nil {
			panic(err)
		}
		
		errs, _, _ := Shellout("cd /home/www/cst/file/")
		errs, _, _ = Shellout("rm -rf voice.mp3")
		errs, _, _ = Shellout("ffmpeg -i voice -acodec libmp3lame -aq 4 -ar 16000 voice.mp3")


		if errs != nil {
			log.Printf("error: %v\n", errs)
		}
		// fmt.Println("--- stdout ---")
		// fmt.Println(out)
		// fmt.Println("--- stderr ---")
		// fmt.Println(errout)
		// fmt.Println(err)
		text := aliyun.VoiceToText("http://cst.file.ifeel.vip/voice.mp3")

		// w.Write([]byte("upload success"))
		// response, _ := json.Marshal(header)
		w.Write([]byte(text))
	}

}
