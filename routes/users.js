const router = require("express").Router();
const userController = require("../controllers/user")



// UPDATE 
router.put("/:id",userController.updateUser)
// DELETE
router.delete("/:id", userController.deleteUser)
// GET 
router.get("/:id",userController.getUser)
// GET ALL
router.get("/", userController.getUsers)




module.exports = router