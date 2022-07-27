const db = require("../db/db");

const tableName = "Hotel"


// CREATE
const post = async(data)=>{
    return db.get().collection(tableName).insertOne(data)
}

// UPDATE

const update = async(query,data)=>{
    return db.get().collection(tableName).updateOne(query,{$set:data})
}

// DELETE

const Delete = async(data)=>{
    return db.get().collection(tableName).deleteOne(data)
}


// GET 

const getOne = async(data)=>{
    return db.get().collection(tableName).findOne(data)
}

const getAll = async()=>{
    return db.get().collection(tableName).find().toArray()
}


// GET ALL




module.exports={
    post,
    update,
    Delete,
    getOne,
    getAll
}

