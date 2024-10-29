const { blogModel } = require("../models/blogs")
module.exports.createPost = async function(req,res){
    const {title,content,imageURL,tags} = req.body;

    // Ensure tags is an array as per the schema
    const tagsArray = Array.isArray(tags) ? tags : [tags];

    const newBlog = await blogModel.create({
        title,
        content,
        images: [imageURL],
        tags: tagsArray,
        author: req.user.user._id
    });

    res.status(201).json(newBlog)
};
module.exports.getPost = async function(req,res){
    const {tag} = req.params;
    let query = {};
    if(tag){
        query = {tags: tag};
    }
    const blogs = await blogModel.find(query);
    res.status(200).json(blogs);
}
