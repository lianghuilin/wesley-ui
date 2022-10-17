# 组件库开发和发布

## 开发步骤

- `components/your_component`新建组件，一个 index.js 入口文件，一个标准的.vue 文件
- 将组件暴露到`components/index.js`入口，统一提供`install()`注册方法

## 发布

- `yarn build`会将所有 components 组件打包到 dist 中
- 修改 pakage.json 的 version 版本号
- `npm login`登录 npm
- `npm publish`发布组件库
