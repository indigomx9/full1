import express from "express";
import { Post } from "../models/Post";

export const createPost = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        const post: Post = await Post.create(req.body);
        await post.save();
        return res.status(200).json(post);
    } catch (error) {
        res.status(500).json("Error: " + error);
        next(error);
    }
};

export const getAllPosts = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        await Post.find()
            .then((posts: Post[]) => res.json(posts));
    } catch (error) {
        res.status(500).json("Error: " + error);
        next(error);
    }
};

export const getOnePost = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        const post: Post = await Post.findOneOrFail(req.params.id);
        return res.status(200).json(post);
    } catch (error) {
        res.status(500).json("Error: " + error);
        next(error);
    }
};

export const updatePost = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        const post: Post = await Post.findOneOrFail(req.params.id);
        post.title = req.body.title;
        post.body = req.body.body;
        await post.save();
        return res.status(200).json("The Post was updated.");
    } catch (error) {
        res.status(500).json("Error: " + error);
        next(error);
    }
};

export const deletePost = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        const post: Post = await Post.findOneOrFail(req.params.id);
        await post.remove();
        return res.status(200).json("The Post was deleted.");
    } catch (error) {
        res.status(500).json("Error: " + error);
        next(error);
    }
};


