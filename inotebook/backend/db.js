const mongoose = require('mongoose')

const mongoURI = 'mongodb://localhost:27017/ankush'

const connectToMongo = ()=>{
        mongoose.connet(mongoURI,async ()=>{
        console.log("Connect  to mongo pleaasssssssssss!")
    })
}

module.exports  = connectToMongo;