const express = require('express');
const mongoose = require('mongoose');


const app = express();

const mongoURI = 'mongodb+srv://gauravshresthh:pikachhu@tracker.hpgdy.mongodb.net/tracker?retryWrites=true&w=majority'


mongoose.connect(mongoURI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log('Connected to Mongo Instance');
});

mongoose.connection.on('error', err =>{
    console.error('Error connecting to mongo', err);
});


app.get('/',(req,res) =>{
    res.send('Hi there')
})

app.listen(3000, ()=>{
    console.log('listening on port 3000')
});

