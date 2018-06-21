const express = require('express');
const router = express.Router();

module.exports = router
// const db = require('../models');
// module.exports = (app) => {
//   app.use('/', router);
// };

// router.get('/', (req, res, next) => {
//   res.render()
// });

router.get('/hits', (req, res) => {
  //get hits from db
  const hits = getHits(res)
  console.log('route', hits)
  
});


const getHits = (res) => {
  const MongoClient = require('mongodb').MongoClient;
  const assert = require('assert');

  // Connection URL
  const url = 'mongodb+srv://bootnav-admin:UyYTkIXBy16j4TC4@cluster0-w0csn.mongodb.net/test?retryWrites=true';

  // Database Name
  const dbName = 'bootnav';

  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    // client.close();
    return db.collection('nychits').find({}).limit(20).sort({loc: 1}).toArray().then(list => {
      // console.log(list)
      res.json(list);
      client.close();
    });
    // console.log(list);
    // client.close();
    // return list;
    // client.close();
  });
}
