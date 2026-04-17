#!/bin/bash

# Emergency Fresh Deployment Script
# Run this to force a complete clean rebuild and deployment

echo "🧹 Cleaning old files..."
rm -rf node_modules
rm -rf dist
rm -rf .vercel
rm -f package-lock.json

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building project..."
npm run build

echo "✅ Build complete! Checking output..."
ls -la dist/

echo "📤 Committing and pushing..."
git add .
git commit -m "emergency: force fresh build and deployment"
git push origin main --force

echo "🎉 Done! Now go to Vercel Dashboard and:"
echo "1. Settings → Clear Build Cache"
echo "2. Deployments → Latest → Redeploy (without cache)"
echo ""
echo "Live URL: https://portfolio-vivek-blue.vercel.app/"
