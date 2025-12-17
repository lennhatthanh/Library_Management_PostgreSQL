import express from "express";
import dotenv from "dotenv";
import author from "./routes/author.routes.js";
import book from "./routes/book.routes.js";
import cors from "cors";
import { swaggerDocs } from "./swagger.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(
    cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] })
);
app.use("/api/authors", author);
app.use("/api/books", book);
swaggerDocs(app);
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Server is running port: " + port);
});
