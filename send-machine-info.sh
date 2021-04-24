#! /bin/bash

# Configure the path of this script to cron

cd $HOME/Projects/machine-email-local-info

echo -e "HOSTNAME: $HOSTNAME\nUSERNAME: $(whoami)\nEXTERNAL IP: $(curl ifconfig.me)\nINTERNAL IP: $(hostname -I | awk '{print $1}')\nBATTERY: $(upower -i $(upower -e | grep '/battery') | grep --color=never -E percentage|xargs|cut -d' ' -f2|sed s/%//)%" > machine.txt

$HOME/.nvm/versions/node/v10.22.1/bin/node index.js
