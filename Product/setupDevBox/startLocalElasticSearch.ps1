$url = "https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.5.2.zip"
$elasticsearchLocalZipFile = "elasticsearch-5.5.2.zip"
$elasticsearchLocalFolder = "elasticsearch-5.5.2"

If (Test-Path $pwd\$elasticsearchLocalZipFile){
}Else{
    curl $url -O $pwd\$elasticsearchLocalZipFile
}

If (Test-Path $pwd\$elasticsearchLocalFolder){
}Else{
    Expand-Archive -Path $pwd\$elasticsearchLocalZipFile -DestinationPath $pwd
}

& $pwd\$elasticsearchLocalFolder\bin\elasticsearch.bat