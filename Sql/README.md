# 初始化数据库

以postgres用户身份创建buddhism数据库
```bash
$ su postgres
$ createdb buddhism
# 或者 sudo -u postgres createdb busshism

$ psql buddhism
```

为postgres设置（修改）密码
```sql
ALTER USER postgres WITH PASSWORD 'postgres';
```

创建数据表文件 table.sql
```sql
create table users (
    uid serial primary key,
    wechatID varchar(50) not  null,
    created_at timestamp default 'now()'

);
```

每个数据表都用sql文件方式创建，并且包含上面的三个字段，相关的创建命令保存在  tablename.sql 文件内。
