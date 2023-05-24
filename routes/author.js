const express = require('express')
const router = require()
const joi=require('joi')
const authors =[{id:1,firstName: 'John', lastName: 'hhh', nationality: 'egyption'},]

router.get('/',(req,res)=>{
    res.status(200).json(authors);
});

router.get('/:id',(req,res)=>{
   
    const author=authors.find(b=>b.id === parseInt(req.params.id));
    if(author.length){response.status(200).json(author);}else{response.status(404).json({message: 'author not found'});}
});
router.post('/',(req,res)=>{
    const {error}=validate(req,res);

if(error){
    return res.status(404).json({message:error.details[0].message})
}

const author={
    id:authors.length+1,
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    nationality:req.body.nationality

}
authors.push(author);
res.status(201).json(author);//created successfully

});

router.put('/:id',(req,res)=>{
    const {error}=validateUpdateAuthor(req.body);

if(error){
    return res.status(404).json({message:error.details[0].message})
}
const author =authors.find(b=>b.id === parseInt(req.params.id));
if(author){
    res.status(200).json({message:"author has been updated"})
}else{
    res.status(404).json({message:"author not found"})
}
});


router.delete('/:id',(req,res)=>{
    const {error}=validateUpdate(req.body);

if(error){
    return res.status(404).json({message:error.details[0].message})
}
const author =authors.find(b=>b.id === parseInt(req.params.id));
if(author){
    res.status(200).json({message:"author has been deleted"})
}else{
    res.status(404).json({message:"author not found"})
}
})

//validate create Auther
function validateCreateAuther(obj){
    const schema =joi.object({
        firstName:joi.string().trim().min(3).max(200).required(),
        lastName:joi.string().trim().min(3).max(200).required(),
        nationality:joi.string().trim().min(3).max(500).required(),
    })
}

function  validateUpdateAuthor(obj){
    const schema =joi.object({
        firstName:joi.string().trim().min(3).max(200) ,
        lastName:joi.string().trim().min(3).max(200),
        nationality:joi.string().trim().min(3).max(500),
    })

}
module.exports =router;