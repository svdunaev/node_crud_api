import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv"

import usersRoutes from "./routes/users.js";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('This is a simple CRUD API. Reach /users for the list of users'))

mongoose.connect(
	process.env.DB_URL,
	() => {
	console.log("connected to DB")
});

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
