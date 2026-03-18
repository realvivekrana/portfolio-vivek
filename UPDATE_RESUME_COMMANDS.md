# Commands to Update Resume

## Run these commands in your terminal:

### Step 1: Copy the new resume to public folder
```bash
copy "C:\Users\vivek\Downloads\Vivek Kumar Rana - Resume (7).pdf" "public\Vivek-Kumar-Rana-Resume.pdf"
```

### Step 2: Verify the file was copied
```bash
dir public\Vivek-Kumar-Rana-Resume.pdf
```

### Step 3: Add to git
```bash
git add public/Vivek-Kumar-Rana-Resume.pdf
```

### Step 4: Commit the change
```bash
git commit -m "Update resume file to latest version"
```

### Step 5: Push to GitHub
```bash
git push origin main
```

---

## Alternative: Manual Steps

If the copy command doesn't work:

1. Open File Explorer
2. Go to: `C:\Users\vivek\Downloads\`
3. Find: `Vivek Kumar Rana - Resume (7).pdf`
4. Copy the file (Ctrl+C)
5. Go to: `C:\My Portfolio\public\`
6. Paste the file (Ctrl+V)
7. Rename it to: `Vivek-Kumar-Rana-Resume.pdf`
8. Then run:
   ```bash
   git add public/Vivek-Kumar-Rana-Resume.pdf
   git commit -m "Update resume file to latest version"
   git push origin main
   ```

---

## ✅ After Pushing

The GitHub Actions workflow will automatically deploy your new resume!
