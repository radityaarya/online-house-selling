"use strict"

const mongoose = require('mongoose');
var Schema     = mongoose.Schema;

var houseSchema = new Schema({
  title     : String,
  luasTanah : String,
  harga     : Number,
  lokasi    : String,
  fasilitas : String,
  gambar    : String
},
{
  timestamps : true
})

var Houses = mongoose.model('Houses', houseSchema)

module.exports = Houses;
