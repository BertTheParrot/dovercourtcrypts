# Dovercourt Crypt Website

A prototype website for Dovercourt Crypt - North Vancouver's most horrible Halloween haunt, supporting the BC Professional Fire Fighters' Burn Fund.

## Features

- **Charity Focus**: 100% of proceeds support BC Fire Fighters' Burn Fund
- **Volunteer Recruitment**: Clear age requirements (<18 can only work concession)
- **Event Information**: Complete 2025 schedule and details
- **Merchandise Shop**: T-shirts, hoodies, and more
- **Contact Form**: Easy way to get in touch

## Local Development

Simply open `index.html` in your web browser, or use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000`

## Deployment to GitHub Pages

This site is ready for GitHub Pages deployment. The site will be available at:
`https://[your-username].github.io/doverCourt/`

### Steps to Deploy:

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Add Dovercourt Crypt prototype website"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main branch** (or **root** folder)
   - Click **Save**
   - Your site will be live at `https://[username].github.io/doverCourt/` within a few minutes

### Custom Domain (Optional)

If you have a custom domain, you can:
- Add a `CNAME` file in the root with your domain name
- Configure DNS records as instructed by GitHub Pages

## Project Structure

```
doverCourt/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── images/             # Image assets
│   ├── 01-dovercourt-crypt-01.jpg
│   ├── 02-dovercourt-crypt-02.jpg
│   └── ...
└── README.md           # This file
```

## Notes

- This is a prototype website
- Form submissions and cart functionality are simulated
- All images should be properly licensed for web use
- Consider adding actual backend functionality for production

## License

This project is for the Dovercourt Crypt community event supporting charity.
