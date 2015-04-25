# Docker

## Install
```
brew install boot2Docker
brew install docker
```

## Init

```
boot2docker init
boot2docker start

# set environment variables
eval "$(boot2docker shellinit)"

# check
docker info
```

# Build and Run

```
docker build --tag club-mate .
```

```
docker run -i -t --rm -p 3000:80 -v `pwd`/public_html:/var/www/club-mate.pt/public_html/ club-mate /bin/bash && cd /club-mate
```

## Export
```
docker save club-mate | gzip > club-mate.tar.gz
```
