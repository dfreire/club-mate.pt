FROM linode/lamp

MAINTAINER dfreire <dario.freire@gmail.com>

RUN apt-get update && apt-get -y upgrade
RUN apt-get install -y curl

RUN apt-get install -y php5-mcrypt
RUN echo "extension=mcrypt.so" >> /etc/php5/cli/php.ini

RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer

RUN mkdir /club-mate

RUN mkdir /var/www/club-mate.pt
RUN mkdir /var/www/club-mate.pt/log
RUN mkdir /var/www/club-mate.pt/backups
RUN ln -s /club-mate/public /var/www/club-mate.pt/public_html
ADD club-mate.pt.conf /etc/apache2/sites-available/
RUN a2ensite club-mate.pt.conf

WORKDIR /club-mate
