import express from 'express';
import {getFeedPosts, getUserPosts, likePost} from "../controllers/posts.js";
import router from './auth.js';
import { verifyToken } from '../middleware/auth.js';

const user = express.Router();

///READ 
router.get('/', verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

//UPDATE
router.patch("/:id/like", verifyToken, likePost)

export default user;