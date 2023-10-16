const express=require('express')
const logic=require('../controllers/logic')
const router=new express.Router()
//signup
router.post('/cruiseship/userSignup',logic.register)
//room
router.post('/cruiseship/roomDetails',logic.detail)
//login
router.post('/cruiseship/userlogin',logic.login)
//getallrooms
router.get('/cruiseship/shiprooms',logic.allrooms)
router.get('/cruiseship/single/:rtype',logic.singleroom)
router.post('/cruiseship/addnewroom',logic.newroom)
router.post('/cruiseship/regadmin',logic.adminreg)
router.post('/cruiseship/adminlogin',logic.adminlog)
router.post('/cruiseship/updatedata/:rtype',logic.roomup)
router.delete('/cruiseship/delete/:rtype',logic.roomdel)

module.exports=router


