import { DataTypes } from "sequelize";
import {sequelizeInstance} from "../connection.js";
import User from "./user.model.js";
import Post from "./post.model.js";
const Comment=sequelizeInstance.define('Comment',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
   
    content:{
        type:DataTypes.STRING,
        allowNull:false
    }
   
    },

{
    timestamps:true,
}
);

User.hasMany(Comment,{
    onDelete:'cascade', 
    onUpdate:'cascade',
})
Comment.belongsTo(User);
Comment.belongsTo(Post);
Post.hasMany(Comment,{
    onDelete:'cascade', 
    onUpdate:'cascade',
})

export default Comment