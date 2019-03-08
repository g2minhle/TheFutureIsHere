$esBaseLocation = "es_data"
$esLocation = "elasticsearch-5.5.2\data"
$dbFile = "shared-local-instance.db"

Remove-Item -Recurse -Force $pwd\$esLocation
mkdir $pwd\$esLocation
copy-item $pwd\$esBaseLocation\* $pwd\$esLocation