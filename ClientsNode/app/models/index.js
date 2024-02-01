const mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
const db = {};
//db.mongoose = mongoose;
db.user = require("./user.model");
db.role = require("./role.model");
db.category = require("./category.model");
db.profile = require("./profile.model");
db.latestupdate = require("./latestupdate.model");
db.achievements = require("./achievements.model");
db.freeaudio = require("./freeaudio.model");
db.adminuser = require("./adminlogin.model");
db.ROLES = ["user", "admin", "moderator"];
module.exports = db;