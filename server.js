require("dotenv").config();

let express = require("express");
let cors = require("cors");
let http = require("http");
let { Server } = require("socket.io");
let { ObjectId } = require("mongodb");

let { messageCollec, photoCollec } = require("./config/db");
let { upload, cloudinary } = require("./config/cloudinary");

let app = express();
app.use(express.json());
app.use(cors());

app.post("/upload", upload.single("file"),(req,res)=>
{
  let obj ={
    username : req.body.username,
    caption:req.body.caption,
    file_url:req.file.path,
    file_name: req.file.filename
  }
  photoCollec.insertOne(obj)
  .then((result)=>res.send(result))
  .catch((err)=> res.send(err));
});
app.get("/files",(req,res)=>{
  photoCollec.find().toArray()
  .then((result)=>res.send(result))
  .catch((err)=>res.send(err))
})

app.delete("/delete/:id",(req,res)=>{
  let id = req.params.id;
  let _id = new  ObjectId(id);
  photoCollec.findOne({_id})
  .then((obj)=>{
    cloudinary.uploader.destroy(obj.file_name);
    photoCollec.deleteOne({_id})
  })
  .then((result)=>res.send(result))
  .catch((err)=>res.send(err));
})

let httpServer = http.createServer(app);
let io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Connected:", socket.id);
  
  // history (chats saved rahenge, through mongo, connect kiya h)
  socket.on("getHistory", ()=>{
    messageCollec.find().toArray()
    .then((result)=>socket.emit("history",result))
    .catch((err)=>console.log(err))
  })

  socket.on("message", (data) => {
    messageCollec.insertOne(data);
 
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);
  });
});

httpServer.listen(3000, () => console.log("Server is alive at 3000"));