# Bower - Rodrigo Branas

Não precisa se preocupar com as **dependências** dos pacotes. Evita o tráfego e armazenamento desnecessário de pacotes no repositório.

## Comandos

##### Search #####

Sintaxe: `bower search <module>`

##### Info #####

Sintaxe: `bower info <module>`

##### Instalando Pacotes #####

Sintaxe: `bower install <name>#<target>`

Opções

```
--save (uso padrão)
--save-dev (uso para libs de teste)
--production (instala só dependências principais)
```

Exemplo: `bower install angular#1.5.8`

##### Instalando pacotes registrados no bower.json #####

Sintaxe: `bower install`

##### Desinstalando Pacotes #####

Sintaxe: `uninstall <name>`

Opções

```
--save (uso padrão)
--save-dev (uso para libs de teste)
```

##### Atualizando Pacotes #####

Listando pacotes instalados e suas atualizações

Sintaxe: `bower list

Atualização do Pacote

Sintaxe: `bower update <name>`

Sempre vai respeitar o que vai estar definido no bower.json, só atualiza dependendo da regra definida. 

**Regras para Atualizações de Versão**

```
- o ~ só permite atualizações no PATCH
- o ^ permite atualizações do MINOR e do PATCH
- o > aceita qualquer versão maior | Pega a última versão disponível
- o >= aceita qualquer versão maior ou igual
- o < aceita qualquer versão menor
- o <= aceita qualquer versão menor ou igual
- o latest aceita a última versão
```

Exemplos:

```
- 1.2.16 (apenas 1.2.16)
- ~1.2.16 (aceito a 1.2.28, não aceito a 1.4.5)
- ^1.2.16 (aceito a 1.4.5, não aceito a 2.0.0)
- >1.2.16 (aceito qualquer versão maior. Pega a última versão disponível)
- >=1.2.16 (aceito qualquer versão maior ou igual)
- <1.2.16 (aceito qualquer versão menor)
- <= 1.2.16 (aceito qualquer versão menor ou igual)
- latest (aceito a última versão)


Exemplo versionamento: `MAJOR.MINOR.PATCH` - `1.1.2`

## Modificando o Local de Armazenamento

É possível modificar o diretório onde os pacotes serão armazenados por meio do arquivo de configuração `.bowerrc`:

```
{
	"directory": "lib/"
}
```

Feito isso, os componentes não serão mais baixados no diretório `bower_components` e sim no `lib/`.