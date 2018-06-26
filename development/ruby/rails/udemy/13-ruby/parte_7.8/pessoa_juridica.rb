require_relative 'pessoa'

class PessoaJuridica < Pessoa
  attr_accessor :cnpj
  attr_accessor :alias
end
