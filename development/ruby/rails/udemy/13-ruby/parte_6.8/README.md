# Classe

Uma classe instanciada é um objeto.

```
class Person
  def hello_world
    puts "Hello, World!!"
  end
end
```

## require_relative

Importa o arquivo que se encontra na pasta relativa ao script que está chamando.

```
require_relative 'person.rb' # O script deve se encontrar na mesma pasta do script que está chamando.

p = Person.new
p.hello_world
```

## variáveis de instância

Uma variável de instância é contém um `@`

```
class Person
  def initialize(name, email, phone)
    @name = name
    @email = email
    @phone = phone
  end
end
```

## initialize

É o construtor da classe
