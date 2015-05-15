#!/bin/bash
#echo "In the container, run: service apache2 start"
echo "In the host, access: http://$(boot2docker ip):3000/"
echo ""

eval "$(boot2docker shellinit)"
docker run -i -t --rm -p 3000:80 -v `pwd`/club-mate:/club-mate club-mate /bin/bash
