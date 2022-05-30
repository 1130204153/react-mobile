## Getting Started

#### 工程介绍：
该工程为小程序H5

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

### 一、样式
1、所有样式统一使用rem，例如设计稿为17px，使用rem则为17/100 = .17rem
### 一、全局变量
1、在@/context中进行全局变量的申明
2、使用useContext进行变量的修改
```
import React, { useContext } from 'react';
import { ctx } from '@/context';

function Index() {
  const { userInfo, setUserInfo } = useContext(ctx);
}
```
### 三、国际化
1、国际化工具在src/locale/index.js中<br />
2、本地的国际化文案统一在src/locale/Context中。新增国际化文案时，需要在本地中存储一份，且给对应的后端进行录入和翻译。
