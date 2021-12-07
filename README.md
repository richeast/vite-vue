# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

# 学习笔记

记录学习 Vue 3 和 Vite 过程中的笔记

## 1、搭建一个项目

```bash
npm init vite@latest my-vue-app -- --template vue
```

> 第一个问题：“Network: use `--host` to expose”
> 解决方法：https://blog.csdn.net/qq_41664096/article/details/118961381
> 运行 git init 初始化 git 项目

## 2、初始化项目工程目录

```bash
|-- .vscode             编辑器配置文件
|-- node_modules        项目依赖文件
|-- public              资源文件
|-- src
|   |-- api             数据请求
|   |-- assets          静态资源
|   |-- components      组件
|   |-- views           页面
|   |-- router          路由配置
|   |-- store           vuex数据
|   |-- utils           工具函数
|   |-- App.vue         单文件组件入口
|   |-- main.js         入口
|-- .gitignore
|-- index.html          入口文件
|-- package-lock.json
|-- package.json        npm配置文件
|-- README.md
|-- vite.config.js      工程化配置文件
```

## 3、安装 vue-router

```bash
npm install vue-router@4
```

## 4、安装 ESlint 插件 --- javascript 代码检测工具

```bash
# 安装
npm install eslint --save-dev
# 执行下面命令，然后一步步进行，会安装插件 eslint-plugin-vue
npx eslint --init
```

> 为了支持 vue 3 在.eslintrc 设置中 "plugin:vue/base"

## 5、安装 Prettier 插件

```bash
npm install --save-dev --save-exact prettier
```

在根目录下创建 .prettierrc.json 和 .prettierignore 文件

解决 ESlint 和 Prettier 冲突的问题，安装 eslint-config-prettier

```bash
npm install --save-dev eslint-config-prettier
```

## 6、Git hooks

```bash
npm install --save-dev husky lint-staged # 安装husky、lint-staged
npx husky install # 初始化husky
npm set-script prepare "husky install"
npx husky add .husky/pre-commit "npx lint-staged" # 新增 pre-commit 钩子，提交前检查并格式化代码
npx husky add .husky/commit-msg "node scripts/verifyCommit.js" # 新增 commit msg 钩子，规定提交信息的格式
```

## 7、集成 css 编译器

```bash
# .scss and .sass
npm install -D sass

# .less
npm install -D less

# .styl and .stylus
npm install -D stylus
```

## 8、集成 element-plus

```bash
npm install element-plus --save
# 按需引入
npm install -D unplugin-vue-components unplugin-auto-import
```

## 9、封装 Axios

```bash
npm install axios
```

## 10、安装 vuex

```bash
npm install vuex@next --save
# 使用时
# import { useStore } from 'vuex'; const store = useStore();
```
