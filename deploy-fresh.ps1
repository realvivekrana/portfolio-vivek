# Emergency Fresh Deployment Script (PowerShell)
# Run this to force a complete clean rebuild and deployment

Write-Host "🧹 Cleaning old files..." -ForegroundColor Yellow
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .vercel -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue

Write-Host "📦 Installing dependencies..." -ForegroundColor Cyan
npm install

Write-Host "🔨 Building project..." -ForegroundColor Cyan
npm run build

Write-Host "✅ Build complete! Checking output..." -ForegroundColor Green
Get-ChildItem dist -Recurse | Select-Object Name, Length

Write-Host "📤 Committing and pushing..." -ForegroundColor Cyan
git add .
git commit -m "emergency: force fresh build and deployment"
git push origin main --force

Write-Host ""
Write-Host "🎉 Done! Now go to Vercel Dashboard and:" -ForegroundColor Green
Write-Host "1. Settings → Clear Build Cache" -ForegroundColor White
Write-Host "2. Deployments → Latest → Redeploy (without cache)" -ForegroundColor White
Write-Host ""
Write-Host "Live URL: https://portfolio-vivek-blue.vercel.app/" -ForegroundColor Cyan
