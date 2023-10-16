const mongoose=require('mongoose')
//users
const users=new mongoose.model('users',{
    uname:String,
    email:String,
    psw:String
})
//room

const rooms=new mongoose.model('rooms',{
    rtype:String,
    duration:String,
    description:String,
    rsize:Number,
    price:Number,
    apolicy:String,
    image:String
})

const admins=new mongoose.model('admins',{
    uname:String,
    email:String,
    psw:String
})

module.exports={users,rooms,admins}

