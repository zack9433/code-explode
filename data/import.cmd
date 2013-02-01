<mongodb_path>\bin\mongoimport -h <server>:<port> -d breweverywhere -c adjuncts -u <user> -p <password> --file adjunctseed.js
<mongodb_path>\bin\mongoimport -h <server>:<port> -d breweverywhere -c fermentables -u <user> -p <password> --file fermentableseed.js
<mongodb_path>\bin\mongoimport -h <server>:<port> -d breweverywhere -c hops -u <user> -p <password> --file hopseed.js
<mongodb_path>\bin\mongoimport -h <server>:<port> -d breweverywhere -c waterprofiles -u <user> -p <password> --file waterprofileseed.js
<mongodb_path>\bin\mongoimport -h <server>:<port> -d breweverywhere -c yeast -u <user> -p <password> --file yeastseed.js