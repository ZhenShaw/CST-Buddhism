package main

import (
	"fmt"

	aai "github.com/tencentcloud/tencentcloud-sdk-go/tencentcloud/aai/v20180522"
	"github.com/tencentcloud/tencentcloud-sdk-go/tencentcloud/common"
	"github.com/tencentcloud/tencentcloud-sdk-go/tencentcloud/common/errors"
	"github.com/tencentcloud/tencentcloud-sdk-go/tencentcloud/common/profile"
)

func main() {

	credential := common.NewCredential(
		"AKIDnlJmApdfyIe0B8rHK81mIYI2VjkZlvGN",
		"OXR8wesRCyZ8slpgcOZomhfTxf19cHzQ",
	)
	cpf := profile.NewClientProfile()
	cpf.HttpProfile.Endpoint = "aai.tencentcloudapi.com"
	client, _ := aai.NewClient(credential, "ap-guangzhou", cpf)

	request := aai.NewSentenceRecognitionRequest()

	params := `{"ProjectId":0,"SubServiceType":2,"EngSerViceType":"8k","SourceType":0,"Url":"https%3a%2f%2fimages-1256261760.cos.ap-guangzhou.myqcloud.com%2ftest.mp3","VoiceFormat":"mp3","UsrAudioKey":"123"}`
	err := request.FromJsonString(params)
	if err != nil {
		panic(err)
	}
	response, err := client.SentenceRecognition(request)
	if _, ok := err.(*errors.TencentCloudSDKError); ok {
		fmt.Printf("An API error has returned: %s", err)
		return
	}
	if err != nil {
		panic(err)
	}
	fmt.Printf("%s", response.ToJsonString())
}
