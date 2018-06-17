#!/bin/bash

if [ -z $1 ]; then
  echo "You need to pass an argument (path to stick)"
  exit 1;
fi
STICK_PATH=$1

for zip in zipfiles/*zip; do
  zip_base=$(basename $zip)
  city=${zip_base%%.zip}
  city_path=$STICK_PATH"/"$city
  if [ ! -d $city_path ]; then
    mkdir $city_path
  fi
  cp $zip $city_path
  cd $city_path
  unzip $zip_base
  rm $zip_base
  cd -
done
