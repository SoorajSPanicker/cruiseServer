// const users = require("../models/modelcollection");
const models = require("../models/modelcollection");

//logic for signup
const register = (req, res) => {
  // res.send("register working")
  const uname = req.body.uname;
  const email = req.body.email;
  const psw = req.body.psw;
  models.users.findOne({ uname }).then((user) => {
    if (user) {
      res.status(401).send("user already exist");
    } else {
      var newUser = new models.users({
        uname,
        email,
        psw,
      });
      newUser.save();
      res.status(200).json(newUser);
    }
  });
};

const detail = (req, res) => {
  //   res.send("register working");
  const rtype = req.body.rtype;
  const duration = req.body.duration;
  const description = req.body.description;
  const rsize = req.body.rsize;
  const price = req.body.price;
  const apolicy = req.body.apolicy;
  const image = req.body.image;
  models.rooms.findOne({ rtype }).then((room) => {
    if (room) {
      res.status(401).send("details already exist");
    } else {
      var newRoom = new models.rooms({
        rtype,
        duration,
        description,
        rsize,
        price,
        apolicy,
        image,
      });
      newRoom.save();
      res.status(200).json(newRoom);
    }
  });
};

const login = (req, res) => {
  const { email, psw } = req.body;
  models.users.findOne({ email, psw }).then((user) => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json("incorrect email id or password");
    }
  });
};

const allrooms = (req, res) => {
  models.rooms.find().then((common) => {
    if (common) {
      res.status(200).json(common);
    } else {
      res.status(401).json("package is not available at the moment");
    }
  });
};

const singleroom = (req, res) => {
  const { rtype } = req.params;
  models.rooms.findOne({ rtype }).then((room) => {
    if (room) {
      res.status(200).json({
        //sharing object using json method
        rtype: room.rtype,
        duration: room.duration,
        description: room.description,
        rsize: room.rsize,
        price: room.price,
        image: room.image,
        apolicy: room.apolicy,
      });
    } else {
      res.status(401).json("room not exist");
    }
  });
};

const newroom = (req, res) => {
  const rtype = req.body.rtype;
  const duration = req.body.duration;
  const description = req.body.description;
  const rsize = req.body.rsize;
  const price = req.body.price;
  const apolicy = req.body.apolicy;
  const image = req.body.image;
  models.rooms.findOne({ rtype }).then((user) => {
    if (user) {
      res.status(401).send("room already exist");
    } else {
      var extraRoom = new models.rooms({
        rtype,
        duration,
        description,
        rsize,
        price,
        apolicy,
        image,
      });
      extraRoom.save();
      res.status(200).json(extraRoom);
    }
  });
};
// const editroom=(req,res)=>{

// }
const adminreg = (req, res) => {
  // res.send("register working")
  const uname = req.body.uname;
  const email = req.body.email;
  const psw = req.body.psw;
  models.admins.findOne({ uname }).then((user) => {
    if (user) {
      res.status(401).send("user already exist");
    } else {
      var newUser = new models.admins({
        uname,
        email,
        psw,
      });
      newUser.save();
      res.status(200).json(newUser);
    }
  });
};

const adminlog = (req, res) => {
  const { email, psw } = req.body;
  models.admins.findOne({ email, psw }).then((user) => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json("incorrect email id or password");
    }
  });
};

// const roomup = (req, res) => {
//   const { rtype } = req.params;
//   const { duration, description, rsize, price, apolicy, image } = req.body;
//   models.rooms.findOne({ rtype }).then((room) => {
//     if (room) {
//       // res.status(200).json({  //sharing object using json method
//       room.rtype = rtype;
//       room.duration = duration;
//       room.description = description;
//       room.rsize = rsize;
//       room.price = price;
//       room.image = image;
//       room.apolicy = apolicy;
//       room.save();
//       res.status(200).json(room);
//     } else {
//       res.status(401).json("room not exist");
//     }
//   });
// };

const roomdel = (req, res) => {
  const { rtype } = req.params;
  models.rooms.deleteOne({ rtype }).then((user) => {
    //deleteCount=0/1
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json("room does not exist");
    }
  });
};
const roomup = (req, res) => {
  const { rtype } = req.params;
  const { duration, description, rsize, price, apolicy, image } = req.body;
  models.rooms.findOne({ rtype }).then((response) => {
    if (response) {
      response.duration = duration;
      response.description = description;
      response.rsize = rsize;
      response.price = price;
      response.apolicy = apolicy;
      response.image = image;
      response.save();
      res.status(200).json(response);
    } else {
      res.status(401).json("room not found");
    }
  });
};

module.exports = {
  register,
  detail,
  login,
  allrooms,
  singleroom,
  newroom,
  adminreg,
  adminlog,
  roomdel,
  roomup
};
