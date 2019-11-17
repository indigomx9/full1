import express from "express";
import { createPost, getAllPosts, getOnePost, 
    updatePost, deletePost } from "../controllers/postCon";

const router: express.Router = express.Router();
    router.post("/", createPost);
    router.get("/", getAllPosts);
    router.get("/:id", getOnePost);
    router.patch("/:id", updatePost);
    router.delete("/:id", deletePost);

export default router;


