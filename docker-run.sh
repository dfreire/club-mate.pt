#!/bin/bash
eval "$(boot2docker shellinit)"
boot2docker ip
docker run -i -t --rm -p 3000:80 -v `pwd`/public_html:/var/www/example.com/public_html/ club-mate /bin/bash && cd /club-mate
