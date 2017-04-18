## Local Static Setup
Running local set up will install all necessary bundles and dependencies and then run a server with BrowserSync. It watches all SASS, JS, and images, then compiles and reloads accordingly.
    
    $ npm install -g gulp
    $ cd wp/theme/directory
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