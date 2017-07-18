# Normal
class Song

  def initialize (name, artist, duration)
    @name     = name
    @artist   = artist
    @duration = duration
  end

  def name
    @name
  end

  def artist
    @artist
  end

  def duration
    @duration
  end
end

song = Song.new("Flor e o Beija-Flor", "Henrique e Juliano", 225);
puts song.name

# Simplificada

class Song
  attr_reader :name, :artist, :duration
end

song = Song.new("Bela história", "Henrique e Juliano", 225);
puts song.name

# ----- Escrevendo Atributos - Metódo SET ---- #

# Normal
class Song
  attr_reader :name, :artist, :duration # get

  def duration=(new_duration)
    @duration = new_duration
  end
end

song = Song.new("Vamos fazer beber agora", "Gustavo Lima", 200)
puts song.duration
song.duration = 100
puts song.duration

# Simplificada

class Song
  attr_reader :name, :artist, :duration # get
  attr_writer :duration # set
  #attr_accessor :field1, :field2 # generate get and set

  # Virtual Attribute
  def duration_in_minutes
    @duration/60.0 # forçando ponto flutuante
  end
end

song = Song.new("Vamos fazer beber agora", "Gustavo Lima", 90)
puts song.duration
puts song.duration_in_minutes
