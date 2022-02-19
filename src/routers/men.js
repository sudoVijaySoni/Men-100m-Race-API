const express = require("express");
const MensRanking = require("../models/mens.js")

const router = new express.Router();

//HANDLING POST REQUEST
router.post("/mens",async (req,res)=>{
    try {
    const addingmensrecord =  new MensRanking(req.body)
    console.log(req.body)
    const insertMen = await addingmensrecord.save();
    res.status(201).send(insertMen);
    } catch (error) {
        res.status(400).send(error);
    }
})
//HANDLING GET REQUEST
router.get("/mens",async (req,res)=>{
    try {
    const getMens = await MensRanking.find({})
    res.status(201).send(getMens);
    } catch (error) {
        res.status(400).send(error);
    }
})

//HANDLING GET REQUESTS FOR INDIVIDUAL PLAYER
router.get("/mens/:newid",async (req,res)=>{
    try {
    const _id = req.params.newid;
    const getMen = await MensRanking.findById({_id:_id}).sort({"ranking":1})
    res.status(201).send(getMen);
    } catch (error) {
        res.status(400).send(error);
    }
})

//HANDLING PATCH METHOD (OBVIOUSLY FOR INDIVDUAL PLAYER)
router.patch("/mens/:newid",async (req,res)=>{
    try {
    const _id = req.params.newid;
    const patchMen = await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
    res.status(201).send(patchMen);
    } catch (error) {
        res.status(500).send(error);
    }
})
//HANDLING DELETE METHOD (OBVIOUSLY FOR INDIVDUAL PLAYER)
router.delete("/mens/:newid",async (req,res)=>{
    try {
    const _id = req.params.newid;
    const delMen = await MensRanking.findByIdAndDelete(_id);
    res.status(201).send(delMen);
    } catch (error) {
        res.status(500).send(error);
    }
})
module.exports = router;