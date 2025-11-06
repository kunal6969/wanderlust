# Add environment variables to Vercel
# Run this after installing Vercel CLI: npm install -g vercel

Write-Host "Adding environment variables to Vercel..." -ForegroundColor Cyan

# Make sure you're logged in first
vercel env add CLOUD_NAME production
# When prompted, enter: dlzhugmyi

vercel env add CLOUD_API_KEY production
# When prompted, enter: 652183297998888

vercel env add CLOUD_API_SECRET production
# When prompted, enter: gZe2uzjwnwuRzoRpzDEu58rxTsg

vercel env add MAP_TOKEN production
# When prompted, enter: pk.eyJ1Ijoia3VzaC1iYWphaiIsImEiOiJjbHFneTV0ZXkxYTk5MmtvNm95emJjNGZlIn0.leoeT-6Jq5uyyYUIJZw68g

vercel env add ATLASDB_URL production
# When prompted, enter: mongodb+srv://Kush:Kush0705@cluster0.fdyqvum.mongodb.net/?retryWrites=true&w=majority

vercel env add SECRET production
# When prompted, enter: hbdhbebBKBJHhdbsdbh

Write-Host "Done! Now redeploy with: vercel --prod" -ForegroundColor Green
