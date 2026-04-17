# 🚀 Force Redeploy Commands - Quick Reference

## 🔥 EMERGENCY: Force Fresh Deployment

### Method 1: Empty Commit (Fastest)
```bash
git commit --allow-empty -m "force rebuild"
git push origin main
```

### Method 2: Update Timestamp File
```bash
echo "Rebuild: $(date)" > DEPLOYMENT_TRIGGER.txt
git add DEPLOYMENT_TRIGGER.txt
git commit -m "trigger rebuild"
git push origin main
```

### Method 3: Force Push (Nuclear Option)
```bash
git push origin main --force
```

---

## 🧹 Clear Everything Locally

```bash
# Remove node_modules and lock files
rm -rf node_modules
rm package-lock.json
rm -rf dist

# Fresh install
npm install

# Fresh build
npm run build

# Test locally
npm run preview
```

---

## 🔍 Verify Build Output

```bash
# Check dist folder exists
ls -la dist/

# Check index.html has script tags
cat dist/index.html | grep "script"

# Check JS files exist
ls -la dist/assets/js/

# Check file sizes
du -sh dist/
```

---

## 📦 Vercel CLI Commands (If Installed)

### Install Vercel CLI
```bash
npm i -g vercel
```

### Login
```bash
vercel login
```

### Deploy Manually
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Force new build (ignore cache)
vercel --prod --force
```

### Check Deployment Status
```bash
vercel ls
```

### View Logs
```bash
vercel logs <deployment-url>
```

### Clear Cache
```bash
# No direct CLI command, use dashboard
# Or redeploy with --force flag
vercel --prod --force
```

---

## 🌐 Test Deployment

### Check if Site is Live
```bash
curl -I https://portfolio-vivek-blue.vercel.app/
```

Should return:
```
HTTP/2 200
content-type: text/html
```

### Check if JS Loads
```bash
curl https://portfolio-vivek-blue.vercel.app/ | grep "script"
```

Should show script tags with /assets/js/ paths

---

## 🔧 Fix Common Issues

### Issue: Old Build Showing

```bash
# 1. Update a file to force change
echo "// Updated $(date)" >> src/App.tsx

# 2. Commit and push
git add .
git commit -m "force update"
git push origin main

# 3. Go to Vercel Dashboard
# 4. Deployments → Latest → Redeploy (without cache)
```

### Issue: Build Fails

```bash
# Test build locally first
npm run build

# If local build works, check Vercel logs
# Settings → Functions → View Logs

# Common fixes:
# - Update Node version in Vercel (Settings → General)
# - Clear build cache (Settings → Build Cache)
# - Check environment variables (Settings → Environment Variables)
```

### Issue: 404 on Assets

```bash
# Check vercel.json has correct output directory
cat vercel.json | grep outputDirectory

# Should be: "outputDirectory": "dist"

# Check vite.config.ts has correct base
cat vite.config.ts | grep base

# Should be: base: "/"
```

---

## 📋 Pre-Deployment Checklist

Before pushing:

```bash
# 1. Clean install
rm -rf node_modules && npm install

# 2. Build locally
npm run build

# 3. Test build
npm run preview
# Visit http://localhost:4173

# 4. Check for errors
# Open browser console (F12)
# Should see no errors

# 5. Commit and push
git add .
git commit -m "your message"
git push origin main
```

---

## 🎯 Vercel Dashboard Actions

### Clear Build Cache
```
1. Go to: https://vercel.com/vivek-kumar-rana-s-projects/portfolio-vivek/settings
2. Scroll to "Build & Development Settings"
3. Click "Clear Build Cache"
```

### Force Redeploy
```
1. Go to: https://vercel.com/vivek-kumar-rana-s-projects/portfolio-vivek/deployments
2. Click latest deployment
3. Click "..." menu
4. Click "Redeploy"
5. UNCHECK "Use existing Build Cache"
6. Click "Redeploy"
```

### Invalidate CDN Cache
```
1. Go to deployment
2. Click "..." menu
3. Click "Invalidate Cache"
```

---

## 🔍 Debug Commands

### Check Git Status
```bash
git status
git log --oneline -5
git remote -v
```

### Check Package Versions
```bash
npm list react react-dom vite
node --version
npm --version
```

### Check Build Output
```bash
# List all files in dist
find dist -type f

# Check total size
du -sh dist

# Check largest files
du -ah dist | sort -rh | head -20
```

---

## 🆘 Emergency Reset

If nothing works:

```bash
# 1. Backup your code
cp -r . ../portfolio-backup

# 2. Delete everything
rm -rf node_modules dist .next .vercel

# 3. Fresh install
npm install

# 4. Fresh build
npm run build

# 5. Force push
git add .
git commit -m "emergency rebuild"
git push origin main --force

# 6. Go to Vercel Dashboard
# 7. Settings → General → "Delete Project"
# 8. Import project again from GitHub
```

---

## ✅ Success Verification

After deployment:

```bash
# 1. Check HTTP status
curl -I https://portfolio-vivek-blue.vercel.app/

# 2. Check content loads
curl https://portfolio-vivek-blue.vercel.app/ | grep "Vivek"

# 3. Check JS files
curl https://portfolio-vivek-blue.vercel.app/ | grep "assets/js"

# 4. Visit in browser
# https://portfolio-vivek-blue.vercel.app/

# 5. Hard refresh
# Ctrl + Shift + R (Windows)
# Cmd + Shift + R (Mac)

# 6. Check console (F12)
# Should see: "✅ React app rendered successfully"
```

---

## 📞 Quick Links

- **Vercel Dashboard:** https://vercel.com/vivek-kumar-rana-s-projects/portfolio-vivek
- **Deployments:** https://vercel.com/vivek-kumar-rana-s-projects/portfolio-vivek/deployments
- **Settings:** https://vercel.com/vivek-kumar-rana-s-projects/portfolio-vivek/settings
- **Live Site:** https://portfolio-vivek-blue.vercel.app/
- **GitHub Repo:** https://github.com/realvivekrana/portfolio-vivek

---

**Last Updated:** After commit `edf49d3`  
**Status:** Waiting for Vercel manual redeploy
