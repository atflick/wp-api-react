set :application, 'application_url'
set :deploy_to, "/var/www/vhosts/#{fetch(:application)}"
server 'Server_name', roles: %w{web app}
set :linked_dirs, ['public/wp-content/uploads']
set :branch, "master"