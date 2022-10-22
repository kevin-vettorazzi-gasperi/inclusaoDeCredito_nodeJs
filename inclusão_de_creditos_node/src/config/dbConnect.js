import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Kevin:asdasd@develfoodi-iv.ar7jfc3.mongodb.net/DevelfoodI-IV");

let db = mongoose.connection;

export default db;