"use strict"

const mongoose = require('mongoose');
var Schema     = mongoose.Schema;

var houseSchema = new Schema({
  title     : String,
  pemilik   : String,
  status    : String,
  desc      : String,
  luasTanah : String,
  harga     : String,
  lokasi    : String,
  fasilitas : String,
  kondisi   : String,
  noHp      : String,
  gambar    : String,
  locDetail : String
},
{
  timestamps : true
})

var Houses = mongoose.model('Houses', houseSchema)

module.exports = Houses;
