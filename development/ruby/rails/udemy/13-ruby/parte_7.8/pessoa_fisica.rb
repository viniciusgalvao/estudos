require_relative 'pessoa'

class PessoaFisica < Pessoa
  attr_accessor :cpf
  attr_accessor :birthdate
end
