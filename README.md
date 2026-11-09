# SandyKid · 博客与项目

使用 Astro 构建，部署到 GitHub Pages。首页按纵向展示博客与项目，每部分最多四项，完整列表保留在各自页面。右上角图标按钮循环切换跟随系统、亮色和暗色。

## 本地开发

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 添加文章

在 `src/content/blog/` 新建 `YYYY-MM-slug.md`。不再区分 personal / professional；历史文件夹仅用于保留已有文章 URL。

```yaml
---
title: 文章标题
description: 简短摘要
pubDate: 2026-11-09
tags: [软件工程]
cover:
  src: /covers/example.svg
  alt: 对封面主体的简短描述
---
```

博客页按 `tags` 自动生成筛选按钮与篇数。点击文章卡片或详情页上的标签可进入 `/blog/?tag=标签`；筛选支持分享链接、刷新和浏览器前进后退。

已有 `heroImage` 仍受支持；有 `cover` 时优先显示。已有文章正文与路径不变。旧的 `/blog/personal/` 和 `/blog/professional/` 分类入口跳转至统一的 `/blog/`。

## 添加项目

编辑 `src/data/projects.ts`，提供名称、简介、类别、封面与 GitHub URL。独立项目页使用 `website`；原有图标使用 `icon`，始终显示在名称旁，不能与封面混合。

## 生成封面

**默认使用几何框线风格**。在要求 AI 为新项目或文章绘制封面时，仓库根目录的 `AGENTS.md` 会指向该默认规范。

- 默认提示词：[`design/cover-systems/prompts/geometric-line.md`](design/cover-systems/prompts/geometric-line.md)
- 纸雕备选提示词：[`design/cover-systems/prompts/paper-relief.md`](design/cover-systems/prompts/paper-relief.md)
- 正式封面：`public/covers/`，SVG 为 1600×900，6 单位线宽。
- 封面登记：`design/cover-systems/cover-manifest.json`。
- 历史风格与试样：`design/cover-systems/`，不会打包到正式网站。

所有封面共用亮暗主题；图标只表达身份，封面只表达内容。具体布局与颜色记录在 `DESIGN.md`。

## 发布

推送 `main` 会触发现有 `.github/workflows/deploy.yml`，构建并部署 GitHub Pages。本地预览和构建不会自动发布。
