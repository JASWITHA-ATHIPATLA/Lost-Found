import express from 'express';
import mongoose from 'mongoose';

app.get('/',(req,res)=>{
   res.send("hi");
})
app.listen(3000,()=>{
 console.log(`server is running on port ${3000}`);
})