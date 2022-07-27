const router = require("express").Router();
const schemas = require("../Schemas/schema");
const hotelController = require("../controllers/hotel")
// CREATE
router.post("/", schemas.HotelSchema,hotelController.createHotel)
// UPDATE 
router.put("/:id",schemas.HotelUpdateSchema ,hotelController.updateHotel)
// DELETE
router.delete("/:id", hotelController.deleteHotel)
// GET 
router.get("/:id",hotelController.getHotel)
// GET ALL
router.get("/",hotelController.getHotels)

module.exports = router