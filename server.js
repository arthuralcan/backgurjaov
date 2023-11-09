const express =  require('express'); 
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const routes = require('./src/routes');
const { ppid } = require('process');

const app = express()

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://backendgurjao01:1473570a@mongodb.backendgurjao.kinghost.net/backendgurjao01', 
async(err) => {
    if(err) throw err;
    console.log('connected to MongoDB')
});

// views 

app.use(cors());
app.use(cookieParser());
app.use(express.json()); //formato que trocaremos as info back > front vai ser json
app.use(routes); // caminho pra rotas

app.listen(3003, function(){ // startar o server 
    console.log("Servidor iniciado com sucesso!")
})