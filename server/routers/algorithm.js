const express = require('express');
const router = express.Router();

router.get('/', async (req,res)=>{
    const algo = [
        {title: "Bubble sort", info: "Qatorni saralash"},
        {title: "Merge Sort", info: "Qatorni saralash"},
        {title: "Insertion Sort", info: "Qatorni saralash"},
        {title: "Bucket Sort", info: "Qatorni saralash"},
        {title: "Quick sort", info: "Qatorni saralash"}
    ]
    
    res.send(algo);
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