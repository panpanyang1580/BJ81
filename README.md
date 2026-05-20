# 北京81

一个基于原生 HTML / CSS / JavaScript 的 H5 移动端项目。

## 目录结构

```
北京81/
├── index.html          # 入口页面
├── styles/             # 样式文件
│   ├── reset.css       # 样式重置
│   └── main.css        # 主样式
├── scripts/            # 脚本文件
│   └── main.js         # 主脚本（含 rem 适配）
├── assets/             # 静态资源
│   ├── images/         # 图片
│   ├── icons/          # 图标
│   └── fonts/          # 字体
├── README.md
└── .gitignore
```



## 移动端调试

使用 Chrome / Safari 的设备模拟器，或在手机浏览器中访问本机 IP。

## 适配方案

- `viewport` 已设置 `initial-scale=1.0`、`viewport-fit=cover`
- 设计稿基准宽度 375px，通过 `scripts/main.js` 中的 `setRem()` 做 rem 适配
- 使用 `env(safe-area-inset-*)` 适配 iPhone 刘海屏 / 底部安全区

## 后续规划

- [ ] 接入路由（如有多页面需要）
- [ ] 增加常用工具函数
- [ ] 接口请求封装
- [ ] 视需要再决定是否引入框架（Vue / React）
