namespace :utils do
  desc "Popular a tabela users"
  task setup_user: :environment do
    if Rails.env.production?
      User.create [{name: "Carlos", email: "carlos@gmail.com"}, {name: "João", email: "joao@gmail.com"}]
    else
      puts "Você não está no modo de produção!"
    end
  end

  desc "Popular a tabela users com 3"
  task setup_user_3: :environment do
    User.create [{name: "Maria", email: "maria@gmail.com"}, {name: "Camila", email: "camila@gmail.com"}, {name: 'José', email: 'jose@gmail.com'}]
  end

  desc "Popular a tabela users com a quantidade informada"
  task setup_user_input: :environment do
    # ARGV | ARGV.size
    # ENV | responsável por pegar os valores passados por parâmetro.
    if ARGV.size == 2
      puts ENV["QTD"]
    else
      puts "Você precisa informar a quantidade de usuário desejada."
      puts "EX: rake utils:setup_user_input QTD=10"
    end
  end

end
