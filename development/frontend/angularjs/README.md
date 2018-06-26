# AngularJS - Rodrigo Branas

Foi falado sobre a história do framework, seus objetivos, como está o interesse do mercado, quem está utilizando e quais são as principais razões para utilizar.

## Usando Diretivas Pt.1

Foi falado sobre a utilização das diretivas ngApp, ngController, ngBind, ngRepeat, ngModel e ngClick.

##### ngBind #####
Recebimento de informações do $scope.

Sintaxe: `ng-bind="object"`

##### ngModel #####
Atribuição de informações para o $scope.

Sintaxe: `ng-model="model"`

## Usando Diretivas Pt.2

Continuaçãosobre a utilização de diretivas, abordando em detalhes: ngDisabled, ngOptions (utilizando for, as e group by), ngClass, ngStyle, ngShow, ngHide, ngIf e ngInclude.

##### ngDisabled #####
Desabilitando um elemento dinamicamente.
Sintaxe: `ng-disabled="expression"`

##### ngOptions #####
Renderiza as opções de um select.

Sintaxe: `ng-options="object in array"`

Expressões que podem ser atribuídas a sintaxe:
```
- model.attribute as model.attribute
- group by model.attribute
- order by model.attribute
```

Exemplo: `ng-options="expression for object in array"`

**Obs:** O `group by` fica entre a **expressão** e o **for**.

##### ngClass e ngStyle #####
Aplicando classes CSS e estilos dinamicamente.

`ng-class="{classname: expression, anotherclassename: expression}"`
`ng-style="{'css-attribute': model.attribute}"`

##### ngShow, ngHide e ngIf #####
Responsável por exibir elementos de forma condicionalmente.

O `ng-show` e o `ng-hide` trabalham apenas na visibilidade de um determinado elemento. Já o `ng-if` interage com a DOM inserindo ou removendo o elemento condicionalmente.

**Dica:** Utilizar o `ng-if` para uma abertura mais performática, em caso de processos mais leve, utilizar o `ng-show` ou `ng-hide`.

##### ngInclude #####
Responsável por incluir conteúdo dinamicamente.

Sintaxe: `ng-include="'file.html'"`

## Validando Formulários
Nessa aula foi falado sobre validação de formulários utilizando as diretivas ngRequired, ngMinlength, ngMaxlength e ngPattern. Além disso, vamos conhecer em detalhes $valid, $invalid, $pristine, $dirty, $error e também o uso da função $setPristine.

##### ngRequired #####
Responsável por definir um determinado campo como obrigatório
Sintaxe: `ng-required="true"`

##### ngMinLength e ngMaxLength #####
Sintaxe: `ng-minlength=""` | `ng-maxlength=""`

##### ngPattern #####
Responsável por definir uma **RegExp** para validar o campo.
Sintaxe: `ng-pattern="/regexp/"`

##### ngMessages #####
Sintaxe: `ng-messages=""`

Exemplo:

```
<div ng-messages="formName.fieldName.$error">
	<div ng-message="required"></div>
	<div ng-message="minlength"></div>
</div>
```

Obs: Nescessita do módulo `angular-messages.js`

**$valid e $invalid**

O `$valid e $invalid` são responsáveis por consultar a validade de um campo ou formulário.

Exemplo de uso: `field_or_form_name.$valid` ou `field_or_form_name.$invalid`.

**$pristine e $dirty**
São responsáveis por verificar se um formulário ou campo já foi utilizado alguma vez.

- `$pristine` indica se o formulário ou campo foram intocados.
- `$dirty` idica se o formulário ou campo já foram tocados, e uma vez $dirty sempre $dirty.
- `formName.$setPristine()` para reiniciar o estado do campo ou formulário para intocado.

**$error**

Responsável por consultar os erros de um campo ou formulário.

- `form_or_field_name.$error.required`
- `form_or_field_name.$error.minlength`
- `form_or_field_name.$error.maxlength`
- `form_or_field_name.$error.pattern`

## Aplicando Filtros

Transformam o resultado de uma expressão, realizando operações como formatação de data, a conversão de moeda e a ordenação de Array.

o **|** é chamado de pipe, onde é reponsável por informar ao angular que um filtro será adicionado.

Para trabalhar os filtros no controller, deve ser injetada a dependência $filter.
Sintaxe: `$filter('filterName')(value)` ou `filternameFilter(value)`

##### uppercase e lowercase #####
Sintaxe: `{{model.attribute | uppercase_or_lowercase}}`. 

