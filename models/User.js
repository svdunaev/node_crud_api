import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	age: Number
});

var User = mongoose.model('User', userSchema);

export default User;