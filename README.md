# 番茄钟 (Pomodoro Timer)

这是一个基于 React + Vite 构建的现代化番茄钟应用，具有极简的高级设计风格。

## ✨ 功能特点

- **自定义时长**：可自由设置专注时间、短休息和长休息时长。
- **自动切换**：支持专注 -> 短休息 -> 专注 -> 长休息的自动循环逻辑。
- **高级 UI 设计**：
  - 深色模式 (Dark Mode)
  - 玻璃拟态效果 (Glassmorphism)
  - 流畅的微交互动画
- **动态状态栏**：
  - 浏览器标签页标题会实时显示剩余时间。
  - Favicon 图标颜色会根据当前模式（专注/休息）改变。
- **Windows 桌面应用**：支持打包为 Windows 可执行文件 (.exe)。

## 🚀 快速开始 (本地开发)

确保你的电脑已安装 [Node.js](https://nodejs.org/)。

1.  **安装依赖**：
    ```bash
    npm install
    ```

2.  **启动开发服务器**：
    ```bash
    npm run dev
    ```
    打开浏览器访问 `http://localhost:5173` 即可。

## 📦 部署指南

### 1. 部署到 Web (推荐)

你可以将应用部署到 Netlify 或 Vercel，这样可以在任何设备上通过链接访问。

**方法 A：Netlify (最简单)**
1.  运行构建命令：
    ```bash
    npm run build
    ```
    这会生成一个 `dist` 文件夹。
2.  打开 [Netlify Drop](https://app.netlify.com/drop)。
3.  将 `dist` 文件夹拖入网页中，即可获得访问链接。

**方法 B：Vercel**
1.  将代码推送到 GitHub。
2.  在 Vercel 中导入你的 GitHub 仓库，它会自动识别并部署。

### 2. 打包为 Windows 应用 (.exe)

你可以将此应用打包为独立的 Windows 软件。

1.  **构建安装包**：
    ```bash
    npm run electron:build:win
    ```
    *注意：首次运行可能需要几分钟下载 Electron 相关依赖，请耐心等待。*

2.  **找到文件**：
    构建完成后，安装包位于 `dist-electron` 文件夹中：
    - `dist-electron/Pomodoro Timer Setup 0.0.0.exe`

## 🛠️ 常用命令

| 命令 | 说明 |
| :--- | :--- |
| `npm run dev` | 启动本地开发服务器 (Web) |
| `npm run build` | 构建 Web 生产版本 |
| `npm run electron:dev` | 在开发模式下启动 Electron 窗口 |
| `npm run electron:build:win` | 打包 Windows 安装程序 (.exe) |

## 📄 许可证

MIT License
