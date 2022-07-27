const hotelModal = require("../models/Hotel");
const ObjectId = require("mongodb").ObjectId;


const createHotel = async (req, res, next) => {
    try {
        const data = await hotelModal.post(req.body)
        return res.status(200).send(data)
    } catch (err) {
        return next(err)
    }
}

const updateHotel = async(req,res,next)=>{
    const _id = new ObjectId(req.params.id)
    
    try {
        const data = await hotelModal.update({ _id }, req.body);
        res.status(200).send(data)
    } catch (err) {
        return next(err)
    }
}

const deleteHotel = async(req,res,next)=>{
    const _id = new ObjectId(req.params.id)
    try {
        const data = await hotelModal.Delete({ _id })
        res.status(200).send(data)
    } catch (err) {
        return next(err)
    }
}

const getHotel = async(req,res,next) =>{
    const _id = new ObjectId(req.params.id)
    try {
        const data = await hotelModal.getOne({ _id })
        res.status(200).send(data)
    } catch (err) {
        return next(err)
    }
}

const getHotels = async(req,res,next) =>{
    try {
        const data = await hotelModal.getAll()
        console.log(data)
        res.status(200).send(data)
    } catch (err) {
        return next(err)
    }
}


module.exports = {
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getHotels
}