##### date #####
Sintaxe: `{{model.attribute | data}}` ou `{{model.date | date: 'dd/MM/yyyy HH:mm'}}`.

##### filter #####

Filtra um array com base em um critério e pode ser aplicado em qualquer expressão.

Sintaxe: `ng-repeat="model in records | filter:''"`

Variação de uso:
```
- filter:'value'
- filter:modelCritery
- filter:{field_name: value}
```

##### orderBy #####

Ordena um array com base em um critério e pode ser aplicado em qualquer expressão.

Sintaxe: `ng-repeat="model in records | orderBy:'field_name'"`

Variação de uso:
```
- orderBy:'field_name'
- orderBy:'+field_name' ou orderBy:'-field_name'
- orderBy:'field_name':true_or_false esse parâmetro é chamado de reverse, por padrão ele é FALSE
```

##### currency #####

Converte um número para moeda e pode ser aplicado em qualquer expressão.

Sintaxe: `(model.value | currency)` 

##### number #####

Formata um número

Sintaxe: `model.value | number:float_or_nothing` 

##### limitTo #####

Limita um array ou uma string.

Sintaxe: `limitTo: value`


## Integrando com o back-end por AJAX

Foi falado sobre como integrar com o back-end por AJAX, utilizando o serviço $http.

##### $http #####

É responsável por realizar as requisições utilizando XMLHttpRequest ou via JSONP.

```
- get(url, config)
- post(url, data, config)
- put(url, data, config)
- delete(url, config)
- head(url, config)
- jsonp(url, config)
```

##### JSONP #####

Estratégia utilizada para burlar o mecanismo de proteção dos navegadores em relação ao acesso de recursos externos.

##### CORS #####

Permissão para acessar recursos externos por meio de cabeçalhos HTTP adicionais.

```
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
```

## Organização do Projeto

```
- Stereotyped Style
- Specific Style
- Domain Style
```

## Criando Serviços

Um serviço é um singleton, ou seja, um objeto único, criada na inicialização da aplicação e que está disponível para ser injetado em outros componentes.

##### factory #####

Função fábrica.

```
// Factory Function
angular.module("appName").factory('factoryName', function () {
	var _privateMethod = function ($http) {
		return $http.get("url");
	}

	var _anotherPrivateMethod = function (data) {
		return $http.post("url", data);
	}

	return {
		methodName: _privateMethod,
		anotherMethodName: _anotherPrivateMethod
	}
});
```

##### service #####

Funcção construtora.

```
// Constructor Function
angular.module("appName").service("serviceName", function () {
	this.methodName = function () {
		return null;
	}
});
```


##### value #####

```
angular.module("appName").value("valueName", {
	object: value,
	object2: value2
});
```

##### constant #####

Diferença para o *value* é que ele pode ser injetado no tipo de serviço **PROVIDER**.

```
angular.module("appName").constant("valueName", {
	object: value,
	object2: value2
});
```


##### provider #####

Apenas serviços desse tipo, podem ser configurados externamente.

Exemplo Básico:

```
angular.module("appName").provider("providerName", function () {
	this.$get = function () {
		return {
			generate: function () {
				var serial = "";

				while (serial.length < 20) {
					serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
				}

				return serial;
			}
		};
	};
})
```

**Config**

```
angular.module("appName").config(function (pvdNameProvider) {
	console.log(pvdNameProvider.functionName());
});
```

## Criando Filtros 

Transformam o resultado de uma expressão, realizando operações como formatação de data, a conversão de moeda e a ordenação de Array.

Sintaxe:
```
angular.module('moduleName').filter('filterName', function () {
	
});
```

O filtro retorna a função que recebe do input.

Exemplo:
```
angular.module('moduleName').filter('filterName', function () {
	return function (input) {
		// código do filtro, responsável por transformar o input em output.
		return output;
	}
});
```

## 10_Criando_Diretivas_Parte_1

Sintaxe:
```
angular.module('moduleName').directive('directiveName', function () {
	return {
		// Propriedades da Diretiva.
	};
});

Retorna um objeto conhecido como: directive definition object.
```

##### template e templateUrl #####

Especifica o template ou a url do template que deverá ser incluído dentro do elemento que estiver utilizando a diretiva.

Exemplo `template`: 

```
angular.module('moduleName').directive('directiveName', function (){
	return {
		template: '<div>something</div>'
	}
});
```

Uso: `<element directive-name></element>`

Exemplo `templateUrl`: 

```
angular.module('moduleName').directive('directiveName', function () {
	return {
		templateUrl: 'filename.html'
	}
});
```

##### replace #####

