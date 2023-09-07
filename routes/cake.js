var express=require('express')
var router=express.Router()
const cake=require('../models/cake.model')
router.get('/get',async(req,res)=>{
  const todos=await cake.find()
  res.send(todos)
})

router.post('/post',async(req,res)=>{
// var id=req.params.id
// var {image,title}=req.body
try{
    const todo=new cake(req.body);
      await todo.save()
    res.status(200).send(todo)
    }catch(e){
        res.status(400).send(e)
    }


  }
)

router.delete('/delete/:id',async(req,res)=>{
  var id=req.params.id
  try {
  await  cake.deleteMany({_id:id})
    res.json({message:`Todo deleted successfully${id}`})
  } catch (error) {
    console.error('this is the error',error)
    res.status(400).send(`could not deleted todos'`)
  }
  
})
module.exports=router