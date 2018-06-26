FROM ruby:2.4

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get update \
    && apt-get install -y nodejs --no-install-recommends \
    && apt-get clean

COPY Gemfile

RUN bundle install

COPY . /usr/src/app

EXPOSE 3000
CMD puma -C config/puma.rb
