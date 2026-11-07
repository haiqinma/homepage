# 夜莺钱包官网

`wallet.yeying.pub` 的静态官网入口，位于社区 homepage 仓库的 `wallet/` 目录。

用户手册通过同域的 <https://wallet.yeying.pub/docs/> 提供中文和 English 版本。首页的安全、备份恢复、身份与开发者手册入口优先指向官网文档；GitHub 链接保留给完整技术规范、源代码和版本记录。

## 本地预览

```bash
python3 -m http.server 4178
```

然后打开 <http://127.0.0.1:4178>。

页面支持中文和 English。首次访问会根据浏览器语言选择界面（英文浏览器默认 English，其他语言默认中文），顶部语言按钮可以切换，选择会保存在当前浏览器中。

首页通过 jsDelivr 加载固定版本的 `@yeying-community/web3-bs` 浏览器构建，并使用 Subresource Integrity 校验。连接检测、账户读取、连接请求和账户变更监听统一由该 SDK 提供。

## 发布前配置

- 将 `main.js` 和页面中的 Node 应用中心链接替换为正式的 Chrome Web Store 钱包链接。
- 确认正式扩展的 Extension ID 已固定，并在 Node 应用中心登记对应的 `chrome-extension://<extension-id>` origin。
- 站点使用 HTTPS，并配置 HSTS、CSP、`X-Content-Type-Options` 和 `Referrer-Policy`。
- 不在网站上收集助记词、私钥或钱包身份（Wallet Identity）私钥。
- 发布时需将 `wallet/` 目录整体部署到 `wallet.yeying.pub`，并确保 `/docs/` 静态路径和目录索引可用。
