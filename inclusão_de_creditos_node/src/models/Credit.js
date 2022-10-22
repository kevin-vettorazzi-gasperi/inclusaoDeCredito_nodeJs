import mongoose from "mongoose";

const creditSchema = new mongoose.Schema(
  {
    id: {type: String},
    userId: { type: String, required: true},
    value: {type: Number, required: true},
    status:{type: String, required: true},
    date: {type: String, required: true},
  }
);

const credits = mongoose.model('credits', creditSchema);

export default credits;