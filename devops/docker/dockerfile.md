# DockerFile

O dockerfile é um arquivo cheio de instruções (passo-a-passo) para a criação da imagem do container.

## Uso

Para iniciar, o arquivo `Dockerfile` deve ser criado na raiz do seu diretório. Só pode existir um `Dockerfile` por diretório.

## Instruções

```dockerfile
# A partir de qual imagem estamos no baseando
FROM image[:tag]
# Basicamente o que escrevemos em um script bash
RUN command
# Adiciona metadata a uma imagem
LABEL <key>=<value>
# Diretorio "raiz" para os comandos seguintes
WORKDIR /app
# Copia arquivos para dentro do container  
COPY . /app
# Volumes expostos para fora do container
VOLUME /app
# Portas liberadas para fora do container
EXPOSE 3000
# Que comando deve ser executado assim que um container sobe
CMD ["command", "params", "..."]
```

### From

A partir de qual imagem estamos no baseando.

```dockerfile
FROM image[:tag]
# --- Exemplo --- #
FROM ubuntu:16.04
```

### Run

Define o comando que deve ser executado. Basicamente o que escrevemos em um script bash.

```dockerfile
RUN command

# --- Exemplo --- #
FROM ubuntu:16.04
RUN apt-get update \
    && apt-get install -y apache2 \
    && apt-get clean
```

OBS: A flag `-y` serve para dar o yes nas perguntas na hora da instalação dos pacotes no ubuntu. O `apt-get clean` serve para limpar todos os pacotes que ele vai utilizar durante a instalação.

### Env

Seta variáveis no ambiente.

```dockerfile
ENV VAR_NAME="VALUE"

# --- Exemplo --- #

FROM ubuntu:16.04
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


```dockerfile
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
      version="1.0" \
      maintainer="user@email.com"
```

### Volume

Volumes expostos para fora do container.

```dockerfile
VOLUME path

# --- Exemplo --- #

FROM ubuntu:16.04
RUN apt-get update \
    && apt-get install -y apache2 \
    && apt-get clean
ENV APACHE_LOCK_DIR="/var/lock"
ENV APACHE_PID_FILE="/var/run/apache2.pid"
LABEL description="Webserver" \
      version="1.0" \
      maintainer="user@email.com"

VOLUME /var/www/html
```

### EXPOSE

Porta onde o container se comunica.

```dockerfile
EXPOSE PORT_NUMBER

# --- Exemplo --- #

FROM ubuntu:16.04
RUN apt-get update \
    && apt-get install -y apache2 \
    && apt-get clean
ENV APACHE_LOCK_DIR="/var/lock"
ENV APACHE_PID_FILE="/var/run/apache2.pid"
LABEL description="Webserver" \
      version="1.0"
      maintainer="user@email.com"
VOLUME /var/www/html

EXPOSE 80
```

## Build

Para executar a construção da sua imagem baseada no `DockerFile`, basta executar o comando abaixo.

```bash
$ docker build -t fulano/apache:1.0 .

# OU

$ docker build -t fulano/apache:1.0 -f dockerfile_path
```

OBS: O `.` representa o diretório local, que significa o contexto para construção da imagem. A flag `-t`, serve para taggear **"dar nome"** a nossa imagem gerada.
