FROM ubuntu:14.04

MAINTAINER dfreire <dario.freire@gmail.com>

RUN apt-get update && apt-get -y upgrade

RUN mkdir /club-mate

WORKDIR /club-mate
