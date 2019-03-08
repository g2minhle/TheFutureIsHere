Start-Process -FilePath powershell -ArgumentList .\startLocalElasticSearch.ps1 -PassThru
Start-Process -FilePath powershell -ArgumentList .\startLocalDB.ps1 -PassThru
Start-Process -FilePath webpack -ArgumentList --watch -WorkingDirectory ..\..\src\main\reactjs -PassThru