# 🚀 GitHub Pages Deployment Guide

## ✅ Configuration Complete!

Your portfolio is now configured for GitHub Pages deployment.

---

## 📋 What's Been Configured:

### 1. package.json Updates ✅
- ✅ Added `homepage` field: `https://realvivekrana.github.io/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio`
- ✅ Added `predeploy` script: `npm run build`
- ✅ Added `deploy` script: `gh-pages -d dist`
- ✅ Installed `gh-pages` as dev dependency

### 2. vite.config.ts Updates ✅
- ✅ Added `base` path: `/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio/`
- ✅ This ensures all assets load correctly on GitHub Pages

---

## 🚀 Deploy to GitHub Pages

### Step 1: Build and Deploy

Run this command to build and deploy your portfolio:

```bash
npm run deploy
```

This will:
1. Run `npm run build` (predeploy script)
2. Create optimized production build in `dist/` folder
3. Deploy the `dist/` folder to `gh-pages` branch
4. Push to GitHub

**Expected Output:**
```
> predeploy
> npm run build

> build
> vite build

Building for production...
✓ built in X seconds

> deploy
> gh-pages -d dist

Published
```

---

### Step 2: Configure GitHub Repository Settings

1. **Go to Your Repository**
   - Visit: https://github.com/realvivekrana/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio

2. **Open Settings**
   - Click "Settings" tab (top right)

3. **Navigate to Pages**
   - In left sidebar, click "Pages"

4. **Configure Source**
   - **Source**: Deploy from a branch
   - **Branch**: Select `gh-pages`
   - **Folder**: Select `/ (root)`
   - Click "Save"

5. **Wait for Deployment**
   - GitHub will build and deploy your site
   - This takes 1-2 minutes
   - You'll see a green checkmark when ready

---

### Step 3: Verify Deployment

Your portfolio will be live at:
```
https://realvivekrana.github.io/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio/
```

**Test the following:**
- [ ] Homepage loads correctly
- [ ] Dark/Light mode toggle works
- [ ] Mobile navigation works
- [ ] All sections display properly
- [ ] Images load correctly
- [ ] Resume downloads successfully
- [ ] Animations work smoothly
- [ ] All links work
- [ ] No 404 errors in console

---

## 🔄 Update Workflow

### Making Changes and Redeploying

1. **Make Changes Locally**
   ```bash
   # Edit your files
   npm run dev  # Test locally
   ```

2. **Commit to GitHub**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

**Note**: GitHub Pages deployment is separate from your main branch. You need to run `npm run deploy` each time you want to update the live site.

---

## 📊 Deployment Process Explained

### What Happens When You Run `npm run deploy`:

1. **Predeploy Script Runs**
   - Executes `npm run build`
   - Vite builds your project
   - Creates optimized files in `dist/` folder

2. **Deploy Script Runs**
   - `gh-pages` package takes the `dist/` folder
   - Creates/updates `gh-pages` branch
   - Pushes to GitHub

3. **GitHub Pages Builds**
   - GitHub detects changes in `gh-pages` branch
   - Serves the content from that branch
   - Updates your live site

---

## 🔧 Configuration Details

### package.json
```json
{
  "homepage": "https://realvivekrana.github.io/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^6.x.x"
  }
}
```

### vite.config.ts
```typescript
export default defineConfig({
  base: "/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio/",
  // ... other config
})
```

**Why the base path?**
- GitHub Pages serves your site at: `username.github.io/repo-name/`
- The `base` path ensures all assets (CSS, JS, images) load correctly
- Without it, assets would try to load from `username.github.io/` instead of `username.github.io/repo-name/`

---

## 🐛 Troubleshooting

### Issue: Blank Page After Deployment

**Cause**: Incorrect base path in vite.config.ts

**Solution**: Verify base path matches your repository name
```typescript
base: "/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio/"
```

### Issue: Images Not Loading

**Cause**: Images using absolute paths

**Solution**: 
- Images in `src/assets/` should use imports
- Images in `public/` should use relative paths starting with `/`

**Example:**
```typescript
// Good - using import
import profileImg from "@/assets/vivek-profile.jpg";

// Good - public folder
<a href="/Vivek-Kumar-Rana-Resume.pdf">
```

### Issue: 404 on Page Refresh

**Cause**: GitHub Pages doesn't support client-side routing by default

**Solution**: Since this is a single-page app, it should work. If you encounter issues:
1. Ensure you're using hash routing, or
2. Add a 404.html that redirects to index.html

