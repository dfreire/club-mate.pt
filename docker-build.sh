#!/bin/bash
eval "$(boot2docker shellinit)"
docker build --tag club-mate .
