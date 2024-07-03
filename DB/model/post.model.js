import { DataTypes } from "sequelize";
import {sequelizeInstance} from "../connection.js";
import User from "./user.model.js";
const Post=sequelizeInstance.define('Post',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
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


User.hasMany(Post,{
    onDelete:'cascade', 
    onUpdate:'cascade',
})
Post.belongsTo(User);

export default Post