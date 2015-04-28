#!/bin/bash
eval "$(boot2docker shellinit)"
docker build --tag club-mate .
#docker build --force-rm=true --no-cache=true --tag club-mate .
