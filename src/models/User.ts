import { model, Schema } from "mongoose"


const UserSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    password: String

}, {
    timestamps: true,
})


export default model("User", UserSchema)
