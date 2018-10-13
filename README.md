 # 智能量化
 
 ### 构建步骤
 * 安装nodejs 
 ```bash
brew install node
```
 * 全局安装yarn 或者 cnpm
 ```bash

npm install -g yarn

```
 * 安装依赖
 
 ```bash
 
yarn install

```
###  运行开发环境
* 执行如下脚本
```bash
./build.sh dev home
```
* 访问[https://127.0.0.1:9001/home/index.html](https://127.0.0.1:9001/home/index.html)

### 发布测试环境

*  打包prod
```bash
./build.sh prod home
```
* 上传文件至服务器
```bash
./upload.sh 
```
