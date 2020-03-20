const knex = require('knex')({
  client: 'pg',
  connection:
    'postgres://mrixwjaeiiehqk:71f2a439f7e8dd38a5bfa63fd7a13e3f1ef0782e0aac2b9dd6627d02ec38281a@ec2-34-206-252-187.compute-1.amazonaws.com:5432/d906h1marlgr9b'
    + '?ssl=true',
  debug: false
});

let games = [];

const schedule = require('./src/schedule-data')

const inserts = function () {
  const insertPromises = [];
  schedule.forEach(function (game) {
    insertPromises.push(knex('schedule')
      .insert({ summary: game.summary, location: game.location, time: new Date(game.time) })
    );
  });
  return Promise.all(insertPromises);
};

inserts()

console.log('Inserts done');