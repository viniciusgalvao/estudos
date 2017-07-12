# DockerFile

O dockerfile é um arquivo cheio de instruções (passo-a-passo) para a criação da imagem do container.

Antes de mais nada, só pode existir um dockerfile por diretório. Para iniciar, um arquivo chamado `Dockerfile` deve ser criado.

## Sintaxe

### from  
Especifica qual imagem será utilizada para criação da outra imagem.

sintaxe:

```
FROM image_name:version

--- Exemplo ---

FROM ubuntu:16.04
```

### maintainer  
Quem criou o DockerFile.

sintaxe:

```
MAINTEINER author_mail

--- Exemplo ---

FROM ubuntu:16.04
MAINTEINER user@email.com
```

### run  
Define o comando que deve ser executado.

sintaxe:

```
RUN command

--- Exemplo ---

FROM ubuntu:16.04
MAINTEINER user@email.com
RUN apt-get update && apt-get install -y apache2 && apt-get clean
```

OBS: A flag `-y` serve para dar o yes nas perguntas na hora da instalação dos pacotes no ubuntu. O `apt-get clean` serve para limpar todos os pacotes que ele vai utilizar durante a instalação.

## Build

Para executar a construção da sua imagem baseada no `DockerFile`, basta executar o comando abaixo.

```
$ docker build -t viniciusgalvao/apache:1.0 .

--- ou ---

$ docker build -t viniciusgalvao/apache:1.0 dockerfile_path
```

OBS: Se o DockerFile estiver na pasta usa-se o `.` para referenciar o `Dockerfile` do diretório. A flag `-t`, serve para taggear **"dar nome"** a nossa imagem gerada.
