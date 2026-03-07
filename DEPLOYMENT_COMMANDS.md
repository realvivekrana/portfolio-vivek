# Quick Deployment Commands

## 🚀 GitHub Setup & Push

### Check Git Status
```bash
git status
```

### Add Remote Repository (if not already added)
```bash
git remote add origin https://github.com/realvivekrana/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio.git
```

### Or Update Existing Remote
```bash
git remote set-url origin https://github.com/realvivekrana/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio.git
```

### Stage All Files
```bash
git add .
```

### Commit Changes
```bash
git commit -m "Initial commit: Complete portfolio with dark/light mode and responsive design"
```

### Push to GitHub
```bash
git branch -M main
git push -u origin main
```

### For Subsequent Pushes
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

---

## 🌐 Vercel Deployment

### Option 1: Vercel Dashboard (Recommended)

1. Go to: https://vercel.com/vivek-kumar-rana-s-projects
2. Click "Add New" → "Project"
3. Import GitHub repository: `-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio`
4. Configure:
   - Framework: **Vite**
   - Build Command: **npm run build**
   - Output Directory: **dist**
5. Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI (one time)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## 🔄 Update Workflow

### After Making Changes

```bash
# 1. Test locally
npm run dev

# 2. Build to verify
npm run build

# 3. Stage changes
git add .

# 4. Commit
git commit -m "Description of your changes"

# 5. Push to GitHub (triggers auto-deploy on Vercel)
git push origin main
```

---

## 🛠️ Useful Commands

### Check Remote URL
```bash
git remote -v
```

### View Commit History
```bash
git log --oneline
```

### Check Branch
```bash
git branch
```

### Pull Latest Changes
```bash
git pull origin main
```

### Discard Local Changes
```bash
git checkout -- .
```

### View Git Configuration
```bash
git config --list
```

---

## 📦 Build Commands

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Run Linter
```bash
npm run lint
```

### Run Tests
```bash
npm run test
```

---

## 🔍 Verification Commands

### Check Node Version
```bash
node --version
```

### Check npm Version
```bash
npm --version
```

### Check Git Version
```bash
git --version
```

### List Files in Directory
```bash
ls -la
```

### Check Disk Space
```bash
df -h
```

---

## 🐛 Troubleshooting Commands

### Clear npm Cache
```bash
npm cache clean --force
```

### Remove node_modules and Reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Reset Git to Last Commit
```bash
git reset --hard HEAD
```

### View Git Status with Details
```bash
git status -v
```

### Check for Uncommitted Changes
```bash
git diff
```

---

## 📝 Quick Reference

### First Time Setup
```bash
git remote add origin https://github.com/realvivekrana/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### Regular Updates
```bash
git add .
git commit -m "Update: description"
git push origin main
```

### Emergency Rollback
```bash
git log --oneline  # Find commit hash
git reset --hard <commit-hash>
git push origin main --force
```

---

## 🎯 Vercel-Specific Commands

### Link Project to Vercel
```bash
vercel link
```

### View Deployment Logs
```bash
vercel logs
```

### List Deployments
```bash
vercel ls
```

### Remove Deployment
```bash
vercel rm <deployment-url>
```

### View Project Info
```bash
vercel inspect
```

---

## ✅ Pre-Deployment Checklist

Run these commands before deploying:

```bash
# 1. Check for errors
npm run lint

# 2. Run tests
npm run test

# 3. Build locally
npm run build

# 4. Preview build
npm run preview

# 5. Check git status
git status

# 6. Verify remote
git remote -v
```

---

## 🚨 Common Issues & Fixes

### Issue: Permission Denied (GitHub)
```bash
# Use HTTPS with Personal Access Token
git remote set-url origin https://YOUR_TOKEN@github.com/realvivekrana/-Vivek-Rana-MERN-Full-Stack-Developer-Portfolio.git
```

### Issue: Build Fails
```bash
# Clear and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Issue: Port Already in Use
```bash
# Kill process on port 8080
npx kill-port 8080
# Or use different port
npm run dev -- --port 3000
```

### Issue: Git Conflicts
```bash
# Pull with rebase
git pull --rebase origin main
# Or force push (careful!)
git push origin main --force
```

---

**Quick Start**: Copy and paste the commands you need!
