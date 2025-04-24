# Next.js + Zustand 多页面多全局状态 SSR/SSG 实战案例

这是一个同步一周前端进阶学习路线的最佳实践项目，适合用于求职、面试和团队学习。
- 涵盖 SSR, SSG, 路由、页面/接口数据加载、全局状态管理、服务端注入、水合（hydrate）、多 Store 独立管理。
- Store 包括用户、购物车和 UI 主题。
- 每个页面/状态特性均有独立实现，结构清晰。

## 目录说明
- `/pages/index.js`      - SSG首页，展示全局状态
- `/pages/about.js`      - SSG静态页面
- `/pages/posts.js`      - SSR数据页
- `/pages/profile.js`    - SSR用户页
- `/pages/cart.js`       - SSR购物车页
- `/stores/*.js`         - Zustand多store独立管理

## 运行

```bash
npm install
npm run dev
