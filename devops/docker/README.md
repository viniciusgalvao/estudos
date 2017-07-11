# Docker

O Docker é um plataforma (aberta) que permite que você crie, rode e faça deploy de containers. De maneira simples, um container é o empacotamento da sua aplicação mais as dependências dela.

## Sobre

- ***Docker Client:*** isto é o que está sendo executado em nossa máquina. É o binário do Docker que estaremos interagindo sempre que abrirmos um terminal e executarmos $ docker pull ou $ docker run. Ele se conecta ao Docker daemon que faz todo o trabalho pesado, seja no mesmo host (no caso do Linux) ou remotamente (no nosso caso, interagindo com a nossa VirtualBox VM).

- ***Docker Daemon:*** isso é o que faz o trabalho pesado de construção, execução e distribuição de seus containers Docker.

- ***Docker Images:*** imagens do Docker são as "blueprints" para nossas aplicações. Mantendo a analogia dos containers/peças de Lego, eles são nossas "plantas" (como em arquitetura, não biologia) para realmente construir um exemplo real e funcional. Uma imagem pode ser um sistema operacional como o Ubuntu, mas também pode ser um Ubuntu com o seu aplicativo web e todos os seus pacotes necessários instalados.

- ***Docker Container:*** containers são criados a partir das imagens do Docker, e eles são as instâncias reais de nossos containers / peças de Lego. Eles podem ser iniciados, executados, parados, deletados, e movidos.

- ***Docker Hub (Registry):*** o Docker Registry é um registro hospedado em um servidor que pode conter imagens do Docker. Docker (a empresa) oferece um Docker Registry público chamado de Docker Hub que vamos utilizar neste tutorial para baixar algumas imagens, mas eles oferecem todo o sistema open-source para que pessoas possam ter seus próprios servidores e armazenar imagens privadas.

## DICAS

- `crtl + p + q`: sai do container e mantém ele rodando.
