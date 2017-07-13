# DockerFile

O dockerfile é um arquivo cheio de instruções (passo-a-passo) para a criação da imagem do container.

Só pode existir um dockerfile por diretório. Para iniciar, um arquivo chamado `Dockerfile` deve ser criado.

## Instruções

```
FROM image[:tag] # A partir de qual imagem estamos no baseando
RUN command # Basicamente o que escrevemos em um script bash
LABEL <key>=<value> # Adiciona metadata a uma imagem
WORKDIR /app # Diretorio "raiz" para os comandos seguintes
COPY . /app # Copia arquivos para dentro do container
VOLUME /app # Volumes expostos para fora do container
EXPOSE 3000 # Portas liberadas para fora do container
CMD ["command", "params", "..."] # Que comando deve ser executado assim que um container sobe
```

### From

A partir de qual imagem estamos no baseando.

sintaxe:

```
FROM image[:tag]

--- Exemplo ---

FROM ubuntu:16.04
```

### Maintainer

Quem criou o DockerFile.

sintaxe:

```
MAINTEINER author_mail

--- Exemplo ---

FROM ubuntu:16.04
MAINTEINER user@email.com
```

### Run

Define o comando que deve ser executado. Basicamente o que escrevemos em um script bash.

sintaxe:

```
RUN command

--- Exemplo ---

FROM ubuntu:16.04
MAINTEINER user@email.com
RUN apt-get update && apt-get install -y apache2 && apt-get clean
```

OBS: A flag `-y` serve para dar o yes nas perguntas na hora da instalação dos pacotes no ubuntu. O `apt-get clean` serve para limpar todos os pacotes que ele vai utilizar durante a instalação.

### Env

Seta variáveis no ambiente.

```
ENV VAR_NAME="VALUE"

--- Exemplo ---

FROM ubuntu:16.04
MAINTEINER user@email.com
RUN apt-get update \
    && apt-get install -y apache2 \
    && apt-get clean

ENV APACHE_LOCK_DIR="/var/lock"
ENV APACHE_PID_FILE="/var/run/apache2.pid"
ENV APACHE_RUN_USER="www-data"
ENV APACHE_RUN_GROUP="www-data"
ENV APACHE_LOG_DIR="/var/log/apache2"
```

### Label

Adiciona `metadata` a uma imagem.


```
LABEL <key>=<value>

--- Exemplo ---

FROM ubuntu:16.04
MAINTEINER user@email.coman
RUN apt-get update \
    && apt-get install -y apache2 \
    && apt-get clean
ENV APACHE_LOCK_DIR="/var/lock"
ENV APACHE_PID_FILE="/var/run/apache2.pid"

LABEL description="Webserver" \
      version="1.0"
```

### Volume

Volumes expostos para fora do container.

```
VOLUME path

--- Exemplo ---

FROM ubuntu:16.04
MAINTEINER user@email.coman
RUN apt-get update \
    && apt-get install -y apache2 \
    && apt-get clean
ENV APACHE_LOCK_DIR="/var/lock"
ENV APACHE_PID_FILE="/var/run/apache2.pid"
LABEL description="Webserver" \
      version="1.0"

VOLUME /var/www/html
```

### EXPOSE

Porta onde o container se comunica.

```
EXPOSE PORT_NUMBER

--- Exemplo ---

FROM ubuntu:16.04
MAINTEINER user@email.coman
RUN apt-get update \
    && apt-get install -y apache2 \
    && apt-get clean
ENV APACHE_LOCK_DIR="/var/lock"
ENV APACHE_PID_FILE="/var/run/apache2.pid"
LABEL description="Webserver" \
      version="1.0"
VOLUME /var/www/html

EXPOSE 80
```

## Build

Para executar a construção da sua imagem baseada no `DockerFile`, basta executar o comando abaixo.

```
$ docker build -t fulano/apache:1.0 .

--- ou ---

$ docker build -t fulano/apache:1.0 -f dockerfile_path
```

OBS: O `.` representa o diretório local, que significa o contexto para construção da imagem. A flag `-t`, serve para taggear **"dar nome"** a nossa imagem gerada.
