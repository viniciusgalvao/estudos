const mongoose 	= require('mongoose');
const Schema	= mongoose.Schema;
const _schema	= {
	name: String
}
const pokemonSchema = new Schema(_schema);
const data = { name: 'Suissamon' };
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

const Suissamon = new PokemonModel(data);
Suissamon.save(function (err, data) {
	if (err) return console.log('ERRO: ', err);
	console.log('Inseriu: ', data);
});

/*
>>>>>>>>>>> OU <<<<<<<<<<<<
PokemonModel.create(data, function (err, data) {
	if (err) return console.log('ERRO: ', err);
	console.log('Inseriu: ', data);
});
*/

module.exports = PokemonModel;
