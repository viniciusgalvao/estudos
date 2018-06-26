# Classe e Herança

Herança é quando herdamos um comportamento de uma classe pai.

```
class Pessoa
  attr_accessor :name
  attr_accessor :email

  def initialize(name, email)
    @name = name
    @email = email
  end
end

class PessoaFisica < Pessoa
  attr_accessor :cpf
  attr_accessor :data_nascimento
end
```
