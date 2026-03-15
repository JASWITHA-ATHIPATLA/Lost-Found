import express from 'express';
import mongoose from 'mongoose';

const app=express();
app.use(express.json());
// let items = [
//   { id: 1, name: "Amit" },
//   { id: 2, name: "Rahul" }
// ];

app.get('/',(req,res)=>{
   res.send("hlo");
})
app.post('/newItemData',(req,res)=>{
   
})
app.listen(3000,()=>{
 console.log(`server is running on port ${3000}`);
})