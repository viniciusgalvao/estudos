const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// armazenar um arquivo
const imageSchema = new Schema({
  mime: String,
  bin: Buffer // transformado para Binary quando vai para o mongo
});

module.exports = imageSchema;
