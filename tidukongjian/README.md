# 梯度空间官网

这是一个基于 Next.js 15 的官网项目，已经配置为静态导出模式。

## 本地开发

启动开发服务器：

```bash
npm install
npm run dev
```

默认访问地址：

```text
http://localhost:3000
```

## 静态构建

执行以下命令可以生成可直接部署到 Nginx 的静态文件：

```bash
npm run build
```

构建完成后，静态文件会输出到：

```text
out/
```

`out/` 目录可以直接上传到服务器，例如部署到：

```text
/usr/share/nginx/html/tidukongjian
```

## Nginx 部署

项目适合使用 Nginx 直接托管静态文件，不需要 `next start`。

示例配置见当前项目中的 [homepage.conf](./homepage.conf)。
