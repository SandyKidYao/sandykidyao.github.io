---
title: "我的第一篇Hugo博客 - Markdown格式展示"
date: 2025-07-22T10:30:00+08:00
draft: false
tags: ["hugo", "markdown", "博客"]
categories: ["技术分享"]
author: "博主"
description: "这是一篇用来展示各种Markdown格式的Demo博客文章"
---

## 前言

欢迎来到我的技术博客！这篇文章主要用来展示Hugo博客中各种Markdown格式的渲染效果。

## 文本格式

### 基础文本样式

这里是**粗体文本**，这里是*斜体文本*，这里是~~删除线文本~~。

你也可以使用`行内代码`来突出显示重要的变量或命令。

### 引用块

> 这是一个引用块的示例。引用块通常用来引用他人的观点或者突出显示重要信息。
> 
> 引用块可以有多行内容，并且支持**Markdown格式**。

## 列表展示

### 无序列表
- 第一个要点
- 第二个要点
  - 嵌套列表项
  - 另一个嵌套项
- 第三个要点

### 有序列表
1. 首先做这件事
2. 然后做那件事
3. 最后完成这个
   1. 子步骤一
   2. 子步骤二

## 代码展示

### 行内代码
安装Hugo很简单，只需要运行 `hugo new site my-blog` 命令。

### 代码块

```bash
# 创建新的Hugo站点
hugo new site my-blog
cd my-blog

# 添加主题
git submodule add https://github.com/nanxiaobei/hugo-paper themes/paper

# 启动本地服务器
hugo server -D
```

```javascript
// JavaScript代码示例
function greetUser(name) {
    return `Hello, ${name}! Welcome to my blog.`;
}

const message = greetUser("访客");
console.log(message);
```

```python
# Python代码示例
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# 计算斐波那契数列前10项
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")
```

## 链接和图片

### 链接
- 这是一个[外部链接](https://gohugo.io/)指向Hugo官网
- 这是一个[内部链接](/demos/odcs.html)指向我的项目演示页面
- 这是一个[相对链接](../about/)指向关于页面

### 表格

| 特性 | Hugo | Jekyll | Hexo |
|------|------|--------|------|
| 构建速度 | 🚀 极快 | 🐌 较慢 | 🏃 中等 |
| 学习曲线 | 📈 平缓 | 📈 陡峭 | 📈 平缓 |
| 主题数量 | 🎨 丰富 | 🎨 最多 | 🎨 丰富 |
| 部署难度 | ✅ 简单 | ⚠️ 中等 | ✅ 简单 |

## 数学公式

Hugo支持数学公式渲染（需要配置）：

行内公式：$E = mc^2$

块级公式：
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

## 任务列表

- [x] 完成Hugo博客搭建
- [x] 选择合适的主题
- [ ] 编写第一篇技术文章
- [ ] 配置评论系统
- [ ] 添加Google Analytics

## 警告和提示

> **注意：** 这是一个重要提示框，用来提醒读者注意某些关键信息。

> **技巧：** 使用Hugo的shortcodes可以创建更丰富的内容格式。

## 总结

这篇Demo文章展示了Markdown在Hugo博客中的各种格式效果，包括：

1. **文本格式** - 粗体、斜体、删除线等
2. **列表结构** - 有序和无序列表
3. **代码展示** - 支持语法高亮的代码块
4. **表格布局** - 清晰的数据展示
5. **链接引用** - 内外部链接管理

希望这个格式参考对你有帮助！接下来就可以开始写你的第一篇正式技术博客了。

---

*发布时间：2025年7月22日*  
*标签：Hugo, Markdown, 博客搭建*