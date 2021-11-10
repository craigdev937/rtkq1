import express from "express";
import { FetchAllUsers, Login, Logout, Register } from "../controllers/userCon";

export const userRt: express.Router = express.Router();
    userRt.post("/register", Register);
    userRt.post("/login", Login);
    userRt.get("/logout", Logout);
    userRt.get("/", FetchAllUsers);


