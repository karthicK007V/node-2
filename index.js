const express=require("express");
const dotenv=require("dotenv");




const app=express();
dotenv.config();

app.use("/room",(req,res,next)=>{
   res.send([{
    room:1-100,
    Amending:["ac","Heater","Tv","wifi"],
    Price:1000/hr

}]) 
})

app.use("/booking",(req,res,next)=>{
    res.send([{
        name:"xxx",
        date:10/10/2020,
        satrttime:'9AM',
        endtime:'10PM',
        roomid:'12'
    }])
})

app.use("/bookeddata",(req,res,next)=>{
    res.send([{
        roomname:13,
        status:"booked",
        customername:"yyy",
        date:12/11/2021,
        satrttime:'9AM',
        endtime:'10PM'

    }])
})

app.use("/user",(req,res,next)=>{
    res.send([{
        customername:"xxx",
        roomname:15,
        date:14/11/2022,
        satrttime:'9AM',
        endtime:'10PM'
    }])
})


app.listen(process.env.PORT)