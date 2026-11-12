export interface Project {
  name: string;
  slug: string;
  description: string;
  category: string;
  cover: string;
  coverAlt: string;
  repository: string;
  website?: string;
  icon?: string;
}

export const projects: Project[] = [
  {
    name: 'BlogBuddy', slug: 'blogbuddy',
    description: '在 VS Code 中专注写 Markdown，把问题留在段落旁，让 AI 在页边回应。',
    category: 'VS Code · 写作工具', cover: '/covers/blogbuddy.svg',
    coverAlt: '居中的文稿框线，两侧等距旁注通过短线连接到段落',
    repository: 'https://github.com/FulcrumStd/blogbuddy',
    website: 'https://sandykidyao.github.io/blogbuddy/', icon: '/icons/blogbuddy.png',
  },
  {
    name: 'Baner', slug: 'baner',
    description: '超轻量的分块记事板：同页书写、按 tab 的 git 同步与端侧加密。',
    category: 'macOS · 记事板', cover: '/covers/baner.svg',
    coverAlt: '居中的画板内，三个等大文本块自上而下等距排列并相连',
    repository: 'https://github.com/SandyKidYao/baner',
    website: 'https://sandykidyao.github.io/baner/', icon: '/icons/baner.png',
  },
  {
    name: 'Konbini', slug: 'konbini',
    description: '一间随时间、天气与四季变化的便利店，留给桌面，也留给忙碌的一天。',
    category: 'Three.js · 桌面场景', cover: '/covers/konbini.svg',
    coverAlt: '对称的便利店立面，门窗与遮阳篷以细框线描绘',
    repository: 'https://github.com/SandyKidYao/konbini',
    website: 'https://sandykidyao.github.io/konbini/', icon: '/icons/konbini.png',
  },
  {
    name: 'Wallpaper-shift', slug: 'wallpaper-shift',
    description: '让手机锁屏与桌面壁纸，跟着一天的时间变化。',
    category: 'Android · 壁纸', cover: '/covers/wallpaper-shift.svg',
    coverAlt: '三个等宽风景框架，依次表现清晨、白天与夜晚',
    repository: 'https://github.com/SandyKidYao/wallpaper-shift', icon: '/icons/wallpaper-shift.png',
    website: 'https://sandykidyao.github.io/wallpaper-shift/',
  },
  {
    name: 'nowly', slug: 'nowly',
    description: '留意此刻，就够了。轻量、离线地记录日常状态。',
    category: 'Android · 日常记录', cover: '/covers/nowly.svg',
    coverAlt: '同心圆围绕中心时刻，四向刻度均衡分布',
    repository: 'https://github.com/SandyKidYao/nowly', icon: '/icons/nowly.svg',
  },
  {
    name: 'a-watcher', slug: 'a-watcher',
    description: '在 macOS 菜单栏里，掌握 Codex 与 Claude Code 的会话、用量和配额。',
    category: 'macOS · 开发工具', cover: '/covers/a-watcher.svg',
    coverAlt: '会话窗口中的对称活动信号',
    repository: 'https://github.com/SandyKidYao/a-watcher', icon: '/icons/a-watcher.png',
  },
  {
    name: 'evk', slug: 'evk',
    description: '本地优先，统一管理 shell 配置与 .env 文件中的环境变量。',
    category: 'CLI · 开发工具', cover: '/covers/evk.svg',
    coverAlt: '两个等大配置容器，由双向路径连接',
    repository: 'https://github.com/SandyKidYao/evk',
  },
  {
    name: 'Xiaobai', slug: 'xiaobai',
    description: '用小步交互与清晰的协作流程，改善人与 AI 一起工作的方式。',
    category: 'AI · 协作技能', cover: '/covers/xiaobai.svg',
    coverAlt: '镜像的两侧框线，通过三个等距节点连接',
    repository: 'https://github.com/SandyKidYao/xiaobai-skill',
  },
];
