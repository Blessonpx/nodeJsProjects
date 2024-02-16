Invoke-WebRequest -Uri "https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi" -OutFile "nodejs-installer.msi"
Start-Process -Wait -FilePath .\nodejs-installer.msi

