FROM golang:1.10

#WORKDIR /Users/Shaw/go

ADD . .

RUN go get github.com/lib/pq
RUN go get github.com/aliyun/alibaba-cloud-sdk-go/sdk
RUN go get github.com/pkg/errors
RUN go build main.go

#EXPOSE 9000
#
#CMD ["go","build","main.go"]
FROM postgres
FROM nginx
EXPOSE 80
# 从编译阶段的中拷贝编译结果到当前镜像中
COPY --from=0 /go /go

ENTRYPOINT ["/go"]

