# DockerFile

O dockerfile é um arquivo cheio de instruções (passo-a-passo) para a criação da imagem do container.

Antes de mais nada, só pode existir um dockerfile por diretório. Para iniciar, um arquivo chamado `Dockerfile` deve ser criado.

## Instruções

```
FROM image[:tag] # A partir de qual imagem estamos no baseando
RUN command # Basicamente o que escrevemos em um script bash
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

## Build

Para executar a construção da sua imagem baseada no `DockerFile`, basta executar o comando abaixo.

```
$ docker build -t fulano/apache:1.0 .

--- ou ---

$ docker build -t fulano/apache:1.0 -f dockerfile_path
```

OBS: O `.` representa o diretório local, que significa o contexto para construção da imagem. A flag `-t`, serve para taggear **"dar nome"** a nossa imagem gerada.
