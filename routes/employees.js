const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the remployees.
recordRoutes.route("/employees").get(function (req, res) {
 let db_connect = dbo.getDb();
 db_connect
   .collection("employees")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

recordRoutes.route("/employees/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      name: req.body.name,
      email: req.body.email,
      points: req.body.points,
    };
    db_connect.collection("employees").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});

module.exports = recordRoutes;
