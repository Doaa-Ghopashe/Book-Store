const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require("../Middleware/auth");
const userController = require('../controllers/userController')
const User = require("../models/user");
const router=express.Router();

router.post('/user' , userController.add )
router.get('/user' , userController.list )
router.get('/user/:id' , userController.getById )
router.delete('/user/:id' , userController.remove )
router.put('/user/:id' , userController.edit )

// user profile
router.get('/user/profile',auth,async (req, res, next)=>{
  const profile = await User.findById(req.user._id).select("-password")
  res.send(profile);
});


// Register
router.post("/register",async (req, res) => {
     
  try {
   
    const { firstName, lastName,age, email, password } = req.body;

   
    if (!(email && password && firstName && lastName)) {
     return res.status(400).send("All input is required");
    }

   
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(), 
      password: encryptedPassword,
    });

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
    });


    // Login
 router.post("/login", async(req, res) => {
 
  try {
    
    const { email, password } = req.body;

    if (!(email && password)) {
     return res.status(400).send("All input is required");
    }
    
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }

    });


 router.post("/welcome", auth, (req, res) => {
        res.status(200).send("Welcome");
        
      });

module.exports = router;