const {MongoClient} = require("mongodb")
require("dotenv").config();
let _db
let client 



module.exports = {
    async connectToServer(){
        client = await MongoClient.connect(process.env.MONGODB_UR || "mongodb://localhost:27017/Resvertion");
        _db = client.db(process.env.dbname || "Resvertion");
    },
    async closeConnection(){
        client.close()
    },
    get(){
        return _db
    }
}
