# Cache Clearing Guide - Remove "Lovable" Branding

If you still see "Lovable" branding or heart icon after deployment, follow these steps:

## 1. Clear Browser Cache (Recommended First)

### Chrome/Edge
1. Press `Ctrl + Shift + Delete` (Windows) or `Cmd + Shift + Delete` (Mac)
2. Select "Cached images and files"
3. Select "All time" from the time range
4. Click "Clear data"

### Firefox
1. Press `Ctrl + Shift + Delete` (Windows) or `Cmd + Shift + Delete` (Mac)
2. Check "Cache"
3. Click "Clear Now"

### Safari
1. Press `Cmd + Option + E` to empty caches
2. Or go to Safari → Preferences → Advanced → Show Develop menu
3. Then Develop → Empty Caches

## 2. Hard Refresh the Page

- **Windows:** `Ctrl + Shift + R` or `Ctrl + F5`
- **Mac:** `Cmd + Shift + R`
- **Linux:** `Ctrl + Shift + R`

## 3. Clear Site-Specific Data

### Chrome DevTools Method
1. Open your site
2. Press `F12` to open DevTools
3. Go to "Application" tab
4. Click "Clear storage" in the left sidebar
5. Click "Clear site data" button
6. Refresh the page

## 4. Test in Incognito/Private Mode

- **Chrome:** `Ctrl + Shift + N` (Windows) or `Cmd + Shift + N` (Mac)
- **Firefox:** `Ctrl + Shift + P` (Windows) or `Cmd + Shift + P` (Mac)
- **Safari:** `Cmd + Shift + N`

## 5. Clear Service Workers (PWA Cache)

1. Open DevTools (`F12`)
2. Go to "Application" tab
3. Click "Service Workers" in the left sidebar
4. Click "Unregister" for any service workers
5. Refresh the page

## 6. For Google Search Results

Google caches search results. To update:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Request re-indexing of your site
3. Or wait 1-2 weeks for Google to naturally re-crawl

Alternatively, use this URL to request immediate re-indexing:
```
https://www.google.com/ping?sitemap=YOUR_SITEMAP_URL
```

## 7. Verify Changes

After clearing cache, verify:
- ✅ Browser tab shows: "Vivek Rana | Frontend Developer"
- ✅ Favicon shows: "V" icon (purple background)
- ✅ No "Lovable" text anywhere
- ✅ No heart icon

## 8. For Vercel Deployment

If deployed on Vercel:
1. Go to your Vercel dashboard
2. Click on your project
3. Go to "Deployments"
4. Verify the latest deployment is active
5. Click "Visit" to open the live site
6. Clear cache and hard refresh

## What Was Fixed

✅ Removed `lovable-tagger` plugin from Vite config
✅ Uninstalled `lovable-tagger` package
✅ Updated page title to "Vivek Rana | Frontend Developer"
✅ Created custom favicon (icon.svg with "V" letter)
✅ Added comprehensive manifest.json for PWA
✅ Added theme-color meta tag
✅ Updated package.json name to "vivek-rana-portfolio"
✅ Verified no "lovable" references in source code

## Still Having Issues?

If you still see "Lovable" after trying all steps above:
1. Wait 5-10 minutes for CDN cache to clear
2. Try a different browser
3. Try a different device
4. Check if you're looking at the correct URL (not a preview/staging URL)
