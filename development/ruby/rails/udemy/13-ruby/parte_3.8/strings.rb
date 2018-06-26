# interpolação
nomes = %w{Joao Maria Alcides}
nomes.each do |nome|
  puts "Olá #{nome}"
end

# concatenação
puts "Ruby" + " on" + " Rails"
puts "Ruby" << " on" << " Rails"

# substituição
texto = "Ruby" << " on" << " Rails " << nomes[0]
puts texto.gsub("Joao", "O melhor curso!")
puts texto

puts texto.gsub!("Joao", "O melhor curso!") # A ! garante a alteração definitiva de valor no elemento que chamou o .gsub!
puts texto

# strings x symbols
txt = "Srings Symbols"
puts txt.object_id
txt = txt + " Jr"
puts txt.object_id
txt = txt << " Rails"
puts txt.object_id

# symbols
h = {:a => 123, :b => "Joao"}
h = {a: 123, b: "Joao"}
