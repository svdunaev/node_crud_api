import mongoose from "mongoose";
import User from "../models/User.js" 

export const getUsers = async (req, res) => {
	try {
		const users = await User.find();
		
		res.status(200).json(users)
	} catch (error) {
		res.status(404).json({ message: error.message});
	}
};

export const createUser = async (req, res) => {
	const user = req.body;

	const newUser = new User(user)
	
	try {
		await newUser.save();
		res.status(201).json(newUser)
	} catch (error) {
		res.status(409).json({ message: error.message} );
	}
};

export const deleteUser = async (req, res) => {
	const { id: _id } = req.params;

	if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with the requested ID");

	await User.findByIdAndRemove(_id);

};

export const updateUser = async (req, res) => {
	const { id: _id } = req.params;
	const user = req.body;

	if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with the requested ID");

	const updatedUser = await User.findByIdAndUpdate(_id, user, {new: true});

	res.json(updatedUser);
};
