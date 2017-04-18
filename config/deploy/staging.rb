set :application, 'skeleton.nclud.com'
set :deploy_to, "/var/www/vhosts/#{fetch(:application)}"
server 'molan.browsermedia.com', roles: %w{web app}
set :linked_dirs, ['public/wp-content/uploads']
set :branch, "staging"