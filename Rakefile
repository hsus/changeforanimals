task :default => :server

# Compile Sass and generate site
desc 'Build site with Jekyll'
task :build do
  system 'bundle exec sass -r sass-globbing --update assets/sass:assets/css'
  jekyll 'build'
end

# Sass
desc 'Build and start local server'
task :serve do
  jekyll 'serve --baseurl=""'
end

# Sass
desc 'Watch and compile Sass'
task :watch do
  system 'bundle exec sass -r sass-globbing --watch assets/sass:assets/css &'
end

# Run Livereload with guard
desc 'Use Guard to run livereload'
task :guard do
  system 'guard'
end

# Remove site directory and run Jekyll command of your choosing
def jekyll(opts = '')
  system 'rm -rf _site'
  system 'bundle exec jekyll ' + opts
end


desc 'Serve Jekyll and compile Sass'
task :develop => [:watch, :serve]
Rake::Task['develop'].invoke
