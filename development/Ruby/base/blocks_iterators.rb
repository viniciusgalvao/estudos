# BLOCK
puts "-- BLOCKS ---"
puts ""

# yield funciona tipo um callback
def call_block
  puts "Start of method"
  yield
  yield
  puts "End of method"
end

call_block { puts "In the block..." }

def call_block
  yield("hello", 99)
end

call_block {|text, value| p text}


# ITERATOR
puts ""
puts "-- ITERATOR ---"
puts ""

animals = %w( ant beet cat dog elk )
animals.each {|animal| puts animal }

# example 2
[ 'cat', 'dog', 'horse' ].each {|name| print name, " "}

# example 3
3.upto(6) {|i| print i }

# example 4
('a'..'e').each {|char| print char }

# example 3
5.times { print "*" }
