//importing
import express  from "express";
import mongoose from "mongoose";
import Messages from './dbMessages.js'
import Pusher from "pusher"
import Cors from "cors"
 //app configuration 
const app=express();
const port= process.env.PORT || 9000
const pusher = new Pusher({
    appId: "1427755",
    key: "80b3e37669ae3b9eb93f",
    secret: "cc2d3a722b8a25b5224a",
    cluster: "ap2",
    useTLS: true
  });
//middleware
app.use(express.json()) 
app.use(Cors())
 

//DB config mongodb stuff
const connection_url='mongodb+srv://admin:admin@cluster0.hgizcbh.mongodb.net/?retryWrites=true&w=majority' 
// from mongo db database mongodb.com
mongoose.connect(connection_url,{
     
    useNewUrlParser:true,
    useUnifiedTopology:true
}) 
 

//???
const db=mongoose.connection
db.once('open', ()=>{
    console.log('db connected')
    const mscollection= db.collection('messages')
    const changeStream= mscollection.watch()
    changeStream.on('change',(change)=>{
        console.log('change',change)
        if(change.operationType==='insert'){
            const messageDetails= change.fullDocument;
            pusher.trigger("messages","inserted",{
                name:messageDetails.name,
                message:messageDetails.message,
                timestamp:messageDetails.timestamp,
                received:messageDetails.received
            })
        }
        else{
            console.log("error triggering pusher")
        }
    })
})



//api routes
 app.get('/messages/sync', (req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})
app.post('/messages/new',(req,res)=>{
    const dbMessages=req.body
    Messages.create(dbMessages,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

//listener
app.listen(port,()=>console.log(`Listening on localhost:${port}`))