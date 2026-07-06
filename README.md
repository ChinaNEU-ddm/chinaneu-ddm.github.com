# 分布式数据管理课题组主页

这是东北大学计算机科学与工程学院分布式数据管理课题组（Distributed Data Management）的 GitHub Pages 站点仓库。

公开访问地址：

https://chinaneu-ddm.github.io/

## 内容

- `index.html`：站点主页，包含课题组概况、研究方向、导师团队、代表性成果和招生信息。
- `styles.css`：页面样式。
- `script.js`：成果列表加载、切换与导师筛选逻辑。
- `data/*.json`：论文、科研项目、获奖信息等结构化数据。
- `scripts/update-data.mjs`：从三位老师公开主页同步成果数据的脚本。
- `.github/workflows/update-data.yml`：每周一自动同步数据，也支持在 GitHub Actions 中手动触发。
- `assets/images/`：导师照片等静态图片资源。

## 本地预览

页面通过 `fetch()` 读取 `data/*.json`，建议启动一个本地静态服务后预览：

```bash
python3 -m http.server 8000
```

然后访问：

http://localhost:8000/

## 可选检查

```bash
node --check script.js
node scripts/update-data.mjs
```

## 发布

推送到 `main` 分支后，GitHub Pages 会自动发布到：

https://chinaneu-ddm.github.io/
