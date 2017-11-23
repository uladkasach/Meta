Meta.conf contains file for apache server. A symlink should be created into sites-availible. A symlink should then be created from sites-availible to sites-enabled:
- `sudo ln -s /var/www/git/Meta/_dev/server/Meta.conf /etc/apache2/sites-available/Meta.conf`

- `sudo ln -s /etc/apache2/sites-available/Meta.conf /etc/apache2/sites-enabled/Meta.conf`
- `sudo service apache2 restart`

Symlink repo->avail->enabled instead of repo->enabled to keep logic as expected for usual setups.
