import Comment from "../../../DB/model/comment.model.js";
import Post from "../../../DB/model/post.model.js";
import User from "../../../DB/model/user.model.js";




export const addComment = async (req, res) => {
    const { content, PostId, UserId } = req.body;
    const user = await User.findOne({ where: { id: UserId ,loginStatus: true } });
if (!user) {
    return res.json({ message: " user not logged in" });
}
const comment = await Comment.create({ content, PostId, UserId });
return res.json({ message: "comment created successfully", comment });


}

export const getComments = async (req, res) => {
    const { PostId } = req.query;
    const comments = await Comment.findAll();
   
    return res.json({ message: "comments fetched successfully", comments });
};

export const userPostsAndComments = async (req, res) => {
const users = await User.findAll({
include:{model:Post, attributes:["title"],include:{model:Comment,
    attributes:["content"]
}}


})


res.json({ message: "users fetched successfully", users })

};



export const updateComment = async (req, res) => {
    const { id } = req.query;
    const { content, UserId } = req.body;
    const comment = await Comment.update({ content }, { where: { id, UserId } });
    return comment > 0
        ? res.json({ message: "comment updated successfully" })
        : res.json({ message: "comment not found or not logged in" });
};
export const deleteComment = async (req, res) => {
    const { id } = req.query;
    const {  UserId } = req.body;
    const comment = await Comment.destroy( { where: { id, UserId } });
    return comment > 0
        ? res.json({ message: "comment deleted successfully" })
        : res.json({ message: "comment not found or not logged in" });
};

