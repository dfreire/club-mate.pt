FROM linode/lamp

MAINTAINER dfreire <dario.freire@gmail.com>

RUN mkdir /var/www/club-mate.pt
RUN mkdir /var/www/club-mate.pt/public_html
RUN mkdir /var/www/club-mate.pt/log
RUN mkdir /var/www/club-mate.pt/backups

ADD club-mate.pt.conf /etc/apache2/sites-available/

RUN a2ensite club-mate.pt.conf

WORKDIR /var/www/club-mate.pt/public_html/
