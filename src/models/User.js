import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    enum: ['customer', 'admin', 'driver', 'owner'],
    default: 'customer'
  }
  // TODO: Agregar direccion

}, { timestamps: true });

export default mongoose.model('User', userSchema);