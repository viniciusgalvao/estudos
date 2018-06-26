puts "O que você deseja fazer:"
str = gets.chomp

str.inspect
str.class

x = eval(str)
puts x
