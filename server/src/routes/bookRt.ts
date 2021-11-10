import express from "express";
import { CreateBook, 
    FetchAllBooks } from "../controllers/bookCon";

export const bookRt: express.Router = express.Router();
    bookRt.post("/create", CreateBook);
    bookRt.get("/books", FetchAllBooks);





