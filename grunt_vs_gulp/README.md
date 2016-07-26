# Grunt vs Gulp - Rodrigo Branas

Grunt e Gulp são ferramentas para **automatizar tarefas** utilizando **JavaScript** e executam na plataforma **NodeJs**. Além disso, são extremamente extensíveis e funcionam por meio de **plugins**. 

## Forma de Utilizar

#### Grunt ####

Trabalha com configuração, o famoso **configuration over code**. Para montar seu workflow, seu build você vai criar um aquivo que você vai configurar plugin a plugin para dizer o que ele deve fazer. Por meio dessas configurações o grunt vai ler uma a uma e vai executar sequencialmente.

#### Gulp ####

No gulp tasks são definidas e podem fazer qualquer coisa. Em outras palavras no gulp você vai codificar.

## Velocidade 

#### Grunt ####

O Grunt executa as tarefas em modo sequencial.

#### Gulp ####

O Gulp **executa as tarefas em paralelo**.