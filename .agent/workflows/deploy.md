---
description: How to deploy the Pomodoro Timer to the web
---

To use this application on other computers, the best way is to **deploy it to the web**. This makes it accessible via a URL (like `https://my-pomodoro.netlify.app`).

Here are two easy methods:

## Method 1: Drag & Drop to Netlify (Easiest)

1.  **Build the project**:
    Run the following command in your terminal to create a production-ready `dist` folder:
    ```bash
    npm run build
    ```
    // turbo
    This will create a `dist` folder in your project directory (`/Users/syz/tomato/dist`).

2.  **Deploy**:
    - Go to [Netlify Drop](https://app.netlify.com/drop).
    - Drag and drop the `dist` folder into the browser window.
    - Netlify will give you a live URL instantly.

## Method 2: Vercel (Recommended for updates)

If you have a GitHub account:
1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com) and sign up/login.
3.  Click "Add New Project" and select your repository.
4.  Vercel will automatically detect it's a Vite project and deploy it.
5.  Any time you push code changes, Vercel will automatically update the site.

## Method 3: Run Locally on Another Computer

If you want to run it locally on another machine (requires Node.js):
1.  Copy the entire project folder to the new computer.
2.  Install dependencies: `npm install`
3.  Start the server: `npm run dev`
