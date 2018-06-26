FROM ruby:2.4

RUN apt-get update -qq && apt-get install -y build-essential

# Install capybara-webkit deps
RUN apt-get update \
    && apt-get install -y xvfb qt5-default libqt5webkit5-dev \
                          gstreamer1.0-plugins-base gstreamer1.0-tools gstreamer1.0-x

# for postgres
RUN apt-get install -y libpq-dev

# for nokogiri
RUN apt-get install -y libxml2-dev libxslt1-dev

# App specific installations are run separatelly so previous is a rehused container
RUN apt-get install -y imagemagick

# Node.js
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash - \
    && apt-get install -y nodejs

# yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -\
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install -y yarn

# cleanup
RUN rm -rf /var/lib/apt/lists/*	

# rails and bundle install
RUN gem install rails

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

EXPOSE 3000
