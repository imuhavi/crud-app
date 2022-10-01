import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Product = db.define('categories',{
    name:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName: true
});
 
export default Product;