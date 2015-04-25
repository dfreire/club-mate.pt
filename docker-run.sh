#!/bin/bash
eval "$(boot2docker shellinit)"
docker run -it --rm --publish 3000:3000 --volume `pwd`/club-mate:/club-mate club-mate /bin/bash; cd /club-mate
