require_relative 'pessoa_fisica'
require_relative 'pessoa_juridica'

pf = PessoaFisica.new
pf.name = "John Snow"
pf.address = "Street Five"
pf.cpf "000.000.000-00"
pf.birthdate = "23/12/1950"

pj = PessoaJuridica.new
pj.name = "Google"
pj.address = "Silicon Valley"
pj.cnpj = "302.212/212-0012"
pj.alias = "Google Inc"
