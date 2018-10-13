#!/usr/bin/env bash
# 正常退出
set -e

if [ $# -lt 1 ]; then
    echo "usage: build <env> <dirs>"
    echo "example: "
    echo "         build dev"
    exit 0
fi
echo "Quoted Values: $*"
export dirNames=$*


env_var=$1

#!/bin/bash
#检查8080端口是否被占用，如果占用输出1，如果没有被占用输入0
pIDa=`lsof -i :9001|grep -v "PID" |grep node | awk '{print $2}'`
echo $pIDa
if [ "$pIDa" != "" ];
then
   echo "1"
   kill -9 ${pIDa}
else
   echo "0"
fi


rm -rf _html
echo "npm run $env_var"
npm run "$env_var"
exit 0
