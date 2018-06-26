# Condicionais

# IF

a = 3
b = 5

if a < b
  puts "a é menor"
else
  puts "a é maior"
end

# UNLESS
# Quando estamos negando alguma coisa

unless a < b
  puts "b é menor"
else
  puts "a é menor"
end

# CASE

case a
when 3
  puts "é três"
when 4
  puts "é quatro"
end

# Operador Ternário

(a == 3) ? (puts "é igual a três") : (puts "é diferente!")
