const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')
const {addRestaurant,getRestaurantProfile,getRestaurantProfileforAdmin,addmenuItem,getMenuByRestaurant,getItemDetails} = require('../controllers/restaurantController')
router.route('/add').post(protect,addRestaurant)
router.route('/additem').post(protect,addmenuItem)
router.post('/profile',getRestaurantProfile)
router.post('/profileadm',getRestaurantProfileforAdmin)
router.get('/:id',getMenuByRestaurant)
router.get('/menuItem/:id',getItemDetails)
module.exports = router
