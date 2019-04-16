echo 1.删除旧的文件
rm -rf $PWD/nginx/Client $PWD/go_server/src

echo 2.build Angular代码
cd ../Client 
npm install && npm audit fix && npm run-script build

echo 3.复制新的文件到对应文件夹
cd .. 
cp -r Client/dist/Client Docker/nginx
cp -r Server/ Docker/go_server/src
