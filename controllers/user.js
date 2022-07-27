const UserModal = require("../models/User");
const ObjectId = require("mongodb").ObjectId;




const updateUser = async(req,res,next)=>{
    const _id = new ObjectId(req.params.id)
    
    try {
        const data = await UserModal.update({ _id }, req.body);
        res.status(200).send(data)
    } catch (err) {
        return next(err)
    }
}

const deleteUser = async(req,res,next)=>{
    const _id = new ObjectId(req.params.id)
    try {
        const data = await UserModal.Delete({ _id })
        res.status(200).send(data)
    } catch (err) {
        return next(err)
    }
}

const getUser = async(req,res,next) =>{
    const _id = new ObjectId(req.params.id)
    try {
        const data = await UserModal.getOne({ _id })
        res.status(200).send(data)
    } catch (err) {
        return next(err)
    }
}

const getUsers = async(req,res,next) =>{
    try {
        const data = await UserModal.getAll()
        console.log(data)
        res.status(200).send(data)
    } catch (err) {
        return next(err)
    }
}


module.exports = {
    updateUser,
    deleteUser,
    getUser,
    getUsers
}