#!/usr/bin/env sh

dir=$PWD

cd $dir && mvn clean package -Dmaven.test.skip=true

#cd $dir && mvn clean package \
#    -Dmaven.test.skip=true \
#    -Pnative -Dnative-image.docker-build=true

