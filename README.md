sensible-drupal
===============

A sensible starting point for new Drupal 7 sites.

To get started:

* Drop all the files in your site root and go through the installation process at http://yoursite.com/install.php.
* One your site is installed, enable the Backup and Migrate module.
* With Backup and Migrate enabled, go to Configuratioon -> Backup and Migrate and restore your site using the file at ./SensibleDrupal-sanitized.mysql.zip.
* Once the site has been restored, DELETE ./SensibleDrupal-sanitized.mysql.zip.
* You will need to create a new cron_key in the variable table (pretty sure you will need to do this directly in the database).

The username/password for the administrator account is admin/admin. You should probably change this!

A couple of notes:

* In this version, the LDAP modules have been disabled and uninstalled (otherwise, you might get locked out of your site).
* Whatever settings you enter during installation will be overwritten by the mysql restore.
* Once you restore the site, you will find some default content with more information on the default configuration and included theme.