class Song
	def initialize (name, artist, duration)
		@name 		= name
		@artist 	= artist
		@duration = duration
	end

	def to_s
		puts "Song: #@name--#@artist (#@duration)"
	end
end

class KaraokeSong < Song
  def initialize(name, artist, duration, lyrics)
    super(name, artist, duration)
    @lyrics = lyrics
  end
  def to_s
    puts super.to_s + " [#@lyrics]"
  end
end

song = KaraokeSong.new("My Way", "Sinatra", 225, "And now, the...")
song.to_s
