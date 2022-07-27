const router = require("express").Router();
const registerUser = require("../controllers/auth") 
const schemas = require("../Schemas/schema")


router.post("/register",schemas.UserSchema,registerUser.register);
router.post("/login",registerUser.login)


module.exports = router;
 