#!/bin/bash
# Dovercourt Crypt Image Download Commands
# Replace IMAGE_URL_HERE with actual URLs from the articles
# Run these commands from: /Users/brett/code/doverCourt/images

cd /Users/brett/code/doverCourt/images

# User-Agent header for requests
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

# ============================================
# FROM NORTH SHORE NEWS ARTICLE
# https://www.nsnews.com/local-news/inside-the-north-shores-most-horrible-haunt-dovercourt-crypt-11366670
# ============================================

# Main Dovercourt Crypt image 1
curl -L -H "User-Agent: $UA" \
  "https://www.vmcdn.ca/f/files/nsnews/newsengin/2025/10/web1_nsn-17102025-dovercourt-crypt-01.jpg" \
  -o "01-dovercourt-crypt-01.jpg"

# Main Dovercourt Crypt image 2
curl -L -H "User-Agent: $UA" \
  "https://www.vmcdn.ca/f/files/nsnews/newsengin/2025/10/web1_nsn-17102025-dovercourt-crypt-02.jpg" \
  -o "02-dovercourt-crypt-02.jpg"

# Try additional numbered variations (may or may not exist)
curl -L -H "User-Agent: $UA" \
  "https://www.vmcdn.ca/f/files/nsnews/newsengin/2025/10/web1_nsn-17102025-dovercourt-crypt-03.jpg" \
  -o "03-dovercourt-crypt-03.jpg" \
  -f -s -o /dev/null || echo "Image 03 not found, skipping"

curl -L -H "User-Agent: $UA" \
  "https://www.vmcdn.ca/f/files/nsnews/newsengin/2025/10/web1_nsn-17102025-dovercourt-crypt-04.jpg" \
  -o "04-dovercourt-crypt-04.jpg" \
  -f -s -o /dev/null || echo "Image 04 not found, skipping"

curl -L -H "User-Agent: $UA" \
  "https://www.vmcdn.ca/f/files/nsnews/newsengin/2025/10/web1_nsn-17102025-dovercourt-crypt-05.jpg" \
  -o "05-dovercourt-crypt-05.jpg" \
  -f -s -o /dev/null || echo "Image 05 not found, skipping"

# ============================================
# FROM FACEBOOK (Dovercourt Crypt page)
# ============================================

# Facebook banner/cover
curl -L -H "User-Agent: $UA" \
  "IMAGE_URL_HERE" \
  -o "08-facebook-banner.jpg"

# Past event photo 1
curl -L -H "User-Agent: $UA" \
  "IMAGE_URL_HERE" \
  -o "09-facebook-past-event-1.jpg"

# Past event photo 2
curl -L -H "User-Agent: $UA" \
  "IMAGE_URL_HERE" \
  -o "10-facebook-past-event-2.jpg"

# Crowd/attendee photo
curl -L -H "User-Agent: $UA" \
  "IMAGE_URL_HERE" \
  -o "11-facebook-crowd.jpg"

# Setup progress photo
curl -L -H "User-Agent: $UA" \
  "IMAGE_URL_HERE" \
  -o "12-facebook-setup-progress.jpg"

# ============================================
# FROM GLOBAL NEWS VIDEO
# https://globalnews.ca/video/10061577/halloween-at-north-vancouvers-dovercourt-crypt
# (Screenshots - manual download or use video frame extraction)
# ============================================

# Global News screenshot 1
curl -L -H "User-Agent: $UA" \
  "IMAGE_URL_HERE" \
  -o "13-global-news-screenshot-1.jpg"

# Global News screenshot 2
curl -L -H "User-Agent: $UA" \
  "IMAGE_URL_HERE" \
  -o "14-global-news-screenshot-2.jpg"

# ============================================
# FROM OTHER SOURCES
# ============================================

# LynnValleyLife article image
curl -L -H "User-Agent: $UA" \
  "IMAGE_URL_HERE" \
  -o "15-lynnvalley-article-image.jpg"

echo "Done! Check the images directory for downloaded files."

