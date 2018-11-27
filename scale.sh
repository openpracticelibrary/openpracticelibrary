# Scale and crop images for use in cards

cd static/images
mkdir scaled
for file in *.{jpg,jpeg,png} ; do
  echo converting $file
  convert $file -resize 640x426^ -extent 640x426 -gravity center scaled/$file
done