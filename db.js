const mongoose = require('mongoose')

const connectToDB = () => {
    mongoose.set('useCreateIndex', true)

    mongoose.connect('mongodb://localhost:27017/api', {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }, (error)=>{
        if (error){
            console.log("Error->", error);
        }else{
            console.log('Conectado DB');
        }
    })
}

module.exports = {connectToDB}