# Gulp

## Processo de Instalação 

Para instalar a ferramenta, basta digitar conforme o comando abaixo:

```
npm install -g gulp_cli
npm install gulp --save-dev
```

## Configuração

Para iniciar a configuração, deve ser criado um arquivo chamado `gulpfile.js`.

```
var gulp = require('gulp');

gulp.task('uglify', function () {
	// local para o seu código da tarefa padrão aqui
});

// pare realizar as tarefas em modo sequencial.
gulp.task('default', ['jshint']);
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

##### Instalando Plugins #####

No terminal:

```
npm install jshint gulp-jshint --save-dev
npm install gulp-uglify --save-dev
npm install gulp-clean --save-dev
```

No gulpfile.js:

```
var gulp 	= require('gulp');
var jshint 	= require('gulp-jshint');
var clean   = require('gulp-clean');
var uglify  = require('gulp-uglify');

gulp.task('clean', function () {
	return gulp.src('dist/')
		.pipe(clean());
});

gulp.task('jshint', function () {
	gulp.src('js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default')); //readable stream
});

gulp.task('uglify', ['clean'], function () {
	return gulp.src([
			'lib/ui/ui.js',
			'lib/serialGenerator/serialGenerator.js',
			'js/**/*.js'
		])
		.pipe(uglify())
		.pipe(concat('all.min.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['jshint', uglify]);
```

Para realizar as tarefas de forma síncrona, basta remover o `return` de dentro das tasks.

Para rodar as tarefas em sequência:

```
gulp.task('default', function () {
	runSequence('clean', ['jshint', 'uglify', 'htmlmin', 'cssmin']); // deve ser importado: var runSequence = require('run-sequence');
})
```

No exemplo mostrado acima, o `clean` é chamado antes de rodar a sequência em paralelo. E o `runSequence` deve ser instalado via npm `npm install --save-dev run-sequence` e invocado através do `var runSequence = require('run-sequence')`.