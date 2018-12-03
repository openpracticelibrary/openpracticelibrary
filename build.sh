# This file is to be used for adding build steps of the static content on Open Practice Library
#!/bin/bash
# set -o xtrace
# set -e

#util functions for build scripts

_printBuildStep(){
    echo ""
    echo ""
    echo "##################################################"
    echo ""
    echo "    START BUILD STEP:  $@"
    echo ""
    echo "##################################################"

    sh -c "${@}"
    rc=$?
    response=FAILURE
    if [[ ${rc} == 0 ]];then
        response=SUCCESS
    fi
    echo ""
    echo "##################################################"
    echo ""
    echo "    BUILD STEP ${response}: $@"
    echo ""
    echo "##################################################"
    if [[ ${rc} != 0 ]];then
        exit ${rc}
    fi
}


clean(){
    _printBuildStep "rm -rvf public static/images/scaled"
}

test(){
    _printBuildStep "echo No tests defined"
}

build(){
    _printBuildStep "npm i"
    _printBuildStep "./node_modules/.bin/grunt lunr-index"
    
    echo ""
    echo ""
    echo "##################################################"
    echo ""
    echo "    START BUILD STEP: Combobulate Images"
    echo ""
    echo "##################################################"
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

    _printBuildStep "hugo"
}

if [ $# -eq 0 ];then
    echo "No arguments supplied - running all"
    clean && test && build
else
    $@
fi
