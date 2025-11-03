#!/bin/bash
# Dovercourt Crypt Image Download Script

# Common news site image patterns - we'll try multiple variations
ARTICLE_ID="11366670"
BASE_URL="https://www.nsnews.com"
USER_AGENT="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

# Function to download with proper naming
download_image() {
    local url=$1
    local filename=$2
    echo "Trying: $url -> $filename"
    curl -s -L -H "User-Agent: $USER_AGENT" "$url" -o "$filename" --fail --silent --show-error
    if [ -f "$filename" ] && [ -s "$filename" ]; then
        # Check if it's actually an image
        file_type=$(file -b --mime-type "$filename" 2>/dev/null | grep -i image)
        if [ -z "$file_type" ]; then
            rm "$filename"
            echo "  Failed: Not an image"
        else
            echo "  ✓ Success: $filename ($(du -h "$filename" | cut -f1))"
        fi
    else
        echo "  Failed: Could not download"
    fi
}

# Try common URL patterns
# Note: These are educated guesses - actual URLs need to be found from the page source
# You may need to inspect the page in browser to get actual image URLs

echo "=== Dovercourt Crypt Image Download ==="
echo ""
echo "To find actual image URLs:"
echo "1. Visit: https://www.nsnews.com/local-news/inside-the-north-shores-most-horrible-haunt-dovercourt-crypt-11366670"
echo "2. Right-click images > Inspect Element > Copy image URL"
echo "3. Run: curl -L -H 'User-Agent: Mozilla/5.0' 'IMAGE_URL' -o 'filename.jpg'"
echo ""
echo "Example curl commands (once you have actual URLs):"
echo ""
echo "# Hero image"
echo "curl -L -H 'User-Agent: Mozilla/5.0' 'IMAGE_URL_HERE' -o '01-hero-main-image.jpg'"
echo ""
echo "# Interior haunt"
echo "curl -L -H 'User-Agent: Mozilla/5.0' 'IMAGE_URL_HERE' -o '02-interior-haunt.jpg'"
echo ""
echo "# Behind scenes"
echo "curl -L -H 'User-Agent: Mozilla/5.0' 'IMAGE_URL_HERE' -o '03-behind-scenes.jpg'"
echo ""

