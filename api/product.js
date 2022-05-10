const express = require("express");
const router = express.Router();
var axios =require('axios');


router.get("/", async(req,res)=>{
    try{
        res.json({
            status:200,
            message:"Get ddata has successfully"
        })
    } catch(error){
        console.error(error)
        return res.status(500).send("server error")
    }
});

router.get("/user", async(req,res)=>{
    try{
        let data = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log('data',data.data[0])
        res.json({
            status:200,
            message:JSON.stringify(data.data[0])
        })
    } catch(error){
        console.error(error)
        return res.status(500).send("server error")
    }
});

module.exports = router;