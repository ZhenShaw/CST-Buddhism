FROM golang:1.11
ADD ./src .
RUN go get github.com/lib/pq && \
    go get github.com/aliyun/alibaba-cloud-sdk-go/sdk &&\
    # 静态编译go
    CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

FROM alpine
# 从上一层复制编译后的程序到Alpine目录
COPY --from=0 /go/main /bin

CMD ["main"]