Substitui o elemento pelo template da diretiva. Em resumo ele remove o corpo do elemento com a diretiva que fez a chamada e coloca apenas o template chamado.

Exemplo:
```
angular.module('moduleName').directive('directiveName', function () {
	return {
		template: 'filename.html',
		replace: true
	}
});
```

##### restrict #####

Restringe o modo de utilização da diretiva ao atributo, elemento, classe e comentário, ou ainda uma combinação deles. Caso não seja definido, o padrão é que a diretiva seja atribuida pelo atributo.

** Tipos de Restrição **
```
A - Diretiva restrita ao atributo do elemento | <element directive-name></element>
E - Diretiva restrita ao elemento | <directive-name></directive-name>
C - Diretiva restrita a classe do elemento | <element class="directive-name"></element> (MENOS USADA)
M - Diretiva restrita ao comentário do elemento | exemplo abaixo:
<!-- directive: ui-alert-->
<element></element>
```

Exemplo:
```
angular.module('moduleName').directive('directiveName', function () {
	return {
		template: 'filename.html',
		replace: true,
		restrict: 'A'
	}
});
```

##### scope #####

Por padrão, uma diretiva compartilha o mesmo scope de onde é utilizada. Para aumentar seu potêncial de reuso, podemos isolar seu scope, passando os dados nescessário por parâmetro.

Para saber em que escopo onde foi aplicada basta utilizar a expressão: `{{$id}}

```
angular.module('moduleName').directive('directiveName', function () {
	return {
		template: 'filename.html',
		replace: true,
		restrict: 'E',
		scope: {
			atribute: "@attribute" OR "@" // nesse caso o nome deve ser igual.
			paramInternal3: "=varname" or "=" // nesse caso o nome deve ser igual.
		}
	}
});

<directive-name atribute="content" paramInternal3="varname"></directive-name>
```
```
- O @ vincula/mapeia o valor do atributo diretamente a uma propriedade do scope da diretiva.
- O = cria um vínculo bi-direcional entre uma propriedade do scope do template a uma propriedade do scope da diretiva. Em outras palavras acontece o two-way data binding.
```

##### transclude #####

Encapsula elementos dentro de uma diretiva, criando um scope não isolado. Ele herda todas as propriedades do scope externo apesar de ser um novo scope.

Exemplo:
```
angular.module('moduleName').directive('directiveName', function () {
	return {
		template: 'filename.html',
		replace: true,
		restrict: 'E',
		scope: {
			atribute: "@attribute" OR "@" // nesse caso o nome deve ser igual.
		},
		transclude: true
	}
});

<directive-name atribute="content">
	conteudo que vai ser passado para o scope da diretiva quando o transclude é true
</directive-name>

<directive-template>
	<div>
		{{atrtibute}}
	</div>
	<div ng-transclude>
		
	</div>
</directive-template>
```

## 11_Criando_Diretivas_Parte_2

#### link #####

Executada depois do template ter sido compilado, podemos utilizá-la para interagir com a DOM, tratando eventos ou mesmo para definir o comportamento associado com a lógica da diretiva. 

Sintaxe: 
```
angular.module('moduleName').directive('uiDate', function () {
	return {
		link: function (scope, element, attrs) {
			// attrs = attributes of element...
			// element = all element data.
		}
	}
})
```

##### require #####

Estabelece um vínculo com outra diretiva, interagindo por meio do controller, que é um dos parâmetros da função link.

Sintaxe:
```
angular.module('moduleName').directive('uiDate', function () {
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ctrl) {
			element.bind("keyup", function () {
				ctrl.$setViewValue(ctrl.$viewValue + "!");
				ctrl.$render();
			});
		}
	}
})
```

O parâmetro `ctrl` é o controlador da diretiva especificada no `require`.

## 12_Criando_Diretivas_Parte_3

##### controller #####

Permite a definição de uma API que pode ser compartilhada com outras diretivas.

Sintaxe / Example:

```
angular.module('moduleName').directive('uiAccordions', function (){
	return {
		controller: function ($scope, $element, $attrs) {
			var accordions = [];

			this.registerAccordion = function (accordion) {
				accordions.push(accordion);
			}	

			this.closeAll = function () {
				accordions.forEach(function (accordion) {
					accordion.isOpened = false;
				});
			}
		}
	};
});
angular.module('moduleName').directive('uiAccordion', function () {
	return {
		templateUrl: "view/accordion.html",
		transclude: true,
		scope: {
			title: "@"
		},
		require: "^uiAccordions",
		link: function (scope, element, attrs, ctrl ) {
			ctrl.registerAccordion(scope)
			scope.open = function () {
				ctrl.closeAll();
				scope.isOpened=!scope.isOpened;
			}
		}
	}; 
});
```

acordion.html:

```
<div class="ui-accordion-title" ng-click="open()">{{title}}</div>
<div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>
```

Uso:

```
<ui-accordions>
	<ui-accordion title="Accordion 1">
		Content 1
	</ui-accordion>

	<ui-accordion title="Accordion 2">
		Content 2
	</ui-accordion>
</ui-accordions>			
```

O `^` no **require** é utilizado quando não se encontra no mesmo elemento onde a diretiva foi chamada. Nesse caso está no elemento pai

**Dica:** Ler sobre o serviço $compile

## 13_Modularizando_o_projeto

Exemplo Módulo de Serviço:

```
angular.module("serialGenerator", []);
angular.module("serialGenerator").provider("serialGenerator", function () {
	var _length = 10;

	this.getLength = function () {
		return _length;
	}

	this.setLength = function (length) {
		_length = length;
	}

	this.$get = function () {
		return {
			generate: function () {
				var serial = "";

				while (serial.length < _length) {
					serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
				}

				return serial;
			}
		};
	};
});

serialGenerator.js
```

Uso: `angular.module('moduleName', ['serialGenerator']);`

Exemplo Diretiva (Componente Visual):

```
angular.module('ui', []);
angular.module('ui').directive('uiAccordions', function (){
	return {
		controller: function ($scope, $element, $attrs) {
			var accordions = [];

			this.registerAccordion = function (accordion) {
				accordions.push(accordion);
			}	

			this.closeAll = function () {
				accordions.forEach(function (accordion) {
					accordion.isOpened = false;
				});
			}
		}
	};
});
angular.module('ui').directive('uiAccordion', function () {
	return {
		templateUrl: "view/accordion.html",
		transclude: true,
		scope: {
			title: "@"
		},
		require: "^uiAccordions",
		link: function (scope, element, attrs, ctrl ) {
			ctrl.registerAccordion(scope)
			scope.open = function () {
				ctrl.closeAll();
				scope.isOpened=!scope.isOpened;
			}
		}
	}; 
});

ui.js
```

Uso: `angular.module('moduleName', ['ui']);`

##### $templateCache #####

Na primeira vez que um template é carregado, ele é **armazenado em cache** e acessível por meio do serviço $templateCache.

Acidionando o template diretamente no **$templateCache**:

```
$templateCache.put("nomeDoTemplate", "<p>Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>");
```

Exemplo:

```
angular.module('ui', []);

// bloco de inicialização...
angular.module('ui').run(function ($templateCache) {
	$templateCache.put("view/accordion.html", '<div class="ui-accordion-title" ng-click="open()">{{title}}</div><div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>');
});

angular.module('ui').directive('uiAccordions', function (){
	return {
		controller: function ($scope, $element, $attrs) {
			var accordions = [];

			this.registerAccordion = function (accordion) {
				accordions.push(accordion);
			}	

			this.closeAll = function () {
				accordions.forEach(function (accordion) {
					accordion.isOpened = false;
				});
			}
		}
	};
});
angular.module('ui').directive('uiAccordion', function () {
	return {
		templateUrl: "view/accordion.html",
		transclude: true,
		scope: {
			title: "@"
		},
		require: "^uiAccordions",
		link: function (scope, element, attrs, ctrl ) {
			ctrl.registerAccordion(scope)
			scope.open = function () {
				ctrl.closeAll();
				scope.isOpened=!scope.isOpened;
			}
		}
	}; 
});
```

OBS: Realizar leitura na documentação do angular sobre o serviço **$templateCache**.

## 14_Single_Page_Application

É uma aplicação que realiza suas transições dentro de uma mesma página, carregando seus componentes de uma forma dinâmica utilizando ajax.

##### ngRoute #####

Módulo do framework que fornece serviços para realizar o roteamento de páginas.

** $routeProvider **

Podemos configurar o serviço de roteamento por meio do **$routeProvider**, configurando cada rota específica e também uma rota padrão, caso nenhuma seja encontrada.

```
 - when (path, route)
 - otherwise (path)
```

Para configurar as rotas:

```
app.config(function ($routeProvider) {

});
```

**Route Object**

Objeto de configuração de cada rota, permite configurar diversos aspectos do roteamento.

Sintaxe:

```
angular.module("moduleName").config(function ($routeProvider) {
	$routeProvider.when("/page", {});
});
```

O parâmetro `{}` é o **Route Object**.

Exemplo:

```
angumar.module("moduleName").config(function ($routeProvider) {
	$routeProvider.when("/page", {
		templateUrl: "foder/filename.html",
		controller: "controllerCtrl",
		resolve: { // resolver depêncencias que sejam nescessárias.
			varname: function (serviceName) {
				return serviceName.methodName();
			}
		}
	});

	$routeProvider.when("/anotherpage/:id", {
		templateUrl: "foder/filename.html",
		controller: "controllerCtrl",
		resolve: { // resolver depêncencias que sejam nescessárias.
			varname: function (serviceName, $route) {
				return serviceName.methodName($route.current.params.id);
			}
		}
	});

	// se a rota da requisição não for encontrada pode ser definido no otherwise o redirecionamento para uma rota existente ou um template de erro padrão.
	$routerProvider.otherwise({redirectTo: '/page'});
});
```

Para ter acesso aos parâmetros na rota, basta utilizar o `$routeParams` que deve ser injetado. Caso queira pegar o parâmetro no `resolve:` do $routerProvider, basta injetar no método e utilizar `$route.current.params.paramName`.


** resolve: **

Serve para resolver pendências que sejam nescessárias.

Uso: 

```
angular.module("moduleName").controller("controllerName", function ($scope, varname) {
	$scope.varname = varname.data;
}
``

** ngView **

Diretiva utilizada para renderizar o template da rota acessada.

## 15_Interceptors

Um interceptor é um tipo de serviço que permite a **interceptação das requisições e respostas** do serviço $http.

Sintaxe:

```
angular.module('moduleName').factory('nomeInterceptorA', function ($q){
	return {
		request: function (config) {
			return config;
		},
		requestError: function (rejection) {
			return $q.reject(rejection);
		},
		response: function (response) {
			return response;
		},
		responseError: function (rejection) {
			return $q.reject(rejection);
		}
	};
});
```

##### Configurando o Interceptor #####

O serviço $http possui um **array de interceptors** que podem ser configurados na inicialização da aplicação.

Exemplo:

```
angular.module('moduleName').config(function ($httpProvider) {
	// para interagir com esse array interceptors realizando um push.
	$httpProvider.interceptors.push('nomeInterceptorA');
	$httpProvider.interceptors.push('nomeInterceptorB');
});
``` 

OBS: Realizar leitura na documentação sobre o **$q** pois ele é a implementação do angular de promises deferred.

##### $rootScope #####

Escopo global.

## 16_Aumentando_a_Performance_Parte_1

- Cuidado com **expressions** que utilizam funções complexas
- Desperdício de tempo com processamento de coisas desnecessárias
- Analisar se há degradação de performace com o filtro aplicado na view e aplicar diretamente através do controller.

##### One-Time Bind #####

Opte pelo one-time bind sempre que fizer sentido.

Sintaxe: {{::model.value}}

O `::` avisa ao angular para remover o watcher e não se preocupar mais com esse dado.

Só utilizar no caso em que os dados que não vão sofrer mudanças. Por exemplo, em uma lista de informações.

##### ng-options-model #####

Para mudar o comportamento padrão do **ng-model**.

Sintaxe: `ng-model-options=""`

Atributos:

```
 - updateOn: 'default', 'blur', 'keyUp'...
 - debounce: {default: 500, blur: 0}  // funciona como um timeout para a função ser executada no updateOn
```

Exemplo de Uso: `ng-model-options="{updateOn: 'default blur', debounce: {default: 500, blur:0}}"`

## 17_Aumentando_a_Performance_Parte_2

- Analise o impacto de aplicar **filtros** diretamente na view
- Pense bem antes de utilizar o `ng-if` ou `ng-show` 

Utilizar o `ng-if` em formulários maiores e páginados, por mais que tenha um custo de tempo de processamento maior, tem uma quantidade de whatchers menor. Já o `ng-show` tem um tempo de processamento menor porém uma quantidade maior de watchers. Pois quanto mais watchers mais a aplicação fica pesada.

##### Track By #####

Sempre definir quando utilizar o `ng-repeat` e o `ng-options`, ele permite uma repetição de dados em uma mesma lista.

Sintaxe: `track by $index` ou `track by model.uniq_value_field`

Exemplo:

```
<tr ng-repeat="dado in dados | filter:criterioDeBusca track by $index">
	<td>{{dado.nome}}</td>
</tr>

ou

<tr ng-repeat="dado in dados | filter:criterioDeBusca track by dado.id">
	<td>{{dado.nome}}</td>
</tr>
```

