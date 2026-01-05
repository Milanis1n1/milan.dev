# Deployment Guide (Vercel)

Follow these steps to deploy your portfolio to Vercel.

## Option 1: Vercel Dashboard (Recommended)

1.  **Push your code to GitHub**
    - Ensure your project is in a GitHub repository.
    
2.  **Sign up / Login to Vercel**
    - Go to [vercel.com](https://vercel.com).
    - Login using your GitHub account.

3.  **Add New Project**
    - Click **"Add New..."** button and select **"Project"**.
    - Find your `portfolio` repository in the list and click **"Import"**.

4.  **Configure Project**
    - **Framework Preset**: Vercel should automatically detect `Vite`.
    - **Root Directory**: Leave as `./`.
    - **Build Command**: `npm run build` (Default).
    - **Output Directory**: `dist` (Default).
    - **Install Command**: `npm install` (Default).
    
5.  **Deploy**
    - Click **"Deploy"**.
    - Wait for the build to complete (approx. 1 minute).
    - Once done, you will see a preview of your live site!

## Option 2: Vercel CLI (Advanced)

If you prefer using the command line:

1.  Install Vercel CLI:
    ```bash
    npm i -g vercel
    ```

2.  Login:
    ```bash
    vercel login
    ```

3.  Deploy:
    ```bash
    vercel
    ```
    - Follow the prompts (Select scope, link to existing project: No, etc.)
    - Accept default settings.

## Option 3: Manual Drag & Drop

1.  Run the build command locally:
    ```bash
    npm run build
    ```
2.  This generates a `dist` folder in your project root.
3.  Go to the Vercel Dashboard.
4.  Create a new project.
5.  Drag and drop the contents of the `dist` folder if the UI allows manual uploads (Note: Git integration is preferred for automatic updates).

## Troubleshooting

-   **Routing Issues**: If refreshing a page gives a 404 error, ensure `vercel.json` exists in the root with the rewrite rules (already included in this project).
-   **Build Failures**: Check the Vercel build logs. Ensure `npm run build` works locally first.
