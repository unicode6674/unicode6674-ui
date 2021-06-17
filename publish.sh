#!/usr/bin/env bash
npm config get registry # 检查仓库镜像库
nrm use npm
echo '请进行登录相关操作：'
npm login # 登陆
# npm login --scope=@guoqzuo # 设置登录作用域
echo "-------publishing-------"
npm publish --access public # 发布
npm use zhijianglab # 设置为之江镜像
echo "发布完成"
exit
