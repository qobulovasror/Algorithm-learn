const router = require('express').Router();
const {validate, User} = require('../moduls/user');
const bcrypt = require('bcrypt');

router.get('/', async (req,res)=>{
    console.log(req.body)
    const {error} = validateLogin(req.body);
    if(error)
        return res.status(400).send(error.details[0].message+"1");
    let user = await Users.findOne({name: req.body.name});
    if(!user)
        return res.status(400).send("Email yoki parol xato ...");
    const result = await bcrypt.compare(req.body.password, user.password);
    if(!result)
        return res.status(400).send("Email yoki parol xato ...");
    const {username, _id} = user;
    res.header('authToken',_id).send({username});
})

router.post("/",async (req,res)=>{
    const {error}=validate(req.body);
    if(error)
        return res.status(400).send(error.details[0].message);
    let user = await Users.findOne({email: req.body.email});
    if(user)
        return res.status(400).send("Bu email oldin ro'yxatdan o'tgan");
    user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const salt = await bcrypt.genSalt();
    const hashPass = await bcrypt.hash(req.body.password,salt);
    user.password = hashPass;
    await user.save();
    const {username, _id} = user;
    res.header('authToken', _id).send({username});
});

module.exports = router;
