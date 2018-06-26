# Ruby

## stdin - standard in / entrada padrão

É muito utilizado para criação de scripts para automações de tarefas.  

Para utilizar a entrada padrão, é utilizado o metódo `gets`. Ele é responsável por pegar a string daquilo que foi digitado.

**exemplo:**

```
puts "Hello! type your name: "
name = gets
puts "Welcome #{name}"
```

## chomp

Responsável por remover as linhas extras `\n` que vem no gets puro

**exemplo:**

```
puts "Hello, type your name: "
name = gets.chomp
puts "Inspect: #{name.inspect}"
puts "Welcome, #{name}"
```

## Coerção / Casting

Transforma um tipo de dado para outro.

**exemplo:**

```
puts "Hello, type your name: "
name = gets.chomp
puts "Hi #{name}, how are old you? "
age = gets.to_i # casting gets.to_f
puts "Welcome #{name}, You have #{age} year(s)"
```

## operadores lógicos

### if

```
a = 3
b = 5

if a < b
  puts "a é menor"
else
  puts "a é maior"
end
```

### unless

É uma negativa

```
a = 3
b = 5

unless a < b
  puts "b é menor"
else
  puts "a é menor"
end
```
### case

```
a = 3
b = 5

case a
  when 3
    puts "é três"
  when 4
    puts "é quatro"
  end
```

## operador ternário

```
a = 3
b = 5

(a == 3) ? (puts "é igual a três") : (puts "é diferente!")
```

## operadores aritméticos

```
+ = soma | 1 + 3
- = subtração | 5 - 3
* = multiplicação | 2 * 2
/ = divisão | 4 / 4
** = potência | 2**3 = dois elevado a 3
% = mod
```

## estruturas de repetição

### while

Enquanto condicional for verdadeira

```
a = 3

while a < 10
  a += 1
  puts a
end
```

### until

É a mesma coisa do `while` com a diferença na leitura. **Até que** condicional seja atingida.

```
a = 3

until a == 0
  a -= 1
  puts a
end
```

### for

Repetição.

```
for i in 0..5
  puts i
end
```

### each

Itera sob todos os valores de um vetor.

```
[1,2,3,4,5].each do |j|
  puts j
end
```

## vetores / arrays

Espaços de memória reservados de forma sequencial e sob um mesmo nome.

```
v = [15,24,34,84]
puts v.class
puts v.inspect
puts v
puts v[2]
```

### declaração

```
a = Array.new
a.push(36) | associando um novo valor ao array
a.push(556) | associando um novo valor ao array
a.push("xxx", 1.20, {name:'John Doe', age:26})
puts a.inspect

ou

a = %w{36 556 xxx 1.20} | %w = word
puts a.inspect
```

### argument vector

O `ARGV` é uma variável que o ruby entrega no ambiente dele, que ele coleta as palavras que vem depois do nome do arquivo ruby. Muito útil para criação de scripts ruby.

```
x = ARGV
puts x.inspect
puts x
```

No terminal executar

```
$ ruby script_name.rb joao e maria
```

O resultado da execução

```
$ ["joao", "e", "maria"]
$ joao
$ e
$ maria
```

## hashes

É uma espécie de vetor, que ao invés de ter índices enumerados, os índices podem ser definidos.

```
h1 = {"a" => 123, "b" => 456}
h2 = {:a => 123, :b => 456}
h3 = {a:123, b:456}

puts h1[:a]
puts h3["b"]
```

### hash merge

Para juntar duas hashes em uma só

```
h1 = {"a" => 123, "b" => 456}
h.merge!({ "c" => 789 })
```

OBS: A `!` no metódo `merge!` no ruby é indicativo de que é um metódo que modifica o elemento que está rodando o metódo em questão.

## strings

### interpolação

Misturar uma string com variáveis.

```
nomes = %w{joao maria jose}
nomes.each do |nome|
  puts "Olá #{nome}"
end
```

### concatenação

A concatenação pode ser feita utilizando o `+` ou o `<<`.

```
"Ruby" + "on" + "Rails"
"Ruby" << "on" << "Rails"
```

A diferença entre o `+` e o `<<`

```
+ gera um novo objeto toda vez que o texto é alterado
<< altera o objeto existente sem precisar gerar um novo. MAIS PERFORMÁTICO
```


### substituição

```
texto "Ruby on Rails"
puts texto.gsub("on Rails", "on RAILS") | Alterado apenas para impressão
puts texto
```

Para garantir a alteração definitiva, devemos utilizar a `!` como mostrado no exemplo de `hash.merge!`

```
puts texto.gsub!("on Rails", "on RAILS") | A ! garante a alteração definitiva de valor no elemento que chamou o .gsub!
puts texto
```

### strings x symbols

O símbolo é uma espécie de string imutável. `"hello"` x `:hello`, muito utilizado para identificar algo.

```
h = { :a => 123, :b => "Joao" }
h = { a: 123, b: "Joao" }
```

## métodos

São as ações dos objetos.

```
def method_name
  puts "------------------------"
  puts "|---------MENU----------|
  puts "------------------------"
end

method_name
```

Com parâmetros

```
def method_name_with_param(value)
  puts "#{value}#{value}#{value}#{value}#{value}#{value}"
  puts "|---MENU---|"
  puts "#{value}#{value}#{value}#{value}#{value}#{value}"
end

method_name_with_param
```
## parênteses

O uso de parênteses não é obrigatório no ruby

```
de soma(a, b)
  a + b
end

soma(1, 4)
soma 3, 10
```
## constantes

Uma constante foi criada para usar menos recurso computacional e que não deve ter seu valor alterado e ficara disponível em todo o projeto. Como por exemplo a constante `Math.PI`. O nome da constante deve ser escrita toda em maiúscula.

```
ror = "Ruby on Rails" # variável
ROR = "Ruby on Rails" # constante
```

## split / join

O split transforma a string em um vetor separando pelo caractere passado no metódo

```
texto = 'joao,carlos,albuquerque,almeida'
x = texto.split(',')
puts texto
puts x.inspect
```

O join pega um vetor e transforma um texto e unifica em uma string.

```
v = %w{tico teco taco ball}
texto v.join(",")
puts texto
```

## eval

Interpreta uma string como código ruby.

```
puts "Digite o que deseja fazer:"
str = gets.chomp

puts str.inspect
puts str.class

x = eval(str)
puts x
```

## instance_of

```
a = 1234
puts a.class

if a.instance_of?(Integer)
  puts "É um número"
end
```

## ranges

Com todos os números da iteração

```
# vai executar a interação de 1 ~ 10
(1..10).each do |i|
  puts i
end
```

Com `...` ele itera até o penúltimo número

```
# vai executar a interação de 1 ~ 9
(1...10).each do |j|
 puts i
end
```

## classes

Acesse todo o conteúdo [aqui](./parte_6.8/README.md)

## classes / heranças

Acesse todo o conteúdo [aqui](./parte_7.8/README.md)

## módulos / mixins

Acesse todo o conteúdo [aqui](./parte_8.8/README.md)
