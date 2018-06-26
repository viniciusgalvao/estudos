const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// cada registro como array
const _schemaTArr  = {
	pokemons: Schema.Types.Array // cria um array para cada elemento contido no campo
}
const dataTArr = {
	pokemons: ['Poke01', 'Poke02'] // ira inserir cada registro como array
}

// formato mais utilizado
const _schema = {
	pokemons: [String] // array de strings
};

const data = {
	pokemons: ['Pikachu', 'Squirtle']
};

// criacao do schema
const pokemonSchema = new Schema(_schema);

// model
const Model = mongoose.model('mypokemons', pokemonSchema);
const poke  = new Model(data);
poke.save(function (err, data) {
	if (err) return console.log('ERRO: ', err);
		console.log('INSERIU: ', data);
});
