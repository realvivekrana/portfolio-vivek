# Deployment Guide - GitHub & Vercel

This guide will help you deploy your portfolio to GitHub and Vercel.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account
- Vercel account

## 🚀 Step-by-Step Deployment

### Step 1: Prepare the Project

The project is already prepared with:
- ✅ Clean folder structure
- ✅ Professional README.md
- ✅ Proper .gitignore file
- ✅ Correct build configuration

### Step 2: Connect to GitHub Repository

#### 2.1 Check Current Git Status

```bash
git status
```

#### 2.2 Add Remote Repository

```bash
git remote add origin https://github.com/realvivekrana/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio.git
```

Or if remote already exists, update it:

```bash
git remote set-url origin https://github.com/realvivekrana/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio.git
```

#### 2.3 Stage All Files

```bash
git add .
```

#### 2.4 Commit Changes

```bash
git commit -m "Initial commit: Complete portfolio with dark/light mode and responsive design"
```

#### 2.5 Push to GitHub

```bash
git branch -M main
git push -u origin main
```

If you encounter authentication issues, you may need to:
- Use a Personal Access Token (PAT) instead of password
- Or use SSH authentication

### Step 3: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/vivek-kumar-rana-s-projects
   - Click "Add New" → "Project"

2. **Import GitHub Repository**
   - Click "Import Git Repository"
   - Select your GitHub account
   - Find and select: `-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio`
   - Click "Import"

3. **Configure Project Settings**
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (if needed)
   - No environment variables required for this project
   - Click "Deploy"

5. **Wait for Deployment**
   - Vercel will build and deploy your project
   - This usually takes 1-2 minutes
   - You'll see a success message with your live URL

#### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? `vivek-rana-portfolio`
- In which directory is your code located? `./`
- Want to override the settings? **N**

4. **Deploy to Production**
```bash
vercel --prod
```

### Step 4: Verify Deployment

1. **Check Build Logs**
   - Go to Vercel dashboard
   - Click on your project
   - Check the "Deployments" tab
   - Verify build completed successfully

2. **Test Live Website**
   - Click on the deployment URL
   - Test all features:
     - Dark/Light mode toggle
     - Mobile navigation
     - All sections load correctly
     - Images display properly
     - Resume download works
     - Contact form functions

3. **Check Performance**
   - Use Lighthouse in Chrome DevTools
   - Verify good scores for:
     - Performance
     - Accessibility
     - Best Practices
     - SEO

### Step 5: Configure Automatic Deployments

Vercel automatically sets up continuous deployment:

1. **Automatic Deployment Enabled**
   - Every push to `main` branch triggers deployment
   - Pull requests create preview deployments
   - No additional configuration needed

2. **Verify Auto-Deploy**
   - Make a small change to README.md
   - Commit and push to GitHub
   - Check Vercel dashboard for new deployment

### Step 6: Update GitHub Repository

#### 6.1 Add Live URL to Repository Description

1. Go to your GitHub repository
2. Click "About" settings (gear icon)
3. Add description: "Modern portfolio website for Vivek Kumar Rana - MERN Full Stack Developer"
4. Add website URL: `https://your-portfolio.vercel.app`
5. Add topics: `portfolio`, `react`, `typescript`, `vite`, `tailwindcss`, `vercel`
6. Save changes

#### 6.2 Update README with Live URL

The README.md already has placeholders for the live URL. Update them:

1. Open README.md
2. Replace `https://your-portfolio-url.vercel.app` with your actual Vercel URL
3. Commit and push:

```bash
git add README.md
git commit -m "Update README with live deployment URL"
git push origin main
```

### Step 7: Custom Domain (Optional)

If you want to use a custom domain:

1. **In Vercel Dashboard**
   - Go to Project Settings
   - Click "Domains"
   - Click "Add Domain"
   - Enter your domain name
   - Follow DNS configuration instructions

