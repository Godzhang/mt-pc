import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategroySchema = new Schema({
  city: {
    type: String,
    required: true
  },
  areas: {
    type: Array,
    required: true
  },
  types: {
    type: Array,
    required: true
  }
});

export default mongoose.model("Categroy", CategroySchema);
