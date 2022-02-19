const express = require("express");
const app = express();
const mongoose = require("mongoose");

const postsRouter = require("./api/postRoutes");


mongoose.connect("mongodb://localhost/testdb",()=>{
    console.log("connection successfull...")
}, error => console.error(error));


//MIDDLEWARE
app.use(express.json());
app.use('/api/posts', postsRouter);





app.listen(5000,()=>{
    console.log("Server listening on port 5000...");
})