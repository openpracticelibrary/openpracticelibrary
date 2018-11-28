#!/bin/bash
# set -o xtrace
# set -e
# 
# Scale and crop images for use in cards.
# If the file is below 640x426, it will be copied as-is.
# Depends on https://imagemagick.org/script/convert.php

ORIGINAL_PATH="static/images/"
SCALED_PATH="static/images/scaled/"

mkdir -p $SCALED_PATH
for original_file in $ORIGINAL_PATH*.{jpg,jpeg,png} ; do
  scaled_file="${original_file/$ORIGINAL_PATH/$SCALED_PATH}"
  if [ -f $scaled_file ]; then
    echo Exists: $scaled_file
  else
    # 1. Scale each image to a minimum of 640x426, preserving aspect ratio.
    # 2. When cropping, align to the center.
    # 3. Crop image to exactly 640x426.
    # The \ isn't a geometry argument; it just escapes the > character.
    echo Creating: $scaled_file
    convert $original_file -resize 640x426^\> -gravity center -crop 640x426+0+0 $scaled_file
  fi
done