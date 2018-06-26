class Person
  def initialize(name)
    @name = name
  end

  def print_name
    puts @name
  end

  def name=(new_name)
    @name = new_name
  end


  def show_up
    puts "Olá #{@name}, eu nasci de uma classe Pessoa!"
  end

  def what_is_your_number?
    puts self.object_id
  end
end

class User
  attr_accessor :name # automaticaly generate get set methods of name.
  def initialize(name)
    @name = name
  end
end

p = Person.new "Vinícius Galvão"
p.print_name
p.name = "Joh Doe"
p.print_name
p.show_up
p.what_is_your_number?
