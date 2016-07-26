# Grunt

## Processo de Instalação 

Para instalar a ferramenta, basta digitar conforme o comando abaixo:

```
npm install -g grunt_cli
npm install grunt --save-dev
```

## Configuração

Para iniciar a configuração, deve ser criado um arquivo chamado `Gruntfile.js`. Ele é composto primariamente por duas partes, conforme exemplo abaixo.

```
module.exports = function (grunt) {
	
	grunt.initConfig({

	});

	grunt.registerTask('default', []);
}
```

## Criando uma Distribuição Final

Workflow:

```
 - Limpar todos os arquivos deixados pelo processo da distribuição anterior
 - Verificar a qualidade
 - Concatenar os arquivos JS
 - Minificar todos os arquivos JS já concatenados em um arquivo único
 - Minificar os arquivos css
 - Minificar os arquivos html
 - Copiar recursos nescessários
 - Limpar arquivos intermediários
```

#### Instalando um Plugin ####

Neste exemplo iremos instalar o `jshint` e o `concat`.

No terminal:

```
npm install grunt-contrib-jshint --save-dev
npm install grunt-contrib-concat --save-dev
```

No Gruntfile.js:

```
module.exports = function (grunt) {
	grunt.initConfig({
		// configurando o jshint
		jshint: {
			dist: { // sub-tarefa pode ter qualquer nome.
				src: ['js/**/*.js'] // todos os arquivos js devem ser validado dentro da pasta js e sub-pastas.
			}
		},
		// configurando o concat | Concatenação do Código
		concat: {
			scripts: {
				src: [
					'js/**/*.js',
					'lib/ui/ui.js',
					'lib/serialGenerator/serialGenerator.js'
				], // source
				dest: 'dist/js/scripts.js' // destino arquivo gerado
			},
			libs: { // para concatenar bibliotecas
				src: [
					'lib/angular/angular.min.js',
					'lib/angular/angular-route.js',
					'lib/angular/angular-messages.js'
				],
				dest: 'dist/js/libs.min.js' // destino arquivo gerado
			},
			all: {
				src: ['dist/js/libs.min.js', 'dist/js/scripts.min.js'],
				dest: 'dist/js/all.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('prod', ['jshint', 'concat:scripts', 'concat:libs']);
};
```