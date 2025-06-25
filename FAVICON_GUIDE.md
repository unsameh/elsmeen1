# Favicon Setup Guide

## What is a Favicon?
A favicon is the small icon that appears in:
- Browser tabs
- Bookmarks
- Browser history
- Mobile home screen shortcuts
- Search results

## Required Favicon Files

You need to create the following files in the `assets/images/logo/` folder:

### 1. Basic Favicon Files
- `favicon.ico` (16x16, 32x32, 48x48 pixels) - Main favicon
- `favicon-16x16.png` (16x16 pixels) - Small favicon
- `favicon-32x32.png` (32x32 pixels) - Standard favicon

### 2. Apple Touch Icon
- `apple-touch-icon.png` (180x180 pixels) - For iOS devices

### 3. Android Chrome Icons
- `android-chrome-192x192.png` (192x192 pixels) - Android Chrome
- `android-chrome-512x512.png` (512x512 pixels) - Android Chrome large

## How to Create Favicon Files

### Option 1: Online Favicon Generators
1. **Favicon.io** (Recommended)
   - Go to https://favicon.io/
   - Upload your logo image
   - Download the generated package
   - Extract and place files in `assets/images/logo/`

2. **RealFaviconGenerator**
   - Go to https://realfavicongenerator.net/
   - Upload your logo
   - Configure options
   - Download and extract files

### Option 2: Using Image Editing Software
1. **GIMP** (Free)
   - Open your logo
   - Resize to required dimensions
   - Export as PNG
   - For ICO files, use online converters

2. **Photoshop**
   - Open your logo
   - Resize to required dimensions
   - Save as PNG
   - Export as ICO

### Option 3: Using Your Current Logo
If you have a logo image:
1. Resize it to 32x32 pixels for the main favicon
2. Create a simple version with just initials or a symbol
3. Use a gold/orange color to match your website theme

## Recommended Favicon Design

For your law office website, consider:
- **Simple design**: Scales well at small sizes
- **Gold/orange color**: Matches your website theme (#ffc107)
- **Legal symbol**: Scales, gavel, or building icon
- **Text**: Your initials or "ML" for Modern Law

## File Structure
```
assets/
└── images/
    └── logo/
        ├── favicon.ico
        ├── favicon-16x16.png
        ├── favicon-32x32.png
        ├── apple-touch-icon.png
        ├── android-chrome-192x192.png
        ├── android-chrome-512x512.png
        └── site.webmanifest
```

## Testing Your Favicon

1. **Clear browser cache** and refresh the page
2. **Check different browsers**: Chrome, Firefox, Safari, Edge
3. **Test on mobile devices**: iOS and Android
4. **Check bookmarks**: Add to bookmarks and verify icon appears

## Troubleshooting

### Favicon Not Showing
1. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
2. Check file paths are correct
3. Verify file names match exactly
4. Ensure files are in the correct folder

### Wrong Icon Showing
1. Clear browser cache completely
2. Check for conflicting favicon declarations
3. Verify file formats are correct

### Mobile Icons Not Working
1. Check apple-touch-icon file exists
2. Verify manifest file is accessible
3. Test on actual mobile devices

## Quick Setup with Online Generator

1. Go to https://favicon.io/
2. Click "Select Image"
3. Upload your logo (preferably 260x260 pixels or larger)
4. Click "Download"
5. Extract the ZIP file
6. Copy all files to `assets/images/logo/`
7. Refresh your website

## Notes
- Favicons are cached aggressively by browsers
- It may take time for changes to appear
- Different browsers may show different versions
- Always test on multiple devices and browsers 