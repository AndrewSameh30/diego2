const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const administratorSchema = new Schema(
  {
    UserName: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
         },
      
        Name: {
          type: String,
          required: false,
        },
        Email: {
          type: String,
          required: false,
        },

    },

  
  { timestamps: true }
);

const administrator = mongoose.model("administrator", administratorSchema);
module.exports = administrator;
