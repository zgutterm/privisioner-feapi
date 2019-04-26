const express = require('express');
const app = express();
const provisionerRoutes = express.Router();

const fs = require('fs');
config = require('./config');


// Defined get data(index or listing) route
provisionerRoutes.route('/guid').get(function (req, res) {
  //TODO read guid
  fs.readFile('/usr/local/provisioner/guid', "utf-8", function (err, data) {
                  if (err) throw err;
                  console.log(data);
         //var guidString = data.replace(/['"]+/g, '');
  return res.send(data);
  });
});

//  Defined update route
provisionerRoutes.route('/guid/create/:id').post(function (req, res) {
  //TODO create write of guid
  fs.writeFile("/usr/local/provisioner/guid", req.params.id, function(err) {
    if(err) {
        return console.log(err);
    }else{
      console.log("The file was saved!");
    return res.send("The file was saved");
  }
  });

});


module.exports = provisionerRoutes;