2. **Update DNS Records**
   - Add CNAME record pointing to Vercel
   - Wait for DNS propagation (can take up to 48 hours)

## 🔧 Build Configuration

### Vite Configuration

The project uses Vite with the following configuration:

**File**: `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### Build Commands

- **Development**: `npm run dev`
- **Production Build**: `npm run build`
- **Preview Build**: `npm run preview`

### Output Directory

- **Directory**: `dist/`
- **Contents**: Optimized HTML, CSS, JS, and assets

## 📊 Deployment Checklist

Before deploying, ensure:

- ✅ All dependencies installed (`npm install`)
- ✅ Build works locally (`npm run build`)
- ✅ No TypeScript errors (`npm run lint`)
- ✅ All images are in correct paths
- ✅ Resume PDF is in `public/` folder
- ✅ Environment variables configured (if any)
- ✅ .gitignore includes `node_modules` and `dist`
- ✅ README.md is updated
- ✅ Git repository is clean

## 🐛 Troubleshooting

### Build Fails on Vercel

**Issue**: Build fails with module not found error

**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading

**Issue**: Images show 404 error

**Solution**:
- Ensure images are in `src/assets/` or `public/`
- Check import paths are correct
- Verify images are committed to Git

### Resume Download Not Working

**Issue**: Resume PDF returns 404

**Solution**:
- Ensure PDF is in `public/` folder
- Path should be `/Vivek-Kumar-Rana-Resume.pdf`
- Verify file is committed to Git

### Theme Not Persisting

**Issue**: Theme resets on page reload

**Solution**:
- Check localStorage is enabled in browser
- Verify ThemeContext is properly wrapped in main.tsx
- Check browser console for errors

### Mobile Menu Not Working

**Issue**: Mobile menu doesn't open/close

**Solution**:
- Check JavaScript is enabled
- Verify no console errors
- Test on different devices/browsers

## 🔄 Update Workflow

### Making Changes

1. **Local Development**
```bash
# Make changes to code
npm run dev  # Test locally
```

2. **Commit Changes**
```bash
git add .
git commit -m "Description of changes"
```

3. **Push to GitHub**
```bash
git push origin main
```

4. **Automatic Deployment**
   - Vercel automatically detects push
   - Builds and deploys new version
   - Live site updates in 1-2 minutes

### Rollback Deployment

If something goes wrong:

1. Go to Vercel Dashboard
2. Click "Deployments"
3. Find previous working deployment
4. Click "..." → "Promote to Production"

## 📈 Monitoring

### Vercel Analytics

Enable analytics in Vercel dashboard:
1. Go to Project Settings
2. Click "Analytics"
3. Enable Web Analytics
4. View visitor stats and performance

### Performance Monitoring

Use these tools:
- **Lighthouse**: Built into Chrome DevTools
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/

## 🎯 Post-Deployment Tasks

1. **Test Everything**
   - All pages load correctly
   - All links work
   - Forms submit properly
   - Images display
   - Animations work smoothly

2. **Share Your Portfolio**
   - Update LinkedIn profile
   - Add to resume
   - Share on social media
   - Add to GitHub profile README

3. **Monitor Performance**
   - Check Vercel analytics
   - Monitor error logs
   - Track visitor engagement

4. **Keep Updated**
   - Add new projects regularly
   - Update skills and experience
   - Refresh content periodically

## 📞 Support

If you encounter issues:

1. **Check Vercel Logs**
   - Dashboard → Project → Deployments → View Logs

2. **GitHub Issues**
   - Create issue in repository

3. **Vercel Support**
   - https://vercel.com/support

## 🎉 Success!

Once deployed, your portfolio will be:
- ✅ Live on the internet
- ✅ Accessible via custom URL
- ✅ Automatically updated on push
- ✅ Fast and optimized
- ✅ Secure with HTTPS

**Your Portfolio URL**: `https://your-project.vercel.app`

---

**Congratulations on deploying your portfolio! 🚀**
