npm 常用命令
- npm init 
- npm install   package.json包安装
- npm install   packageName --save 运行依赖
- npm install   packageName --save-dev 开发依赖
- npm install   packageName@version
- npm install   packageName -g 全局安装
- npm info packageName   查看某个包远程仓库的信息
- npm rm packageName --save
- npm rm packageName --save-dev
- npm list
- npm help 
- npm install -g cnpm  --registry=https://registry.npm.taobao.org  安装淘宝镜像
- npm config set registry="https://registry.npm.taobao.org" 设置淘宝镜像
- npm run 执行package.json 的script中的配置命令
- npm root -g 查看全局的下载目录

# react-scaffold 

1. sudo npm install -g create-react-app
2. create-react-app react-scaffold
3. 设计源码目录
    - api ajax请求相关的模块文件夹
    - assets 公用资源文件夹
    - components  ui组件模块文件夹
    - containers 容器组件文件夹
    - redux  redux 相关的模块文件夹
    - utils  工具模块文件夹
    - index.js  入口js

```
编码测试
npm start
访问 http://localhost:3000编码，自动编译打包刷新 live-reload

打包发布
npm run build

一个简单的服务器
npm install -g serve  
serve build
访问 http//localhost:5000
```
### config
https://segmentfault.com/a/1190000016765019
这篇博客简述了 更改脚手架 webpack配置的方法

npm install --save-dev react-app-rewired
定义加载配置的js模块 config.overrides.js

如果要只是用antd-mobile
`module.exports = function override(config, env) {
    // do stuff with the webpack config...
    console.log(config);
    return config;
};
`

### config file ===> config-overrides.js

### redux

```
npm install --save redux@3.7.2 react-redux redux-thunk
npm install --save redux-devtools-extension
下载 redux  不能是最新版本
```


### axios
封装的ajax请求

> npm install --save axios 安装axios

然后在 api文件中写借口处理函数

### 安装 propTypes

> npm install --save prop-types

### js-cookie 包装 cookie

> npm install --save js-cookie
