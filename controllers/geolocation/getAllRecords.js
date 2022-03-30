const Datastore = require('nedb');
const database = new Datastore('database.db');

module.exports = (request, response) => {
  database.loadDatabase();

  database.find({}, (err, data) => {
    if (err) {
      response.status(400).json({
        message: 'failed'
      })
    }
    response.status(200).json({
      message: 'success',
      data: data
    });
  });
};
