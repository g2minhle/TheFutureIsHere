Start-Process -FilePath powershell -ArgumentList .\cleanLocalDB.ps1 -PassThru
Start-Process -FilePath powershell -ArgumentList .\cleanLocalElasticSearch.ps1 -PassThru