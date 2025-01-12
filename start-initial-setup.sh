#!/bin/bash

echo "

 ________  ________  ________  _____ ______   ________  ________      
|\   ____\|\   __  \|\   ____\|\   _ \  _   \|\   __  \|\   ____\     
\ \  \___|\ \  \|\  \ \  \___|\ \  \\\__\ \  \ \  \|\  \ \  \___|_    
 \ \  \    \ \  \\\  \ \_____  \ \  \\|__| \  \ \  \\\  \ \_____  \   
  \ \  \____\ \  \\\  \|____|\  \ \  \    \ \  \ \  \\\  \|____|\  \  
   \ \_______\ \_______\____\_\  \ \__\    \ \__\ \_______\____\_\  \ 
    \|_______|\|_______|\_________\|__|     \|__|\|_______|\_________\
                       \|_________|                       \|_________|
                                                                      
                                                                      

"

echo "Installing dependencies..."
npm install


echo "Initial setup..."

if [ -f ./config/settings.js ]; then
  echo "Config file already exists. Are you sure you want to overwrite it? (y/n)"
  read -r confirmation
  if [ "$confirmation" != "y" ]; then
    echo "Aborted. Config file will not be overwritten."
    exit 1
  fi
fi


cat <<EOL > ./config/settings.js
module.exports.PORT = 3001;
module.exports.APP_NAME = "Cosmos framework";
module.exports.APP_WEBSITE = "http://<your_app_website>";
module.exports.MONGOOSE_URI = "mongodb+srv://<user>:<password>@<cluster_name>/<database_name>?retryWrites=true&w=majority";
module.exports.DEBUG=true;
module.exports.ALLOW_ACCESS="*";

module.exports.EMAIL_CONFIG={
    "SMTP_ADDRESS": "smtp.gmail.com",
    "SMTP_PORT": 587, // 465
    "SMTP_SECURE": false, // true
    "SMTP_USER": "<user_id>",
    "SMTP_PASSWORD": "<password>"
}

module.exports.SECRET="<secret_code>";
EOL

echo "Setup completed!"
echo "Cosmos Happy hacking! 🚀"
