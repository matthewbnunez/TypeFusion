const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};
// The method below is new
module.exports.createUser = (request, response) => {
  const { firstName, lastName, email, password, confirmPassword } =
    request.body;
  User.create({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  })
    .then((user) => {
      const userToken = jwt.sign(
        {
          id: user._id,
        },
        process.env.SECRET_KEY,
        console.log("we are in the userToken", user)
      );
      response
        .cookie("usertoken", userToken, {
          httpOnly: true,
        })
        .json({ msg: "success", user: user });
    })
    .catch((err) => {
      console.log("we are in the err");
      response.status(400).json(err);
    });
};

module.exports.cookie =(req, res)=>{
res.cookie("mycookie", "mydata", { httpOnly: true }).json({
    message: "This response has a cookie"
});
}

// logging in
module.exports.login = async(req, res)=>{
    const user = await User.findOne({ email: req.body.email });
    if(user === null) {
        // email not found in users collection
        return res.sendStatus(400);
    }
    // making it this far means we found a user with the email address
    // comparing the password to the hashed password in the db
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    if(!correctPassword) {
        // if password was not a match
        return res.sendStatus(400);
    }
    // password is a match
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);
    // the response object allows chained calls to cookie and json
    res
        .cookie("usertoken", userToken, {
            httpOnly: true
        })
        .json({ msg: "success!" });  
}

module.exports.logout = (req, res) =>{
    res.clearCookie('usertoken')
    res.sendStatus(200)
}

module.exports.findAllUser = (req, res) => {
    User.find({})
        .then(users=>res.cookie("test","test", {httpOnly:true}).json(users))
        .catch(err => res.status(400).json(err));
};

module.exports.getUser = (req, res) => {
    User.findOne({_id:req.params.id}).populate("liked_stay")
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
}

module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteUser = (req, res) => {
    User.deleteOne({_id: req.params.id})
        .then(deleteUser => res.json(deleteUser))
        .catch(err => res.status(400).json(err))
}

  
