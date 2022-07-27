const userModal = require("../models/User")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config()

const register = async (req, res, next) => {
    try {
        const existingUser = await userModal.getOne({ $or: [{ username: req.body.username }, { email: req.body.email }] });
        if (existingUser) {
            if (existingUser.username === req.body.username) {
                res.status(409).send("Username is Already exists")
            }
            if (existingUser.email === req.body.email) {
                res.status(409).send("Email is Already exists")
            }

        }
        try {
            const salt = await bcrypt.genSalt(10)
            const hashPass = await bcrypt.hash(req.body.password,salt)
            const newUser = {
                username:req.body.username,
                email:req.body.email,
                password:hashPass,
                isAdmin:req.body.isAdmin,
                updatedat:req.body.updatedat
            }
            const data = await userModal.post(newUser)
           return res.status(200).send(data)
        } catch (error) {
            res.status(400).send(err.message)
        }
    } catch (err) {
        res.status(400).send(err.message)
    }
}


const login = async (req, res, next) => {
    try {
        const User = await userModal.getOne({username:req.body.username})
        if(!User){
            return res.status(404).send("User not found")
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password,User.password);
        if(!isPasswordCorrect){
            return res.status(400).send("Wrong Credentials")
        }

        const token = jwt.sign({id:User._id, isAdmin:User.isAdmin},process.env.JWT)


        const {password,isAdmin,...others} = User
        res.cookie("access-token",token,{
            httpOnly:true,
        }).status(200).send({...others})

    } catch (err) {
        res.status(400).send(err.message)
    }
}


module.exports = { 
    register,
    login
}

