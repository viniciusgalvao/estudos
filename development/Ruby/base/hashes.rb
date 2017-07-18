# As hashes são similares ao array.
# Uma hash literal utiliza chaves ao invés de colchetes.
# O literal deve fornecer dois objetos para cada entrada: um para chave, o outro para o valor.

# Exemplo:

inst_section = {
  'cello'   => 'string',
  'clarinet'=> 'woodwind',
  'drum'    => 'percusion',
  'oboe'    => 'woodwind',
  'trumpet' => 'brass',
  'violin'  => 'string'
}

# impressão de valor baseado na chaves

p inst_section['drum']

# Exemplo 2:

histogram = Hash.new(0)
p histogram['key1']
histogram['key1'] = histogram['key1'] + 1
p histogram['key1']
