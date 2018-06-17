#!/bin/bash

## hardcode intenso device name (fabric set)
UNZIP_DIR="/media/"$USER"/INTENSO/"

ls $UNZIP_DIR

if [ $? -ne 0 ]; then
  echo "Unzip directory is not mounted. Exiting..."
  exit 1
fi

if [ -z $1 ]; then
  echo "You have to pass an argument"
  exit 1;
fi

city=$1

# Cleaning up old files
# Check if cd command exited ok
cd $UNZIP_DIR

if [ $? -eq 0 ]; then
  echo "exit ok"
  rm -rf assets/
  rm *
fi
cd -

unzip "zipfiles/"$city".zip" -d $UNZIP_DIR

umount $UNZIP_DIR

ls $UNZIP_DIR
