#!/bin/bash

cd $(dirname $0)

if [ ! -f .env ]; then
  echo "Create a .env file with twitter secrets first. See README.md"
  exit 1
fi

while read line; do export "$line";
done < .env

node bot.js
