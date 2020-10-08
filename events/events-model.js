const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findById,
  destroy
}

function add(data) {
  return db('events')
    .insert(data)
    .then(id => {
      return findById(id[0]);
    })
    .catch(error => {
      res.json(error.message)
    })
}

function find() {
  return db('events');
}

function findById(id) {
  return db('events')
    .where({ id })
    .first();
}

function destroy(id) {
  return db('events')
    .where({ id })
    .del();
}