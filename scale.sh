#!/bin/bash
# set -o xtrace
# set -e
# 
# Scale and crop images for use in cards
# https://imagemagick.org/script/convert.php
# https://imagemagick.org/script/command-line-processing.php#geometry
# 
# 1. Find all images in static/images (not subdirectories).
# 2. Scale each image to a minimum of 640x426, preserving aspect ratio.
# 3. When cropping, align to the center.
# 4. Crop image to exactly 640x426.
#
# If the file is below 640x426, it will be copied as-is.

cd static/images
mkdir -p scaled
for file in *.{jpg,jpeg,png} ; do
  if [ -f scaled/$file ]; then
    echo $file has already been scaled and cropped.
  else
    echo Scaling and cropping $file
    # The \ isn't a geometry argument; it just escapes the > character.
    convert $file -resize 640x426^\> -gravity center -crop 640x426+0+0 scaled/$file
  fi
done