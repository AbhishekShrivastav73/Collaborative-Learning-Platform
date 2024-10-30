const { userModel } = require("../models/users");

module.exports.getUser = async function(req,res){
    const {userId} = req.params; // Fixed from req.param to req.params
    const user = await userModel.findById(userId).populate('blogs');

    if(!user) {
        return res.status(404).json({ // Changed from res.status to return res.status for better readability
            message : "User not found"
        });
    }

    res.status(200).json(user); // Added a semicolon at the end of the statement
}