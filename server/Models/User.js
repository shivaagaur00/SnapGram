import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    Username:{
        type: String,
        require:true,
        trim:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password:{
        type: String,
        require:true,   
    },
    photo: {
    type: String,
    default: "default",
  },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const User=mongoose.model("Examiner",userSchema);
export default User;