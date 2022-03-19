import express from "express";

import { createUser, getUsers, updateUser, deleteUser } from "../contollers/users.js";


const router = express.Router();


router.get('/', getUsers);

router.post('/', createUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
