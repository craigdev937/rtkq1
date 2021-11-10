import express from "express";
import { CreateBook, FetchAllBooks, GetOneBook, 
    UpdateBook, DeleteBook } from "../controllers/bookCon";

export const bookRt: express.Router = express.Router();
    bookRt.post("/create", CreateBook);
    bookRt.get("/books", FetchAllBooks);
    bookRt.get("/books/:id", GetOneBook);
    bookRt.put("/books/:id", UpdateBook);
    bookRt.delete("/books/:id", DeleteBook);




