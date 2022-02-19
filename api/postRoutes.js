const express = require("express");
const router = express.Router();
const Post = require("../schema/postSchema");

// GET all posts
router.get("/",async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json({posts})
    }catch(err){
        res.json({message:err.message});
    }
})

//GET single post
router.get("/:id",async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.json({post});
    }catch(err){
        res.json({message:err.message});
    }
})

//UPDATE a specific post
router.put("/:id",async (req,res)=>{
    const text = req.body.text;
    try{
        const post = await Post.findById(req.params.id);
        post.text = text;
        post.save();
        res.json({message:"post updated successfully...",post});
    }catch(err){
        res.json({message:err.message});
    }
})

//CREATE a new post
router.post("/", async (req,res)=>{
    const post = new Post({username:req.body.username,text:req.body.text});
    try{
        await post.save();
        res.json({message:"post added successfully...",post});
    }catch(err){
        res.status(400).json({message:err.message});
    }
})

//DELETE a specific post
router.delete("/:id",async (req,res)=>{
    try{
        const status = await Post.findByIdAndDelete(req.params.id);
        res.json({status})
    }catch(err){
        res.json({message:err.message});
    }
})


module.exports = router;