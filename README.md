## 开发环境搭建

+ 安装node.js

+ 安装gulp 


## 工程目录结构

```
|-src //源文件
    |-less //css预处理文件
        |-_variables
        |-components
        |-views
            |-***
                |-***.less
    |-views //html模板文件
        |-common
        |-components
            |-***
                |-section.html
        |-data
            |-***.json
        |-layout
        |-***.html
    |-js 
    |-static //静态资源文件
        |-images
        |-fonts
        |-svg
        |-video
        |-audio
|-webroot //生产文件
    |-css
        |-main.css
    |-js
    |-images 
    |-fonts
    |-svg
    |-video
    |-audio
|-package.json //NPM配置文件
|-gulpfile.js //工程构建入口文件
|-README.md //说明文档
```

## 所需技能

+ gulp 

+ less

+ swig 

## 开发过程指南

+ 定义swig模板框架
```
src/views/layout/_layout.html //定义
src/views/index.html //调用
```
+ 定义swig公用组件模块
```
src/views/common/form.html //定义
src/views/components/index/main.html //调用
```
+ 定义less公共变量，作用域
```
src/less/_variables/*.less //定义
```
