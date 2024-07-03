import { DataTypes } from "sequelize";
import {sequelizeInstance} from "../connection.js";
const User=sequelizeInstance.define('User',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    loginStatus:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    },

{
    timestamps:true,
}
)

export default User