### Issue: Deploy Command Fails

**Error**: `gh-pages` not found

**Solution**:
```bash
npm install --save-dev gh-pages
npm run deploy
```

**Error**: Permission denied

**Solution**: Ensure you're logged into GitHub and have push access to the repository

### Issue: Old Version Still Showing

**Cause**: Browser cache

**Solution**:
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Try incognito/private mode

---

## 📈 Monitoring Deployment

### Check Deployment Status

1. **GitHub Actions Tab**
   - Go to your repository
   - Click "Actions" tab
   - See deployment status

2. **Pages Settings**
   - Settings → Pages
   - See last deployment time
   - View deployment history

3. **Commit History**
   - Check `gh-pages` branch
   - See deployment commits

---

## 🎯 Best Practices

### Before Deploying:

1. **Test Locally**
   ```bash
   npm run build
   npm run preview
   ```
   Visit http://localhost:4173 to test production build

2. **Check for Errors**
   ```bash
   npm run lint
   ```

3. **Verify Build**
   - Check `dist/` folder is created
   - Verify all assets are included

### After Deploying:

1. **Test Live Site**
   - Visit your GitHub Pages URL
   - Test all features
   - Check browser console for errors

2. **Monitor Performance**
   - Use Lighthouse in Chrome DevTools
   - Check load times
   - Verify mobile responsiveness

---

## 🔐 Security Notes

### GitHub Pages Limitations:

- ✅ Static sites only (perfect for React)
- ✅ HTTPS enabled by default
- ❌ No server-side code
- ❌ No environment variables (use build-time variables)
- ❌ No backend APIs (use external services)

### Best Practices:

- Don't commit sensitive data
- Don't include API keys in code
- Use environment variables for build-time config
- Keep dependencies updated

---

## 📊 Performance Optimization

### Already Optimized:

- ✅ Vite production build
- ✅ Code splitting
- ✅ Minification
- ✅ Tree shaking
- ✅ Asset optimization

### Additional Optimizations:

1. **Image Optimization**
   - Use WebP format
   - Compress images
   - Use appropriate sizes

2. **Lazy Loading**
   - Already implemented for images
   - Consider for heavy components

3. **Caching**
   - GitHub Pages handles this automatically
   - Assets are cached by CDN

---

## 🌐 Custom Domain (Optional)

Want to use a custom domain like `vivekrana.com`?

### Steps:

1. **Buy a Domain**
   - From providers like Namecheap, GoDaddy, etc.

2. **Configure DNS**
   Add these records:
   ```
   Type: CNAME
   Name: www
   Value: realvivekrana.github.io

   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

3. **Configure GitHub Pages**
   - Settings → Pages
   - Custom domain: `www.vivekrana.com`
   - Save

4. **Wait for DNS Propagation**
   - Can take up to 48 hours
   - Usually works within a few hours

---

## 📝 Deployment Checklist

Before deploying:
- [ ] All changes committed to Git
- [ ] Tested locally with `npm run dev`
- [ ] Build works: `npm run build`
- [ ] Preview works: `npm run preview`
- [ ] No console errors
- [ ] All images load
- [ ] Resume downloads

After deploying:
- [ ] GitHub Pages URL works
- [ ] All pages load correctly
- [ ] Dark/Light mode works
- [ ] Mobile menu works
- [ ] Images display properly
- [ ] Animations work
- [ ] No 404 errors
- [ ] Performance is good

---

## 🎉 Success!

Once deployed, your portfolio will be:
- ✅ Live on the internet
- ✅ Accessible at: https://realvivekrana.github.io/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio/
- ✅ Hosted for free on GitHub Pages
- ✅ Served over HTTPS
- ✅ Fast with GitHub's CDN

---

## 📞 Need Help?

### Resources:

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Vite Deployment Guide**: https://vitejs.dev/guide/static-deploy.html
- **gh-pages Package**: https://github.com/tschaub/gh-pages

### Common Commands:

```bash
# Deploy to GitHub Pages
npm run deploy

# Test production build locally
npm run build && npm run preview

# Check for errors
npm run lint

# Update dependencies
npm update
```

---

## 🚀 Ready to Deploy!

Run this command to deploy your portfolio:

```bash
npm run deploy
```

Then configure GitHub Pages settings as described above.

**Your portfolio will be live at:**
```
https://realvivekrana.github.io/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio/
```

---

**Good luck with your deployment! 🎊**
