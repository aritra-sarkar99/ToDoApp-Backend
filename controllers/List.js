const Items = require('../models/items');
exports.getIndex = (req,res,next)=>{
    Items.find({},(err,result)=>{
        if(err){return res.json({error: true})}
        return res.status(200).json(result)
    })
}

exports.postIndex = (req,res,next)=>{
    const item = new Items(req.body)
    item.save((err,result) => {
        if(err){
            return res.json({error: true})
        }
        return res.status(200).json({success: true})
    })
}

exports.deleteIndex = (req,res,next) => {
    Items.findOneAndDelete({_id: req.params.itemId},(err,result)=> {
        if(err){return res.json({error: true})}
        return res.status(200).json({success: true})
    })
}

exports.deleteSelected = (req,res,next) => {
    
    console.log(req.body);
    Items.deleteMany({_id: {$in : req.body}},(err,result) => {
        if(err){
            console.log(err.message)
            return res.json({error: "Error"})}
        return res.status(200).json({success: true})
    })
}

exports.updateIndex = (req,res) => {
    Items.findOneAndUpdate({_id: req.params.itemId},req.body,{new:true},(err,result)=> {
        if(err){
            return res.json({error:true});
        }
        return res.status(200).json({success:true});
    })
}