require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'tmpdir'
require 'jekyll'
gem "rake", "~> 10"

# Compile Sass and generate site
desc 'Build site with Jekyll'
task :build do
  system 'bundle exec sass --update -r sass-globbing assets/sass:assets/css'
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

# Amazon S3 publishing options
desc "Generate and publish site to production on Amazon S3."
task :publish => [:build] do
  system 'bundle exec s3_website push'
end

desc "Generate and publish site to staging on Amazon S3."
task :stage => [:build] do
  system 'bundle exec s3_website push --config-dir=_stage_config'
end

desc 'Serve Jekyll and compile Sass'
task :develop => [:watch, :serve]

task :default => [:build]
