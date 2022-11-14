const express = require('express');
const router = express.Router();

router.get('/', async (req,res)=>{    
    res.send("all user data");
    //barcha algorithlar "query" orqali sahifalanadi
    // jimlik bo'yicha 1-10 gacha || oxirgi qo'shilgan || eng ko'p baholanganlari
});


router.get('/:id', (req,res)=>{
    res.send(req.body.id);

    //id buyicha yagona algorith qaytartadi
});


router.post('/', (req,res)=>{
    res.send("");
});

router.delete('/', (req,res)=>{
    res.send("");
});

module.exports = router;