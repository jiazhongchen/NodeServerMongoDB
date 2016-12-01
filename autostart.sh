#!/bin/sh
case "$(pidof node | wc -w)" in

0)  echo "Restarting node:     $(date)" >> /home/jchen/projects/nodejs/server/NodeServerMongoDB/log.txt
node /home/jchen/projects/nodejs/server/NodeServerMongoDB/app.js &
;;
1)  echo "All is well" >> /home/jchen/projects/nodejs/server/NodeServerMongoDB/log.txt
;;
*)  echo "Removed double node: $(date)" >> /home/jchen/projects/nodejs/server/NodeServerMongoDB/log.txt
kill $(pidof node | awk '{print $1}')
;;

esac
