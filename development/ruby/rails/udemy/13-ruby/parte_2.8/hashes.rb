h1 = {"a" => 123, "b" => 456}
h2 = {:a => 123, :b => 456}
h3 = {a: 123, b: 456}

puts h1.inspect
puts h2.inspect
puts h3.inspect
puts h3[:b]
puts h1["a"]

h1.merge!({ "c" => 789 })
puts h1
