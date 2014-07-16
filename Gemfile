source 'https://rubygems.org'
ruby '2.0.0'


# CORE SYSTEM
gem 'rails', '4.1.1'
gem 'sqlite3'                           # Use sqlite3 as the database for Active Record
gem 'jquery-rails'                      # Use jquery as the JavaScript library
gem 'jbuilder', '~> 2.0'                # Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'unicorn'                           # Use unicorn as the app server
gem 'devise'
gem 'bcrypt'
gem 'dotenv-rails'

# ASSET PIPELINE
gem "bourbon"                           # Sass mixins from Thoughtbot
gem 'sass-rails', '~> 4.0.3'            # Use SCSS for stylesheets
gem "compass-rails"                     # Sass mixins and spriting engine from Compass
gem "oily_png"                          # PNG exporting for Compass
gem 'uglifier', '>= 1.3.0'              # Use Uglifier as compressor for JavaScript assets
gem 'non-stupid-digest-assets'          # Restores Rails 3 non-digest assets copies


# PRODUCTION ONLY GEMS
group :production do
end

# QA ONLY GEMS
group :qa do
  gem "better_errors"                   # Very pretty error screens
  gem "binding_of_caller"               # Adds REPL support to better_errors
  gem "quiet_assets"                    # Suppresses Asset Pipline logging
end

# TEST ONLY GEMS
group :test do
  gem "rake"
  gem "rspec-rails"
  gem "capybara"
  gem "guard-rspec"
  gem "launchy"
end

# AUDITING OR DEVELOPMENT-ONLY GEMS
group :development do
  gem "better_errors"                   # Very pretty error screens
  gem "binding_of_caller"               # Adds REPL support to better_errors
  gem "quiet_assets"                    # Suppresses Asset Pipline logging
  gem "rspec-rails"
  gem 'spring'                          # Keeps dev application running in the background
end

