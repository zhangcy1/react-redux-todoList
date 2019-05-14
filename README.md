## 基于 React 的 todoList
简易版 todoList，create-react-app 做脚手架，Redux 做状态管理
利用本地存储做数据的增、删、改、查

### 安装与使用

```
git clone https://github.com/zhangzhangzhangYuan/todoList.git // 下载 todoList
cd todoList // 进入 todoList 目录
npm install // 安装依赖
npm start // 运行项目
```

### 技术栈

- Create-React-App （React 脚手架工具）
- React （核心框架）
- Redux (状态管理)
- React-Redux (React 绑定库)
- Redux-Thunk (Redux 中间件)
- ES6
- LocalStorage (本地存储)

### 项目结构
```
.
├── README.md                         // 项目描述
├── config-overrides.js               // 修改默认配置
├── package-lock.json
├── package.json                      // 包文件
├── public
│   ├── favicon.ico                   // 网页icon图标
│   └── index.html                    // html入口文件
├── src
│   ├── App.js                        // 根组件
│   ├── Components
│   ├── TodoList
│   │   ├── Components                // 组件目录
│   │   │   ├── InputValue.js         // 输入框、新增、搜索功能组件
│   │   │   └── ListItem.js           // list组件（暂为空，后续抽出）
│   │   ├── TodoList.css              
│   │   ├── TodoList.js               // 主组件
│   │   └── store                     // redux目录
│   │       ├── actionCreators.js     // actions方法
│   │       ├── actionTypes.js        // actions常量
│   │       ├── index.js              // 引用redux
│   │       └── reducer.js            // 处理数据
│   ├── Utils
│   │   └── Utils.js                  // 公共JS方法
│   └── index.js                      // JS入口文件
└── yarn.lock
```
### 功能

- 新增
- 删除
- 查询
- 修改

### 其他说明

- 本菜鸟个人练手项目
- 如果也帮到您练练手，喜欢的话，您可以点右上角 "Star" 表示支持，谢谢！
- 后续：会做些修改
- 如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎提出意见和建议
