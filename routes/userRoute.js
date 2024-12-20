import express from "express";
import {
    getUsers, 
    getUserByid, 
    createUser, 
    updateUser, 
    deleteUser
} from "../controllers/users.js";
import { verifyUser, adminOnly } from "../middleware/authUser.js";

const router = express.Router();

router.get("/users",verifyUser, adminOnly, getUsers);
router.get("/users/:id",verifyUser,adminOnly, getUserByid);
router.post("/users",verifyUser,adminOnly, createUser);
router.patch("/users/:id",verifyUser,adminOnly, updateUser);
router.delete("/users/:id",verifyUser,adminOnly, deleteUser);

 export default router;