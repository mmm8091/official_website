# RCIT官方网站

## 开始

### 环境

```
Node.js 16.16.0 LTS (只测试过这个版本.理论上Node.js>=8.6即可.如果您安装的不是这个版本,依然可以进行尝试.
```


### 运行

安装依赖

```shell
npm install
```

启动服务以进行开发

```shell
npm run dev
```

生产静态文件

```shell
npm run build
```

在`./docs/.vuepress/dist`可以找到生产的静态文件

## 问题

```
Error: error:0308010C:digital envelope routines::unsupported
```

这个问题是在 node.js 17 及更高版本的环境下, 会出现兼容性的问题, 原因是 node.js 17 版本中使用了的OpenSSL3.0, 而OpenSSL3.0对允许算法和密钥大小增加了严格的限制. node.js 16 不会出现这个问题.

可行的解决方案: 

设置环境变量. 使用旧版本的OpenSSL, 下面是Windows环境下的方案

```
SET NODE_OPTIONS=--openssl-legacy-provider
```

例如, 解决了该问题的完整的运行的命令为:

```
SET NODE_OPTIONS=--openssl-legacy-provider && vuepress dev docs
```
