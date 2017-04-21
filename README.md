## admin credentials
- admin / gJ5Edd#WQC*H

## Getting started
- Download the skeleton repo https://github.com/nclud/skeleton
- Rename the code folder to the SITENAME and put it in your site directory something like ~/Sites/SITENAME
- Create the virtual host on your local machine, it should be something like SITENAME.dev
	* If you don't know how to create a virtual host locally you can search for it depening on what apache server you are using. For example if you are using MAMP you can check this http://stackoverflow.com/questions/35251032/how-to-create-virtual-hosts-in-mamp
- Create the database locally and import wp.sql that you can find in ~/Sites/SITENAME/wp.sql
- Delete wp.sql from the site root
- Go to the database you created for the site and update wp_options table content, find "siteurl" and "home" option names and update the value to "http://SITENAME.dev"
- Go to ~/Sites/SITENAME/public and create a file called wp-config.development.php
- Paste the following code and save
	<?php
		define('WP_SITEURL', 'http://SITENAME.dev');
		define('WP_HOME', 'http://SITENAME.dev');
		define('DB_NAME', 'SITE_DB');
		define('DB_USER', 'root');
		define('DB_PASSWORD', 'root');
		define('DB_HOST', 'localhost');
- Update the SITENAME, SITE_DB and the other variables with the actual values.
- Go to wp-config.php, line 26 and update the environments to match the actual values. For example update wp.dev with "SITENAME.dev"
	$environments = array(
		'development' => 'wp.dev',
	    'staging' => 'skeleton.nclud.com',
	    'production' => 'skeleton.nclud.com',
	);
- Cut ~/Sites/SITENAME/uploads and paste it inside ~/Sites/SITENAME/public/wp-content

## Theme settings
- Go to /wp-content/themes and rename the folder "skeleton" to the "sitename"
- Go to /wp-content/themes/sitename/style.css and update the theme name there
- Update /wp-content/themes/sitename/screenshot.png to have the new theme screenshot
- Go to http://SITENAME.dev/wp-admin
- Sign in using admin / gJ5Edd#WQC*H
- Go to Appearance -> Themes and Activate your theme
- Now you can visit http://SITENAME.dev

## Setup Theme compiler
- Go to /wp-content/themes/sitename/package.json
- Update the code there to match the new site
	  "name": "SITENAME",
	  "version": "0.0.2",
	  "description": "Site description should go here",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1"
	  },
	  "author": "Shorouk Mansour <smansour@nclud.com>",
	  "repository": {
	    "type": "git",
	    "url": "https://github.com/nclud/SITENAME"
	  }
- Go to /wp-content/themes/sitename/gulpfile.js and update Line 22 to have your sitename
	proxy: "SITENAME.dev"

## Github settings
- Open terminal
- cd /directory/to/sitename
- git init
- git add .
- git commit -m "System installed and configured"
- git remote add origin git@github.com:nclud/sitename.git
- git push -u origin master

## Setup the DB configuration for the different environments
- Go to /public/wp-config.staging.php and update the DB configuration with the ones the system admin provides.
- Go to /public/wp-config.production.php and update the DB configuration with the ones the system admin provides.

## Setup the deployment files for the different environments
- Go to /config/deploy/staging.rb and update the data there with the actual values the system admin provided.
	* IMPORTANT NOTE: the staging branch will always be deployed to the staging server (Look at line 5).
- Go to /config/deploy/production.rb and update the data there with the actual values the system admin provided.
	* IMPORTANT NOTE: the master branch will always be deployed to the prodcution server (Look at line 5).

## Local Setup
Running local set up will install all necessary bundles and dependencies and then run a server with BrowserSync. It watches all SASS, JS, and images, then compiles and reloads accordingly.
    
    $ npm install -g gulp
    $ cd sitename/theme/directory
    $ npm install
    $ bundle install
    $ gulp

## Adding / Updating functionality
	$ cd project-name
	$ git checkout -b task-name
	$ git commit "update description"
	$ git push --set-upstream origin task-name
	$ git checkout staging
	$ git merge task-name
	$ git push

## Staging server deployment
	$ cd project-name
	$ git checkout staging
	$ git push
	$ cap staging deploy

## Production server deployment
	$ cd project-name
	$ git checkout master
	$ git push
	$ cap production deploy