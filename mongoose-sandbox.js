'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sandbox');

const db = mongoose.connection;

db.on('error', function(err) {
  console.error('connection error:', err);
});

db.once('open', function() {
  console.log('db connection successful');
  // All database comms here

  const Schema = mongoose.Schema;
  const AnimalSchema = new Schema({
    type: String,
    size: String,
    color: String,
    mass: Number,
    name: String
  });

  const Animal = mongoose.model('Animal', AnimalSchema);

  const elephant = new Animal({
    type: 'elephant',
    size: 'big',
    color: 'gray',
    mass: 6000,
    name: 'Lawrence'
  });

  elephant.save(function(err) {
    if (err) console.error('Save Failed.', err);
    else console.log('Saved!');
    db.close(function() {
      console.log('db connection closed');
    });
  });

});
