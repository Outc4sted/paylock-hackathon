const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://bootnav-admin:<PASSWORD>@cluster0-w0csn.mongodb.net/test?retryWrites=true';

// Database Name
const dbName = 'bootnav';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  // client.close();
});