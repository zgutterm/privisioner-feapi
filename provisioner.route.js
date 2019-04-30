const express = require('express');
const app = express();
const provisionerRoutes = express.Router();

const fs = require('fs');
config = require('./config');





// Defined get data(index or listing) route
provisionerRoutes.route('/uuid').get(function (req, res) {
  //TODO read guid
  console.log("path: " + config.filepath);
  try {
    if (fs.existsSync(config.filepath + 'uuid')) {
      fs.readFile(config.filepath + 'uuid', "utf-8", function (err, data) {
                      if (err) throw err;

                      console.log(data);
      return res.json(data);
      });
    } else {
      //Guid file doesnt exist, ignore.
      return null;
    }
  } catch(err) {
    console.log(err);
  }

});



// Defined get data(index or listing) route
provisionerRoutes.route('/guid').get(function (req, res) {
  //TODO read guid
  console.log("path: " + config.filepath);
  try {
    if (fs.existsSync(config.filepath + 'guid')) {
      fs.readFile(config.filepath + 'guid', "utf-8", function (err, data) {
                      if (err) throw err;

                      console.log(data);
      return res.json(data);
      });
    } else {
      //Guid file doesnt exist, ignore.
      return null;
    }
  } catch(err) {
    console.log(err);
  }

});


provisionerRoutes.route('/delete/uuid').delete(function (req, res) {
  //TODO read guid
  try {
    if (fs.existsSync(config.filepath + 'uuid')) {
      try {
        fs.unlinkSync(config.filepath + 'uuid') 
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("file doesn't exist");
    }
  } catch(err) {
    console.log(err);
  }

});

//  Defined update route
provisionerRoutes.route('/create/guid/:id').post(function (req, res) {
  //TODO create write of guid
  fs.writeFile(config.filepath + 'guid', req.params.id, function(err) {
    if(err) {
        return console.log(err);
    }else{
      console.log("The file was saved!");
    return res.send(["The file was saved"]);
  }
  });

});

//  Defined update route
provisionerRoutes.route('/create/uuid/:id').post(function (req, res) {
  //TODO create write of guid
  fs.writeFile(config.filepath + 'uuid', req.params.id, function(err) {
    if(err) {
        return console.log(err);
    }else{
      console.log("The file was saved!");
    return res.send(["The file was saved"]);
  }
  });

});


module.exports = provisionerRoutes;
