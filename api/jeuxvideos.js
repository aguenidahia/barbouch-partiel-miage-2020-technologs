let mongoose = require("mongoose"),
  Schema = mongoose.Schema;

//------------------------------------------- Resources Schema
let JeuxSchema = new Schema({
  id: String,
  nom: { type: String, required: true },
  description: String,
  type: String,
  console: { type: String, required: true },
  disponible: { type: Boolean, required: true },
});

mongoose.model("Jeux", SaladSchema);
