# Windows 10 Development Environment Setup Script
# Run this as Administrator: Right-click PowerShell -> "Run as Administrator"

Write-Host "=== Windows 10 Development Setup ===" -ForegroundColor Cyan
Write-Host ""

# Check if running as Administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Host "ERROR: This script must be run as Administrator!" -ForegroundColor Red
    Write-Host "Right-click PowerShell and select 'Run as Administrator'" -ForegroundColor Yellow
    pause
    exit
}

# 1. Set Execution Policy (if needed)
Write-Host "1. Setting Execution Policy..." -ForegroundColor Green
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
Write-Host "   ✓ Execution Policy set" -ForegroundColor Gray

# 2. Install Git (if not installed)
Write-Host ""
Write-Host "2. Checking Git installation..." -ForegroundColor Green
$gitInstalled = Test-Path "C:\Program Files\Git\bin\git.exe"
if (-not $gitInstalled) {
    Write-Host "   Installing Git..." -ForegroundColor Yellow
    
    # Try winget first
    $wingetAvailable = Get-Command winget -ErrorAction SilentlyContinue
    if ($wingetAvailable) {
        Write-Host "   Using winget to install Git..." -ForegroundColor Gray
        winget install --id Git.Git -e --source winget --accept-package-agreements --accept-source-agreements
    } else {
        Write-Host "   winget not available. Please install Git manually:" -ForegroundColor Yellow
        Write-Host "   Download from: https://git-scm.com/download/win" -ForegroundColor Cyan
        Write-Host "   Or run: choco install git (if Chocolatey is installed)" -ForegroundColor Cyan
    }
} else {
    Write-Host "   ✓ Git is already installed" -ForegroundColor Gray
}

# 3. Install Chocolatey (Package Manager for Windows)
Write-Host ""
Write-Host "3. Checking Chocolatey installation..." -ForegroundColor Green
$chocoInstalled = Get-Command choco -ErrorAction SilentlyContinue
if (-not $chocoInstalled) {
    Write-Host "   Installing Chocolatey..." -ForegroundColor Yellow
    Set-ExecutionPolicy Bypass -Scope Process -Force
    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
    iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    Write-Host "   ✓ Chocolatey installed" -ForegroundColor Gray
} else {
    Write-Host "   ✓ Chocolatey is already installed" -ForegroundColor Gray
}

# 4. Install useful development tools via Chocolatey
if ($chocoInstalled) {
    Write-Host ""
    Write-Host "4. Installing development tools..." -ForegroundColor Green
    
    $tools = @(
        "git",
        "vscode",           # Visual Studio Code (if not using Cursor)
        "7zip",             # File archiver
        "curl",             # Command-line tool
        "wget",             # Download tool
        "python3",          # Python (useful for many tools)
        "yarn",             # Package manager
        "postman",          # API testing (optional)
        "docker-desktop"    # Container platform (optional)
    )
    
    foreach ($tool in $tools) {
        Write-Host "   Installing $tool..." -ForegroundColor Gray
        choco install $tool -y --no-progress
    }
}

# 5. Update PATH environment variable
Write-Host ""
Write-Host "5. Refreshing environment variables..." -ForegroundColor Green
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# 6. Configure Git (if installed)
if (Test-Path "C:\Program Files\Git\bin\git.exe") {
    Write-Host ""
    Write-Host "6. Git is installed. Please configure it manually:" -ForegroundColor Yellow
    Write-Host "   git config --global user.name 'Your Name'" -ForegroundColor Cyan
    Write-Host "   git config --global user.email 'your.email@example.com'" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "=== Setup Complete ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Please restart your terminal/IDE for changes to take effect." -ForegroundColor Yellow
Write-Host ""
pause


