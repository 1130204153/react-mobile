## Getting Started

#### 工程介绍：
该工程为superApp微前端门户，依赖子工程mpass和服务号mpt运行

#### 注意事项：
1、工程需要遵守浩鲸代码规范，务必开启本地eslint代码检测



### 一、项目运行：

```bash
// 已安装yarn请忽略
$ npm install yarn -g
```

```bash
$ yarn install
```

Start the dev server,

```bash
$ yarn start
```

### 二、父子工程间通讯
1、在app.ts的useQiankunStateForSlave增加state<br />
2、统一在hooks中的useGlobalState对state进行修改

### 三、国际化
1、国际化工具在src/locale/index.js中<br />
2、本地的国际化文案统一在src/locale/Context中。新增国际化文案时，需要在本地中存储一份，且给对应的后端进行录入和翻译。
