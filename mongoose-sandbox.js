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
    type: {type: String, default: 'goldfish'},
    size: {type: String, default: 'small'},
    color: {type: String, default: 'golden'},
    mass: {type: Number, default: 0.007},
    name: {type: String, default: 'Angela'}
   });

  const Animal = mongoose.model('Animal', AnimalSchema);

  const elephant = new Animal({
    type: 'elephant',
    size: 'big',
    color: 'gray',
    mass: 6000,
    name: 'Lawrence'
  });

  const animal = new Animal({}); //goldfish

  Animal.remove({}, function() {
    elephant.save(function(err) {
      if (err) console.error('Save Failed.', err);
      animal.save(function(err) {
          if (err) console.error('Save Failed.', err);
          db.close(function() {
            console.log('db connection closed');
          });
      });
    });
  });



});
