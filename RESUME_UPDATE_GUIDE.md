# Resume Update Guide

## ✅ Code Status: READY

The code is already configured correctly to use the new resume file. You just need to replace the physical file.

---

## 📝 Steps to Update Resume

### Step 1: Copy Your New Resume
1. Go to: `C:\Users\vivek\Downloads\`
2. Find: `Vivek Kumar Rana - Resume (7).pdf`
3. Copy this file

### Step 2: Navigate to Project Public Folder
```
C:\My Portfolio\public\
```

### Step 3: Replace the Old Resume
1. Delete the existing file: `Vivek-Kumar-Rana-Resume.pdf`
2. Paste your new resume file
3. Rename it to: `Vivek-Kumar-Rana-Resume.pdf`
   - Remove spaces
   - Remove brackets
   - Keep hyphens

### Step 4: Verify File Name
Make sure the file is named exactly:
```
Vivek-Kumar-Rana-Resume.pdf
```

---

## ✅ Code Verification

The code is already using the correct path:

### Hero Component (`src/components/portfolio/Hero.tsx`):
```typescript
const resumeUrl = `${import.meta.env.BASE_URL}Vivek-Kumar-Rana-Resume.pdf`;
```

### View Resume Function:
```typescript
const handleViewResume = () => {
  window.open(resumeUrl, "_blank", "noopener,noreferrer");
  setShowResumeDropdown(false);
};
```

### Download Resume Function:
```typescript
const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Vivek-Kumar-Rana-Resume.pdf";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setShowResumeDropdown(false);
};
```

---

## 🚀 After Replacing the File

### Test Locally:
1. Run: `npm run dev`
2. Click "Resume" button
3. Test "View Resume" - should open new PDF
4. Test "Download Resume" - should download new PDF

### Deploy to GitHub:
```bash
git add public/Vivek-Kumar-Rana-Resume.pdf
git commit -m "Update resume file"
git push origin main
```

The GitHub Actions workflow will automatically deploy the new resume.

---

## 📍 File Locations

### Current Resume Location:
```
public/Vivek-Kumar-Rana-Resume.pdf
```

### Your New Resume Location:
```
C:\Users\vivek\Downloads\Vivek Kumar Rana - Resume (7).pdf
```

---

## ✅ What's Already Done

- ✅ Code uses Vite base URL
- ✅ Proper path handling for GitHub Pages
- ✅ View Resume opens in new tab
- ✅ Download Resume works correctly
- ✅ Mobile responsive bottom sheet
- ✅ Desktop dropdown menu
- ✅ Security attributes (noopener, noreferrer)

---

## 🎯 Summary

**You only need to:**
1. Copy your new resume from Downloads
2. Replace the file in `public/` folder
3. Rename it to `Vivek-Kumar-Rana-Resume.pdf`
4. Commit and push to GitHub

**No code changes needed!** The code is already configured correctly.

---

## 🔍 Troubleshooting

### If Resume Doesn't Open:
1. Check file name is exactly: `Vivek-Kumar-Rana-Resume.pdf`
2. Check file is in `public/` folder (not `public/assets/`)
3. Clear browser cache
4. Try hard refresh (Ctrl + Shift + R)

### If Download Doesn't Work:
1. Check browser download settings
2. Check if popup blocker is enabled
3. Try different browser

---

## 📞 Need Help?

If you encounter any issues after replacing the file, let me know and I can help troubleshoot!
