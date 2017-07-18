require_relative "../modulos/meu_modulo"
require_relative "../modulos/modulo_correio"

class MeuMixin
  include Configuracoes
  include Correio
end