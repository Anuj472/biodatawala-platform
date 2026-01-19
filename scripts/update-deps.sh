#!/bin/bash

# BioDatawala - Dependency Update Script
# This script updates Next.js and clears cache

echo "🚀 Updating BioDatawala dependencies..."
echo ""

# Remove old dependencies
echo "1️⃣ Removing old node_modules..."
rm -rf node_modules
rm -rf package-lock.json
rm -rf yarn.lock
rm -rf pnpm-lock.yaml
echo "✅ Cleaned up old files"
echo ""

# Clear Next.js cache
echo "2️⃣ Clearing Next.js cache..."
rm -rf .next
echo "✅ Cache cleared"
echo ""

# Install dependencies
echo "3️⃣ Installing latest dependencies..."
if command -v npm &> /dev/null; then
    npm install
    echo "✅ Dependencies installed with npm"
elif command -v yarn &> /dev/null; then
    yarn install
    echo "✅ Dependencies installed with yarn"
elif command -v pnpm &> /dev/null; then
    pnpm install
    echo "✅ Dependencies installed with pnpm"
else
    echo "❌ No package manager found. Please install npm, yarn, or pnpm."
    exit 1
fi
echo ""

echo "🎉 Update complete!"
echo ""
echo "📝 Next steps:"
echo "   Run: npm run dev"
echo "   Then open: http://localhost:3000"
echo ""
