const express= require('express');
const booksRouter=express.Router();
const cors=require("cors")

var Bookdata= require("../model/Bookdata")
var Authordata=require("../model/Authordata")

booksRouter.use(cors())

function booksRoutes(obj){
booksRouter.get('/',function(req,res)
{
    
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Method:GET,POST,PATCH,PUT,DELETE,OPTION");
    Bookdata.find().then(function(books){
    Authordata.find().then(function(authors){
        res.send({books,authors});
    })    
    })
    
})
booksRouter.get('/:id',function(req,res)
{
// books=[]
// authors=[]
const index=req.params.id;
Bookdata.find({_id:index}).then(function(book){
        res.send(book)
    
})

}
)
return booksRouter;
}

module.exports=booksRoutes;