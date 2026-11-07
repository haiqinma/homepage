# YeYing Homepage

独立迭代的夜莺社区首页，迁出自 `node/web` 的首页视图与公共视觉资产。

## 开发

```bash
npm install
npm run dev
```

## 配置

- `VITE_YEYING_COMMUNITY_PORTAL_URL`: 社区门户入口，默认 `/market`。

## 构建

```bash
npm run build
```

构建后的静态文件统一输出到 `output/`，可作为 `homepage-yeying` 静态制品的内容目录。
