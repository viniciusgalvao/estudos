# Docker Compose

É uma ferramenta para você poder definir vários containers em docker, em um arquivo único e utilizando apenas um comando, você pode iniciar todos os serviços de uma forma ágil.

## Uso

Para iniciar os trabalhos com o `$ docker-compose`, o arquivo `docker-compose.yml` deve ser criado.

## Comandos

```bash
$ docker-compose build # Constroi as imagens que estão no docker-compose.yml
$ docker-compose build --no-cache # Constroi as imagens, ignorando as contruções anteriores
$ docker-compose up [servico] # Sobe todos os serviços ou serviço especificado
$ docker-compose stop # Para os containers que estão executando
$ docker-compose start # (Re)inicia containers parados
$ docker-compose rm [-f] # Remove containers parados
```

## Parâmetros

Lista com os parâmetros que podem ser utilizados dentro do `docker-compose.yml`

```yml
# version = Indica a versão do seu docker-compose.yml
version: 1

# image = Indica uma imagem
image: ubuntu:16.04

# build = Indica o caminho do seu Dockerfile
build: .

# command = Executa um comando
command: bundle exec thin -p 3000

# container_name = Nome para container
container_name: my-web-container

# dns = Indica o dns server
dns: 8.8.8.8

# dns_search = Especifica um search domain
dns_search: example.com

# env_file = Especifica um arquivo com variáveis de ambiente
env_file: .env

# enviroment = Especifica variáveis de ambiente
enviroment:
  RACK_ENV: development

# expose = Expõe a porta do container
expose:
  - "3000"
  - "8000"

# links = Linka containers dentro do mesmo docker-compose
links:
  - db
  - db:database

# external_links = "Linka" containers que não estão especificado no docker-compose atual.
external_links:
  - redis_1
  - project_db_1:mysql

# extra_hosts = Adiciona uma entrada no /etc/hosts do container
extra_hosts:
  - "somehost:162.242.195.82"
  - "otherhost:50.31.209.229"

# labels = Adiciona metadata ao container
labels:
  com.example.description: "Accounting webapp"
  com.example.department: "Finance"

# log_driver = Indica o formato do log a ser gerado, por ex: syslog, json-file, etc
log_driver: syslog

# OU

logging:
  driver: syslog

# log_opt =  Indica onde mandar os logs, pode ser local ou em um syslog remoto
log_opt:
  syslog-address: "tcp://192.168.0.42:123"

# OU

logging:
  driver: syslog
  options:
    syslog-address: "tcp://192.168.0.42:123"

# net = Modo de uso da rede
net: "bridge"
net: "host"

# ports = Expõe as portas do container e do host"
ports:
  - "3000"
  - "8000:8000"

# volumes, volume_driver = Monta volumes no container
volumes:
  # basta especificar um caminho e deixar o motor criar um volume
  - /var/lib/mysql

  # especifique um mapeamento de caminho absoluto
  - /opt/data:/var/lib/mysql

  # caminho no host, em relação ao arquivo de composição
  - ./cache:/tmp/cache

# volumes_from = Monta volumes através de outro containers
volume_from:
  - service_name
  - service_name:ro
```

## Scale

Quando queremos subir vários containers idênticos.

```bash
$ docker-compose scale servicename=number_of_containers
# --- exemplo --- #
$ docker-compose scale application=5

```

OBS: deve-se ter cuidado com as portas definidas no serviço para não causar conflito.
