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
docker run -i -t --rm -p 3000:80 -v `pwd`/club-mate:/club-mate club-mate /bin/bash
```

## Export
```
docker save club-mate | gzip > club-mate.tar.gz
```
