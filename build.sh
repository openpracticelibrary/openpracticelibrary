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
  echo "\n##################################################\n" &&\
  echo "    BUILD STEP ${response}: $@" &&\
  echo "\n##################################################\n"
  if [[ ${rc} != 0 ]];then
    exit ${rc}
  fi
} 

clean(){
    _printBuildStep "rm -rvf docs"
} 

test(){
    _printBuildStep "echo test-command"
}

build(){
    _printBuildStep "hugo"
}

if [ $# -eq 0 ];then
    echo "No arguments supplied - running all"
    clean && test && build
else
    $@
fi
