$url = "https://s3.eu-central-1.amazonaws.com/dynamodb-local-frankfurt/dynamodb_local_latest.zip"
$dynamodbLocalZipFile = "dynamodb_local_latest.zip"
$dynamodbLocalFolder = "dynamodb_local_latest"
$dynamodbLocation = "db"

If (Test-Path $pwd\$dynamodbLocalZipFile){
}Else{
    curl $url -O $pwd\$dynamodbLocalZipFile
}

If (Test-Path $pwd\$dynamodbLocalFolder){
}Else{
    Expand-Archive -Path $pwd\$dynamodbLocalZipFile -DestinationPath $pwd\$dynamodbLocalFolder
}

If (Test-Path $pwd\$dynamodbLocation){
}Else{
    mkdir $pwd\$dynamodbLocation
}
 
java -jar $pwd\$dynamodbLocalFolder\DynamoDBLocal.jar -dbPath $dynamodbLocation -sharedDb

