const house = require('../models/house.model')
const mongoose = require('mongoose');

module.exports = {

  showHouseList : (req, res) => {
    house.find({}, (err, data) => {
      if(err) res.json({err: err})
      res.json(data)
    })
  },

  createHouseList : (req, res) => {
    var newHouse = new house({
      title     : req.body.title,
      luasTanah : req.body.luastanah,
      harga     : req.body.harga,
      lokasi    : req.body.lokasi,
      fasilitas : req.body.fasilitas,
      gambar    : req.body.gambar
    })
    newHouse.save( (err) => {
      if(err) res.json(err)
      res.json(newHouse)
    })
  },

  updateCreateList : (req, res) => {
    house.findOneAndUpdate( {_id: req.params.id}, req.body, (err, data) => {
      res.json({msg : 'This post has been updated'})
    })
  },

  deleteCreateList : (req, res) => {
    house.findOneAndRemove({ _id: req.params.id}, (err) => {
      res.send('This post has been removed')
    })
  }
}
