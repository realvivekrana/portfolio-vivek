# GitHub Pages Deployment Setup

## ✅ What I've Done

I've created a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will automatically build and deploy your portfolio to GitHub Pages whenever you push to the `main` branch.

## 🔧 Manual Steps Required

You need to change the GitHub Pages settings in your repository:

### Step 1: Go to Repository Settings
1. Open your repository: https://github.com/realvivekrana/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio
2. Click on **Settings** (top menu)

### Step 2: Configure GitHub Pages
1. In the left sidebar, click **Pages** (under "Code and automation")
2. Under **Source**, select **GitHub Actions** (instead of "Deploy from a branch")
3. Save the changes

### Step 3: Trigger the Workflow
The workflow will automatically run when you push to `main`, but you can also trigger it manually:
1. Go to the **Actions** tab in your repository
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Select the `main` branch
5. Click **Run workflow**

## 🎉 Result

After completing these steps:
- ✅ Every push to `main` branch will automatically build and deploy your site
- ✅ Your live site will update within 1-2 minutes after pushing changes
- ✅ No need to manually run `npm run deploy` anymore
- ✅ The `gh-pages` branch is no longer needed

## 🌐 Your Live Site

After the workflow runs successfully, your portfolio will be live at:
https://realvivekrana.github.io/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio/

## 📝 How to Deploy Updates

From now on, just:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The GitHub Actions workflow will automatically build and deploy your changes!

## 🔍 Monitoring Deployments

You can monitor deployment status:
1. Go to the **Actions** tab in your repository
2. Click on the latest workflow run
3. Watch the build and deploy progress

## ⚠️ Important Notes

- The workflow uses Node.js 20 and npm
- Build output is from the `dist` folder
- The workflow has proper permissions for GitHub Pages deployment
- Concurrent deployments are prevented to avoid conflicts
