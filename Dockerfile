FROM jekyll/jekyll:4.0
LABEL Name=citylab-hackthecrisis Version=0.1.0
RUN gem install bundler
ENTRYPOINT [ "jekyll"]
CMD ["serve", "--livereload"]
