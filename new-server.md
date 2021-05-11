# A new Ubuntu server

```
apt-get update
apt-get upgrade
apt install nginx
apt install mariadb-server
mysql_secure_installation
apt install php-fpm php-mysql
snap install core
snap refresh core
snap install --classic certbot
ufw allow 'Nginx HTTP'
ufw status
```

Vias:
* https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mariadb-php-lemp-stack-on-debian-10
* https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx
