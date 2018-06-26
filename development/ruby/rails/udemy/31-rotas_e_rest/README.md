# Rotas e Rest

## Http - Verbos

```
GET
POST
PUT
PATCH
DELETE
```

## Rotas

#### Mapeapento

O `resource` gera 8 rotas para o funcionamento do CRUD.

```
resource :module_name_plural

------- exemplo -------

resource :customers
resource :people
```

Uma das formas de criar uma rota, é utilizando o verbo `get,post,put,patch,delete` e definindo seu path.

```
get 'controller_name/action'
post 'controller_name/action'

------- exemplo -------

get 'home/index'
post 'people/create'
put 'people/:id'
```

Podemos mapear a rota, como no exemplo abaixo:

```
get '/bemvindo' => 'home#index'
```

Criando exceções. No exemplo abaixo será criada todas as rotas para manipulação do recurso, menos a de `edição`.

```
resources :kinds, except: [:edit]

------ ou ------

resources :kinds, only: [:new, :create, :update, :delete]
```
