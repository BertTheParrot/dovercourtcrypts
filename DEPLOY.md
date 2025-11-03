# Deploying to GitHub Pages

## Quick Setup Steps

### 1. Add and Commit Your Files

```bash
# Add all website files
git add index.html styles.css script.js .gitignore images/

# Add README and other files
git add README.md

# Commit
git commit -m "Add Dovercourt Crypt prototype website"
```

### 2. Push to GitHub

```bash
git push origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/[your-username]/doverCourt`
2. Click **Settings** (top right of repository)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes for GitHub to build your site

### 4. Your Site Will Be Live!

Your website will be available at:
```
https://[your-username].github.io/doverCourt/
```

For example:
```
https://brett.github.io/doverCourt/
```

## Important Notes

- The repository name determines the URL: `doverCourt` → `/doverCourt/`
- If you want a shorter URL like `github.io/doverCourt`, rename the repo to `doverCourt` (no uppercase C)
- GitHub Pages only works with public repositories (unless you have GitHub Pro)
- Changes take 1-2 minutes to appear after pushing

## Troubleshooting

**Site not loading?**
- Check the repository is public
- Wait 2-3 minutes after enabling Pages
- Check Settings → Pages to see if there are any errors

**Images not showing?**
- Make sure image paths in HTML are relative: `images/filename.jpg`
- Not absolute: `/images/filename.jpg`

**Styling not working?**
- Check that `styles.css` is in the root directory
- Check browser console for 404 errors

## Updating the Site

After making changes:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

Changes will be live in 1-2 minutes!

