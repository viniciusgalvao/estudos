# $global_variable = value
# @local_variable = value | Variáveis de instância

class Song
	def initialize (name, artist, duration)
		@name 		= name
		@artist 	= artist
		@duration = duration
	end

	def to_s
		puts "Name: #{@name}\nArtist: #@artist\nDuration: #@duration"
	end
end

#song = Song.new("Bicylops", "Fleck", 260)
#song.to_s
