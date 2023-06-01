const express = require("express");
const UserSchema = require("../model/UserSchema");
exports.User = async (req,res) => {
    try {
        
        const {name, email} = req.body;
        console.log(name,email);
        console.log("creating user")

        const newUser = new UserSchema({
            name,email
        });
        const savedUser = await newUser.save();

        return res.status(200).json({
            newUser:savedUser,
        })
        
        console.log("nahi kar paye")
        
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while creating user"
        });
    }
}