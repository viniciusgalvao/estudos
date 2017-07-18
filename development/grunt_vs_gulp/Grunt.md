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

### Instalando Plugins ###

Neste exemplo iremos instalar o `jshint, concat, uglify, cssmin, htmlmin, clean e copy`.

No terminal:

```
npm install grunt-contrib-jshint --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-cssmin --save-dev
npm install grunt-contrib-htmlmin --save-dev
npm install grunt-contrib-clean --save-dev
npm install grunt-contrib-copy --save-dev
```

No Gruntfile.js:

```
module.exports = function (grunt) {
	
	grunt.initConfig({

		// configurando o clean | Limpando os arquivos intermediários
		clean: {
			temp: ['dist/js/libs.min.js', 'dist/js/scripts.min.js', 'dist/js/scripts.js'],
			all: ['dist/']
		},

		// configurando jshint | Verifica Qualidade do Código
		jshint: {
			dist: {
				src: ['js/**/*.js'] // todos os arquivos js devem ser validado dentro da pasta js e sub-pastas.
			}
		},
		
		// configurando o concat | Concatenação do Código
		concat: {
			scripts: {
				src: [
					'js/**/*.js'
				], // source
				dest: 'dist/js/scripts.js' // destino arquivo gerado
			},
			libs: { // para concatenar bibliotecas
				src: [
					'lib/angular/angular.min.js',
					'lib/angular/angular-route.js',
					'lib/angular/angular-messages.js',
					'lib/angular/angular-locale_pt-br.js',
					'lib/ui/ui.js',
					'lib/serialGenerator/serialGenerator.js'
				],
				dest: 'dist/js/libs.min.js' // destino arquivo gerado
			},
			all: {
				src: ['dist/js/libs.min.js', 'dist/js/scripts.min.js'],
				dest: 'dist/js/all.min.js'
			}
		},

		// configurando uglify | Minificação do Código
		uglify: {
			options: {
				mangle: false
			},
	        scripts: {
	            src: ['dist/js/scripts.js'],
	            dest: 'dist/js/scripts.min.js'
	        }
	    },

		// configurando o cssmin | Minificação do Css
		cssmin: {
			all: {
				src: [
					'lib/bootstrap/bootstrap.css',
					'css/**/*.css'
				],
				dest: 'dist/css/styles.min.css'
			}
		},

		// configurando o htmlmin | Minificação de Html
		htmlmin: {
			options: { // opcções da minificação
				removeComments: true,
				collapseWhitespace: true
			},
			views: {
				expand: true, // serve para definir os comandos abaixo
				cwd: 'view/', // diretório
				src: ['*.html'],
				dest: 'dist/view'
			}
		},

		copy: { // copiar arquivos entre diretorios
			all: {
				src: 'index-prod.html',
				dest: 'dist/index.html'
			}
		}

	});

	// carregando as tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// registrando as tasks
	grunt.registerTask('prod', ['clean:all','jshint', 'concat:scripts', 'uglify' ,'concat:libs', 'concat:all', 'cssmin', 'htmlmin', 'copy', 'clean:temp']);
};
```