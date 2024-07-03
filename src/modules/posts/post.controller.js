import Post from "../../../DB/model/post.model.js";
import User from "../../../DB/model/user.model.js";

export const addPost = async (req, res) => {

const { title, content, UserId } = req.body;
const user = await User.findOne({ where: { id: UserId ,loginStatus: true } });
if (!user) {
    return res.json({ message: " user not logged in" });
}


const post = await Post.create({
    title,
    content,    
    UserId,
});
res.json({ message: "post created successfully", post });


};
export const getPosts = async (req, res) => {
    const posts = await Post.findAll();
    res.json({ message: "posts fetched successfully", posts });
}

export const getSpecificPost = async (req, res) => {
const post = await Post.findAll({
include:{model:User, attributes:{
    exclude:["password","loginStatus","id"]
}}

});
res.json({ message: "post fetched successfully", post });

}






export const updatePost = async (req, res) => {
const { id } = req.query;
const { title, UserId } = req.body;
const post = await Post.update({ title }, { where: { id ,UserId} });
return post > 0? res.json({ message: "post updated successfully" }) : res.json({ message: "post not found" });

}

export const deletePost = async (req, res) => {
    const { id } = req.query;
    const { UserId } = req.body;
    const post = await Post.destroy({ where: { id ,UserId } });
    return post > 0 ? res.json({ message: "post deleted successfully" }) : res.json({ message: "post not found" });
}