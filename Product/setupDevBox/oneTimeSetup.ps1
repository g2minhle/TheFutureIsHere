ac -Encoding UTF8 "$env:windir\System32\drivers\etc\hosts" "127.0.0.1 site.com"
Start-Process -FilePath powershell -ArgumentList .\cleanLocalDB.ps1 -PassThru
Start-Process -FilePath powershell -ArgumentList .\cleanLocalElasticSearch.ps1 -PassThru