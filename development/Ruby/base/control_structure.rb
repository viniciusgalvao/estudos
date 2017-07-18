# IF

count = 9

if count == 10
  puts "Count é igual a 10!"
elsif count < 10
  puts "Count é menor que 10!"
else
  puts "Count é maior que 10!"
end

# executando a ação quando a condicional for true
  if radiation > 3000
    puts "Danger, Will Robinson"
  end

    # simplified
    puts "Danger, Will Robinson" if count > 8

# WHILE

total = 1

while total < 10
  p "Total é: #{total}"
  total = total + 1
end

# Exemplo 2:
  square = 2
  while square < 1000
    square = square*square
  end

    # simplified
    square = 2
    square = square*square while square < 1000
