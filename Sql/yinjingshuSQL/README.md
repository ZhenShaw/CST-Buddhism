# 助印经书数据库

#### 建表
```bash
捐赠者数据表
buddhism=# \i donatorTable.sql 
经书数据表
buddhism=# \i scriptureTable.sql 
```

#### 模拟数据
```bash
插入捐赠者数据（次数任意，每次执行增加6组数据）
buddhism=# \i insertDonatorData.sql
插入经书数据（模拟10本经书，经书名不可重复，限执行一次）
buddhism=# \i insertScriptureData.sql
```




