@echo off
REM BioDatawala - Dependency Update Script (Windows)
REM This script updates Next.js and clears cache

echo 🚀 Updating BioDatawala dependencies...
echo.

REM Remove old dependencies
echo 1️⃣ Removing old node_modules...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del /f /q package-lock.json
if exist yarn.lock del /f /q yarn.lock
if exist pnpm-lock.yaml del /f /q pnpm-lock.yaml
echo ✅ Cleaned up old files
echo.

REM Clear Next.js cache
echo 2️⃣ Clearing Next.js cache...
if exist .next rmdir /s /q .next
echo ✅ Cache cleared
echo.

REM Install dependencies
echo 3️⃣ Installing latest dependencies...
npm install
echo ✅ Dependencies installed
echo.

echo 🎉 Update complete!
echo.
echo 📝 Next steps:
echo    Run: npm run dev
echo    Then open: http://localhost:3000
echo.
pause
