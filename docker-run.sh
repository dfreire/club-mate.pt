#!/bin/bash
echo "1. In the container, run: service apache2 start"
echo "2. In the host, access: http://$(boot2docker ip):3000/"
echo ""

eval "$(boot2docker shellinit)"
docker run -i -t --rm -p 3000:80 -v `pwd`/public_html:/var/www/club-mate.pt/public_html/ club-mate /bin/bash && cd /club-mate
