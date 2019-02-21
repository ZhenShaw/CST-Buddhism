##导入csv文件到数据库


#### 建表
\i bazi.sql

#### 导入
切换到buddhism数据库

 在命令行 buddhism=# COPY bazizhu(gongli,xingqi,year,month,day,nianzhu,shuxiang,yuezhu,rizhu) from 'E:/bazi2.csv' with csv header;
（在C盘导入可能有未知错误，我放在了E盘导入）


####如果有出现
错误:  编码"GBK"的字符0x0x9b 0x2c在编码"UTF8"没有相对应值
背景:  COPY bazizhu, line 2

####解决
在命令行 \encoding UTF-8

