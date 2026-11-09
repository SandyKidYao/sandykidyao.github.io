# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Product Purpose

SandyKid 的博客与项目网站。首页让文章与项目都能直接被发现，二者均衡呈现（用户确认）。

## Capabilities and Constraints

- 删除个人介绍，不再区分 personal 与 professional。
- 博客统一浏览；保留已有文章内容。现有技术栈为 Astro，仓库用于 GitHub Pages。
- 项目只展示 Konbini、Wallpaper-shift、nowly、a-watcher、evk、Xiaobai。
- Konbini 有独立项目页：https://sandykidyao.github.io/konbini/ 。
- 已确认清透图文卡片布局，亮暗主题共用结构；博客在上，项目在下。

## Evidence on Hand

- `src/content/blog/`：四篇中文博客文章。
- GitHub 用户 SandyKidYao 的公开仓库元数据；Xiaobai 对应 `xiaobai-skill`。
- Konbini 为 Three.js 便利店场景；Wallpaper-shift 为 Android 定时壁纸切换工具；nowly 为离线 Android 状态记录应用；a-watcher 为 macOS 菜单栏 AI 编程会话监控工具；evk 为环境变量 CLI。

## Open Decisions

- 主要读者尚未单独确认；当前内容为中文，主题涉及 AI 与软件开发。
- 用户补充确认：博客与项目上下排列，不采用左右分栏；每篇博客和每个项目均配图，视觉更现代。最终风格已确定。

## Confirmed Visual Preferences

- 清透图文卡片与深色产品画廊合并为亮、暗两套主题，保持相同布局。
- 当前正式封面默认采用几何框线，纸雕浅浮层作为保留的备选语言。
- 四篇现有文章与六个项目均有正式框线封面，项目图标始终在名称旁独立显示。

- 最新反馈：项目图标与配图必须分离；图标置于项目名称旁。重新比较几何框线封面，要求更明确的对称与视觉均衡。

## Current Delivery

- 保存两套可复用提示词：`design/cover-systems/prompts/geometric-line.md` 与 `paper-relief.md`。
- `AGENTS.md` 记录用户的长期偏好：新增项目或文章请求封面时，默认几何框线。
- 首页、博客归档、项目页、文章页均已重做；历史文章地址保留，旧分类入口归并。

- 最新首页要求：删除开场标语与介绍，文章和项目各最多展示四个；项目区标题为“项目”；主题使用图标按钮。完整归档和项目页继续展示全部内容。
