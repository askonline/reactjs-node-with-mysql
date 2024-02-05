model.model.js
const sql = require("../config/db");

const Model = function(category) {
  name = category.name;
  parent_id = category.parent_id;
  status = category.status;
  
};
module.exports = Model;


