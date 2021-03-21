#! /bin/bash

echo -e "HOSTNAME   : $HOSTNAME\nUSERNAME   : $USER\nEXTERNAL IP: $(curl ifconfig.me)\nINTERNAL IP : $(hostname -I)" > machine.txt

node index.js
