
require('./models/User');

const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const requireAuth = require('./middlewares/requireAuth');

const app = express();



app.use(bodyParser.json());
app.use(authRoutes);

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


app.get('/', requireAuth ,(req,res) =>{
    res.send(`Your email : ${req.user.email}`)
})

app.listen(3000, ()=>{
    console.log('listening on port 3000')
});

