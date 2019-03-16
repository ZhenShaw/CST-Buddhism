package aliyun

import (
	"encoding/json"
	"errors"
	"os"
	"regexp"
	"time"

	//go get -u github.com/aliyun/alibaba-cloud-sdk-go/sdk
	"github.com/aliyun/alibaba-cloud-sdk-go/sdk"
	"github.com/aliyun/alibaba-cloud-sdk-go/sdk/requests"
	"github.com/pkg/errors"
)

var akID, akSecret, aKey string

// 使用前请把 ALIYUN_ACCESSKEY_ID, ALIYUN_ACCESSKEY_SECRET, ALIYUN_APPKEY写入环境变量
func init() {
	akID = os.Getenv("ALIYUN_ACCESSKEY_ID")
	akSecret = os.Getenv("ALIYUN_ACCESSKEY_SECRET")
	aKey = os.Getenv("ALIYUN_APPKEY")
}

//语音转文本
func VoiceToText(file_link string) string {
	text, err := voiceHandler(file_link, akID, akSecret, aKey)
	if err != nil {
		panic(err)
	}
	return text
}

// 正则表达式提取必要字符串
func getResText(text string) (res string) {
	r, _ := regexp.Compile(`"Text":"(.*?)"`)
	res = r.FindStringSubmatch(text)[1]
	return res
}

//获取语音识别接口的返回结果，格式为json字符串
func voiceHandler(file_link, akID, akSecret, aKey string) (text string, err error) {
	/**
	 * 地域ID
	 * 常量内容，请勿改变
	 */
	const REGION_ID string = "cn-shanghai"
	const ENDPOINT_NAME string = "cn-shanghai"
	const PRODUCT string = "nls-filetrans"
	const DOMAIN string = "filetrans.cn-shanghai.aliyuncs.com"
	const API_VERSION string = "2018-08-17"
	const POST_REQUEST_ACTION string = "SubmitTask"
	const GET_REQUEST_ACTION string = "GetTaskResult"
	/**
	 * 参数设置key
	 * 常量内容，请勿改变
	 */
	const KEY_APP_KEY string = "app_key"
	const KEY_FILE_LINK string = "file_link"
	const KEY_TASK string = "Task"
	const KEY_TASK_ID string = "TaskId"
	const KEY_STATUS_TEXT string = "StatusText"
	var accessKeyId string = akID
	var accessKeySecret string = akSecret
	var appKey string = aKey
	var fileLink string = file_link
	/**
	 * 阿里云鉴权client
	 */
	client, err := sdk.NewClientWithAccessKey(REGION_ID, accessKeyId, accessKeySecret)
	if err != nil {
		panic(err)
	}
	/**
	 * 创建录音文件识别请求，设置请求参数
	 */
	postRequest := requests.NewCommonRequest()
	postRequest.Domain = DOMAIN
	postRequest.Version = API_VERSION
	postRequest.Product = PRODUCT
	postRequest.ApiName = POST_REQUEST_ACTION
	postRequest.Method = "POST"
	// 设置task，以JSON字符串的格式设置到请求中
	mapTask := make(map[string]string)
	mapTask[KEY_APP_KEY] = appKey
	mapTask[KEY_FILE_LINK] = fileLink
	task, err := json.Marshal(mapTask)
	if err != nil {
		panic(err)
	}
	postRequest.QueryParams[KEY_TASK] = string(task)
	/**
	 * 提交录音文件识别请求，处理服务端返回的响应
	 */
	postResponse, err := client.ProcessCommonRequest(postRequest)
	if err != nil {
		panic(err)
	}
	postResponseContent := postResponse.GetHttpContentString()
	//fmt.Println(postResponseContent)
	if postResponse.GetHttpStatus() != 200 {
		//fmt.Println("录音文件识别请求失败，Http错误码: ", postResponse.GetHttpStatus())
		return text, errors.New("录音文件识别请求失败，Http错误码")
	}
	var postMapResult map[string]interface{}
	err = json.Unmarshal([]byte(postResponseContent), &postMapResult)
	if err != nil {
		panic(err)
	}
	// 获取录音文件识别请求任务的ID，以供识别结果查询使用
	var taskId string = ""
	var statusText string = ""
	statusText = postMapResult[KEY_STATUS_TEXT].(string)
	if statusText == "SUCCESS" {
		//fmt.Println("录音文件识别请求成功响应!")
		taskId = postMapResult[KEY_TASK_ID].(string)
	} else {
		//fmt.Println("录音文件识别请求失败!")
		return text, errors.New("录音文件识别请求失败")
	}
	/**
	 * 创建识别结果查询请求，并设置taskId作为查询参数
	 */
	getRequest := requests.NewCommonRequest()
	getRequest.Domain = DOMAIN
	getRequest.Version = API_VERSION
	getRequest.Product = PRODUCT
	getRequest.ApiName = GET_REQUEST_ACTION
	getRequest.Method = "GET"
	getRequest.QueryParams[KEY_TASK_ID] = taskId
	/**
	 * 提交识别结果查询请求
	 * 以轮询的方式进行识别结果的查询，直到服务端返回的状态描述为“SUCCESS”、“SUCCESS_WITH_NO_VALID_FRAGMENT”，或者为错误描述，则结束轮询。
	 */
	statusText = ""
	for true {
		getResponse, err := client.ProcessCommonRequest(getRequest)
		if err != nil {
			panic(err)
		}
		getResponseContent := getResponse.GetHttpContentString()
		// fmt.Println("识别查询结果：", getResponseContent)
		if getResponse.GetHttpStatus() != 200 {
			// fmt.Println("识别结果查询请求失败，Http错误码：", getResponse.GetHttpStatus())
			break
		}
		var getMapResult map[string]interface{}
		err = json.Unmarshal([]byte(getResponseContent), &getMapResult)
		if err != nil {
			panic(err)
		}
		statusText = getMapResult[KEY_STATUS_TEXT].(string)
		if statusText == "RUNNING" || statusText == "QUEUEING" {
			// 继续轮询
			time.Sleep(2 * time.Second)
		} else {
			// 退出轮询
			//fmt.Println("识别查询结果：", getResponseContent)
			text = getResponseContent
			break
		}
	}
	if statusText == "SUCCESS" || statusText == "SUCCESS_WITH_NO_VALID_FRAGMENT" {
		//fmt.Println("录音文件识别成功！")
		text = getResText(text)
		return text, nil
	} else {
		//fmt.Println("录音文件识别失败！")
		return text, errors.New("录音文件识别失败")
	}
}
