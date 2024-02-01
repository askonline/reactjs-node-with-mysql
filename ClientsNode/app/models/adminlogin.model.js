const mongoose = require("mongoose");

const Adminuser = mongoose.model(
  "Adminuser",
  new mongoose.Schema({
    username: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    verify_code :{ type: String, required: true },
    email_status : { type: String, required: true },
    mobile_number : { type: String, required: true },
    mobile_status : { type: String, required: true }, 
    user_status : { type: String, required: true },
    ip_Mack_addres :{type:String,require:true},
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = Adminuser;


