puts "---SPLIT---"
texto = 'joao,carlos,albuquerque,almeida'
x = texto.split(',')
puts texto
puts x.inspect

puts "---JOIN---"
v = %w{tico teco taco ball}
texto = v.join ","
puts texto
