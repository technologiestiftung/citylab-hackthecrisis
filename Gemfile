# -*- encoding : utf-8 -*-
if RUBY_VERSION =~ /2.6/ # assuming you're running Ruby ~2.6
Encoding.default_external = Encoding::UTF_8
Encoding.default_internal = Encoding::UTF_8
end
source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run .
# When you want to use a different version, change it below, save the # file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 4"
# gem "html-proofer"
# This is the default theme for new Jekyll sites. You may change this  to anything you like.
# gem "minima", "~> 2.0"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above an d
# uncomment the line below. To upgrade, run `bundle update github-pag es`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-sitemap"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data
# Windows does not include zoneinfo files, so bundle the tzinfo-data
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?