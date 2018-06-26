module ApplicationHelper
  def pegar_sexo(sex)
    sex.downcase == 'f' ? "Feminino" : "Masculino"
  end
end
