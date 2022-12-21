#!/bin/bash

current_time=$(date +"%H")

if [ "$current_time" == "12" ]; then
  node ./src/utils/follow.js
fi

node ./src/utils/block.js