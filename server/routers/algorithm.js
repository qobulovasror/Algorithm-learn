const router = require('express').Router();
const {validate, Algorithm} = require('../moduls/algo');

const algo = [
    {title: "Bubble sort", info: "Qatorni saralash"},
    {title: "Merge Sort", info: "Qatorni saralash"},
    {title: "Insertion Sort", info: "Qatorni saralash"},
    {title: "Bucket Sort", info: "Qatorni saralash"},
    {title: "Quick sort", info: "Qatorni saralash"}
];

router.get('/', async (req,res)=>{
    let algorithm;
    if(req.query)
        algorithm = await Algorithm.find(req.query).sort('-createdAt').limit(10);
    else
        algorithm = await Algorithm.find().sort('-createdAt').limit(10);
    res.send(algorithm);
    //barcha algorithlar "query" orqali sahifalanadi
    // jimlik bo'yicha 1-10 gacha || oxirgi qo'shilgan || eng ko'p baholanganlari
});


router.get('/:id', async(req,res)=>{
    const algorithm = await Algorithm.findOne({_id: req.body.id});;
    res.send(algorithm);
    res.send(req.body.id);
    //id buyicha yagona algorith qaytartadi
});


router.post('/', async(req,res)=>{
    const {error} = validate(req.body);
    if(error)
        return res.status(400).send(error.details[0].message);
    let algo = await Algorithm.findOne({name: req.body.name});
    if(algo)
        return res.status(400).send("Bu nom bilan algoritm bor...");
    algo = new Algorithm({
        name: req.body.name,
        author: req.body.author,
        about: req.body.about,
        body: req.body.body
    });
    await algo.save();
    res.send(algo);
});

// router.delete('/', (req,res)=>{
//     res.send("");
// });

module.exports = router;