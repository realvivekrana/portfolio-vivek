# ⚙️ Vercel Deployment Settings

## 🎯 Exact Settings for Your Project

### General Settings
```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Development Command: npm run dev
```

### Root Directory
```
./
```

### Node.js Version
```
20.x (or latest LTS)
```

---

## 📁 Project Structure Verification

Your build output should look like this:

```
dist/
├── index.html                    ← Entry point
├── assets/
│   ├── js/
│   │   ├── index-[hash].js      ← Main bundle
│   │   ├── vendor-react-[hash].js
│   │   ├── vendor-three-[hash].js
│   │   └── ...
│   ├── css/
│   │   ├── index-[hash].css
│   │   └── vendor-misc-[hash].css
│   ├── fonts/
│   │   └── [font-files].woff2
│   └── images/
│       └── [image-files].jpg
├── icon.svg
├── manifest.json
├── robots.txt
└── ...
```

---

## 🔧 Environment Variables (If Needed)

Currently, your project doesn't require any environment variables. If you add API keys or secrets later:

1. Go to: **Project Settings → Environment Variables**
2. Add variables like:
   ```
   VITE_API_KEY=your_key_here
   VITE_API_URL=https://api.example.com
   ```
3. Redeploy to apply changes

**Note:** Vite requires `VITE_` prefix for client-side env variables.

---

## 🌐 Custom Domain Setup (Optional)

To add a custom domain:

1. Go to: **Project Settings → Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `vivekrana.dev`)
4. Follow DNS configuration instructions:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
5. Wait for DNS propagation (5-60 minutes)

---

## 🚀 Deployment Triggers

Your project auto-deploys when:
- ✅ Push to `main` branch (production)
- ✅ Push to any branch (preview deployment)
- ✅ Pull request created (preview deployment)

### Manual Deployment:
1. Go to: **Deployments**
2. Click **Redeploy** on any deployment
3. Or use Vercel CLI:
   ```bash
   npm i -g vercel
   vercel --prod
   ```

---

## 🔍 Troubleshooting Commands

### Check Build Locally:
```bash
npm run build
npm run preview
```
Then visit: http://localhost:4173

### Check Build Output:
```bash
ls -la dist/
ls -la dist/assets/js/
```

### Verify HTML References:
```bash
cat dist/index.html | grep "script"
cat dist/index.html | grep "link"
```

Should show paths like:
```html
<script type="module" crossorigin src="/assets/js/index-xxx.js"></script>
<link rel="stylesheet" crossorigin href="/assets/css/index-xxx.css">
```

---

## 📊 Performance Optimization (Already Configured)

Your `vercel.json` includes:

### Cache Headers:
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

This ensures:
- ✅ Assets cached for 1 year
- ✅ Faster subsequent page loads
- ✅ Reduced bandwidth usage

### SPA Routing:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures:
- ✅ All routes serve `index.html`
- ✅ React Router handles navigation
- ✅ No 404 on page refresh

---

## 🎯 Build Optimization Stats

Your current build:
```
Total Size: ~1.5 MB (uncompressed)
Gzipped: ~420 KB

Largest Chunks:
- vendor-three.js: 671 KB (173 KB gzipped)
- vendor-misc.js: 357 KB (115 KB gzipped)
- vendor-react.js: 139 KB (45 KB gzipped)
- vendor-gsap.js: 114 KB (45 KB gzipped)
```

**Performance:** ⚡ Excellent for a 3D portfolio

---

## ✅ Deployment Checklist

Before each deployment:
- [ ] Run `npm run build` locally
- [ ] Check for build errors
- [ ] Test with `npm run preview`
- [ ] Verify no console errors (F12)
- [ ] Check responsive design (mobile/tablet)
- [ ] Test all navigation links
- [ ] Verify contact form works
- [ ] Check 3D animations load
- [ ] Test on different browsers

---

## 🔗 Useful Vercel Dashboard Links

- **Project Overview:** https://vercel.com/vivek-kumar-rana-s-projects/portfolio-vivek
- **Deployments:** https://vercel.com/vivek-kumar-rana-s-projects/portfolio-vivek/deployments
- **Settings:** https://vercel.com/vivek-kumar-rana-s-projects/portfolio-vivek/settings
- **Analytics:** https://vercel.com/vivek-kumar-rana-s-projects/portfolio-vivek/analytics
- **Logs:** https://vercel.com/vivek-kumar-rana-s-projects/portfolio-vivek/logs

---

## 📞 Support

If issues persist:
1. Check Vercel Status: https://www.vercel-status.com/
2. Vercel Docs: https://vercel.com/docs
3. Vite Docs: https://vitejs.dev/guide/
4. Check build logs in Vercel Dashboard

---

**Last Updated:** After fixing blank screen issue  
**Status:** ✅ Ready for production deployment
