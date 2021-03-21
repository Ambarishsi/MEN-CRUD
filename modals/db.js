const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ClientDB',{useNewUrlParser: true},(err) => {
    if(!err){
        console.log('Mongodb connected')
    }else{
        console.log(err)
    }
});

require('./client.modal');