// Nesse exemplo de Schema, vamos ver como relacionar dados usando REF e ObjectId para usarmos o populate do mongoose...

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// schema
const _schema = {
  pokemons: [{ type: Schema.Types.ObjectId, ref: 'pokemons'}] // ref: tabela de origem onde os documentos serão buscados para o relacionamento.
};

const pokemonsSchema = new Schema(_schema);

// data to insert
const data = {
  pokemons: ['564358d3c1a1390994ce24e6', '56435900c1a1390994ce24e7', '5643583ac1a1390994ce24e5']
};

// model
const Model = mongoose.model('mypokemons', pokemonsSchema);
const poke  = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('INSERIU: ', data);
});

module.exports = pokemonsSchema;
