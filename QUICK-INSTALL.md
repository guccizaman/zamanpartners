# Quick Installation Guide for Windows 10 Development

## Essential Tools for Cursor/Development

### Option 1: Quick Install (Recommended - Run as Administrator)

1. **Open PowerShell as Administrator:**
   - Press `Win + X`
   - Select "Windows PowerShell (Admin)" or "Terminal (Admin)"

2. **Run the setup script:**
   ```powershell
   cd C:\Users\Home\Documents\Hasan
   .\setup-windows-dev.ps1
   ```

### Option 2: Manual Installation

#### 1. Install Git
```powershell
# Using winget (Windows 10/11)
winget install --id Git.Git -e --source winget

# Or download manually from: https://git-scm.com/download/win
```

#### 2. Install Chocolatey (Package Manager)
```powershell
# Run PowerShell as Administrator
Set-ExecutionPolicy Bypass -Scope Process -Force
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

#### 3. Install Useful Tools via Chocolatey
```powershell
# Run as Administrator
choco install git -y
choco install curl -y
choco install 7zip -y
choco install python3 -y
```

### Option 3: One-Line Install (If winget is available)

```powershell
# Run PowerShell as Administrator
winget install --id Git.Git -e --source winget; winget install --id Microsoft.VisualStudioCode -e --source winget; winget install --id Python.Python.3.12 -e --source winget
```

## After Installation

1. **Restart your terminal/IDE** (Cursor, PowerShell, etc.)

2. **Verify installations:**
   ```powershell
   git --version
   node --version
   npm --version
   ```

3. **Configure Git:**
   ```powershell
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

## Recommended Cursor Extensions

Install these in Cursor for better development:
- ESLint
- Prettier
- GitLens
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Path Intellisense

## Performance Tips for Windows 10

1. **Disable Windows Defender for development folders:**
   - Add your project folder to exclusions
   - Settings → Virus & threat protection → Exclusions

2. **Use Windows Terminal instead of default PowerShell:**
   ```powershell
   winget install --id Microsoft.WindowsTerminal -e --source winget
   ```

3. **Enable WSL2 (Windows Subsystem for Linux) - Optional:**
   ```powershell
   wsl --install
   ```

## Troubleshooting

If you get "execution policy" errors:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

If Git is not recognized after installation:
- Restart your terminal/IDE
- Check if Git is in PATH: `$env:Path`
- Manually add: `C:\Program Files\Git\bin` to PATH


