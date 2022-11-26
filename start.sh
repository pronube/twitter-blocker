#!/bin/bash/
echo "| installing packages"
npm i twitter
echo "| loading followers"
node follow.js
echo "| loaded followers"
echo "|"
echo "| start blocking!"
node index.js  #while true; do node .; done
