const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const TodoRoutes = require('./routes/listroute')
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

//MiddleWares
app.use(bodyParser.json());
app.use(cors())
app.use('/api',TodoRoutes);
///////////////////

const port = process.env.PORT || 3000

mongoose.set('useFindAndModify', false);
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(port,()=>{
        console.log('Server running at 3000\nDB connected successfully')
    }))
    .catch(err => console.log('DB CONNECTION FAILED\n',err))
    
