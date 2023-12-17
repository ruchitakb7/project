const express= require('express')
const app=express()
 
 const parser=require('body-parser')
app.use(parser.urlencoded({extended:false}));

const st=require('./routess/start')
const cont=require('./routess/contactus')
const error=require('./routess/404')
 
 app.use(st);
 app.use(cont)
 app.use(error)


 app.listen(8147);
