a = [1, 'cat', 3.14]  # array com três elementos

# acessando o primeiro elemento the first element
a[1]

# alterando o terceiro elemento
a[2] = nil

# imprimindo a matriz

p a

# -------------------- #

# criando array de uma forma diferente usando o %w
a = [ 'ant', 'bee', 'cat', 'dog', 'elk' ]
# gerando o mesmo array de cima de uma forma mais simplificada utilizando o %w
a = %w{ ant bee cat dog elk }

# formas de inicializar uma array
array_a = []
array_a.push(100)

array_b = Array.new
array_b.push(300)

array_c = %w{curso de ruby on rails}

# .eql?(value) = equals | .each | .size()
if array_a.size().eql?(1)
	puts "array_a tem uma informação"
end

# EACH => |var| << as barras é um pipe onde será associado o valor de cada elemento a uma váriabel entre as barras, como exemplo abaixo.
array_a.each do |elm|
	puts elm
end
