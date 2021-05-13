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

# Add a user for yourself.
adduser {username}

# Add your user to the sudo group.
usermod -aG sudo {username}

# Switch to that user.
su - {username}
cd ~/

# Create a file structure for your SSH configuration.
mkdir .ssh
touch .ssh/authorized_keys
chmod 700 .ssh
chmod 600 .ssh/authorized_keys

# Open the authorized keys file and paste a public key of yours.
vi .ssh/authorized_keys

# As root (or sudo), see config below
vi /etc/ssh/sshd_config
service ssh restart
```

## sshd_config

This will ensure logins as the root user are disabled, logins with passwords are disabled, and logins with preconfigured keys are enabled.

* `PermitRootLogin no`
* `PubkeyAuthentication yes`
* `PasswordAuthentication no`

## Certbot

Once a good enough server configuration is applied in Nginx, Certbot can be pretty magical. Just running it with the `--nginx` flag will parse through your existing nginx site configs and inject SSL specific blocks.

```
certbot --nginx
```

- [ ] Am I okay with the default Certbot SSL configuration (beyond certs) and dhparams or do I want to tweak my own?


## Sources:
* https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mariadb-php-lemp-stack-on-debian-10
* https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx
* https://www.digitalocean.com/community/tutorials/how-to-create-a-sudo-user-on-ubuntu-quickstart
* https://jeremyfelt.com/2012/12/04/how-i-setup-all-my-ssh-keys-in-os-x-github-bitbucket-beanstalk-linode-ubuntu/
* https://askubuntu.com/questions/435615/disable-password-authentication-in-ssh#435620
