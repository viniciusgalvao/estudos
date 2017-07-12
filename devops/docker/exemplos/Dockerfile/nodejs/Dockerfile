FROM kaiquewdev/docker-nodejs-compiled
ADD . /usr/src/app
WORKDIR . /usr/src/app
RUN npm i
EXPOSE 3000
CMD ["node", "bin/www"]
