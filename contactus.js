const express= require('express')
const router= express.Router();

const path=require('path');

//import { contact } from '../controller/contactus';
const c = require('../controller/contactus' );

router.get('/contact' , c.contact)

module.exports=router;