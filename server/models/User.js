import mongoose from "mongoose";   
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        firstName:{
            type:String,
            required:true,
            min:3,
            max:30,
        },
        lastName:{
            type:String,
            required:true,
            min:3,
            max:30,
        },
        email:{
            type:String,
            required:true,
            max:50,
            unique:true,
        },
        password:{
            type:String,
            required:true,
            min:5
        },
        picturePath:{
            type:String,
            default:"",
        },
        friends:{
            type:Array,
            default:[]
        },
        location:String,
        occupation:String,
    }, {timestamps: true}
)

const User = mongoose.model('User', UserSchema)
export default User;