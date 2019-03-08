$dynamodbLocation = "db"
$dbFile = "shared-local-instance.db"

Remove-Item -Recurse -Force $pwd\$dynamodbLocation
mkdir $pwd\$dynamodbLocation
copy-item $pwd\$dbFile $pwd\$dynamodbLocation\$dbFile