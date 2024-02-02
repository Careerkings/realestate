import User from "../models/user.models.js";

const signup = async (req, res) => {
    const { username, email, password } =  req.body;
    const newUser = new User({ username, email, password });
     await newUser.save();
     res.status(201).json("user created successfullyb")
}

export default signup'q
