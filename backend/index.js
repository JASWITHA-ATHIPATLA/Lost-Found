import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer'

const app=express();
app.use(express.json());//if we pass data from frontend to backend it parse data to json format if it is not used it throw error
app.use(cors())
// let items = [
//   { id: 1, name: "Amit" },
//   { id: 2, name: "Rahul" }
// ];
const upload = multer();
let items = [];
app.get('/',(req,res)=>{
   res.send("hlo");
})
app.get("/items", (req, res) => {
  res.json(items);
});
app.post('/newItemData', upload.single("image"), (req,res)=>{
   const item = {
     ...req.body,
     image: req.file
   };

   items.push(item);

   console.log(items);

   res.json({ message: "Item received successfully" });
});
app.listen(3000,()=>{
 console.log(`server is running on port ${3000}`);
})