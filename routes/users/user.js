const express = require('express');
const router = express.Router();

const User = require('../../models/User');

/** Get all users */
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({ message: error });
    } 
});
 
/** Get any specific user */
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (error) {
        res.json({ message: error });
    }
});

/** Save user */
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        photo: req.body.photo,
        gender: req.body.gender,
        phone: req.body.phone,
        dob: req.body.dob
    });

    try {
        const savedUser = await user.save();    
        res.json(savedUser);        
    } catch (error) {
        console.log(error);
        res.json({ message: error });
    }    
});

/** Update user */
router.patch('/:userId', async (req, res) => {
    try {
        const updateUser = await User.updateOne({
            _id: req.params.userId
        }, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                photo: req.body.photo,
                gender: req.body.gender,
                phone: req.body.phone,
                dob: req.body.dob,
            }
        });
        res.json(updateUser);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;