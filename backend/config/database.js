import { Sequelize } from "sequelize";
 
const db = new Sequelize('demo_db', "muhavi", "adg00jad", {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;