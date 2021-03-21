const express = require('express')
const router = express.Router()
const ClientModal = require('../modals/client.modal')


router.get('/getall', async(req,res) => {
    try{
           const clients = await ClientModal.find()
           res.json(clients)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/getbyid/:id', async(req,res) => {
    try{
           const clients = await ClientModal.findById(req.params.id)
           res.json(clients)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/save', async(req,res) => {
    const clients = new ClientModal({
        name: req.body.name,
        email: req.body.email,
        available: req.body.available,
        city: req.body.city,
        mobile: req.body.mobile
    })

    try{
        const a1 =  await clients.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.put('/update/:id', function(req, res){
    ClientModal.findOneAndUpdate({
        _id: req.params.id
    },{
        $set: {
            name: req.body.name,
            email: req.body.email,
            available: req.body.available,
            city: req.body.city,
            mobile: req.body.mobile
        }
    },{
        upsert: true
    },function(err, clientData){
        if(err) {
            res.send('error updating client');
        } else {
            console.log(clientData);
            res.send(req.params.id);
        }
    });
});


router.delete('/delete/:id', function(req, res){
    ClientModal.findByIdAndRemove({
        _id: req.params.id
    },function(err, clientData){
        if(err) {
            res.send('error deleting Client');
        } else {
            console.log(clientData);
            res.send(clientData);
        }
    });
});

module.exports = router