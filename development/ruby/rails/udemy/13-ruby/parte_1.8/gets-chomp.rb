# gets, \n, chomp

puts "Hello, type your name: "
name = gets.chomp
puts "Hi #{name}, how are old you? "
age = gets.to_i # casting gets.to_f
puts "Welcome #{name}, You have #{age} year(s)"
