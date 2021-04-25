# 便携式轻型项目集合 imeik-platform-motion

## 安装项目
```
npm install
```
### 主题定义：项目根目录下 src 目录中每一个分支目录名都是一个主题名 index 主题为默认。
### 如需要自己创建新主题，直接复制 index 到新的主题名称即可，新主题必须位于 src 目录下。
### 当从新的主题启动项目时，项目中的 @ 路径别名会被定位到主题根目录下，无需手动维护。
### 主题之间除了 node_modules 依赖共用以外，其它所有内容不共享，多余的依赖不会被编译打包。

### 启动开发环境
```
npm run serve --主题名称(如果不加主题参数，则默认为 index 主题)
```

### 编译到测试或生产环境
### 编译输出路径为 dist/主题名/
```
npm run stage --主题名称(不加则默认为 index 主题)
npm run build --主题名称(不加则默认为 index 主题)
```

### 生成 lint 配置文件
```
npm run lint
```

### 自定义配置

点击 [查看Vue官方链接](https://cli.vuejs.org/config/).