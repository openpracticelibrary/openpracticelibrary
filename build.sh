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
    _printBuildStep "./scale.sh"
    _printBuildStep "hugo"
}

if [ $# -eq 0 ];then
    echo "No arguments supplied - running all"
    clean && test && build
else
    $@
fi
