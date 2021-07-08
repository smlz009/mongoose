;(async function () {
    const express = require('express');
    const mongoose = require('./dbs/db');
    const models = require('./dbs/model')

    await mongoose

    console.log('数据库启动成功');

    

    const app = express();

    app.use(express.urlencoded({extended : true}))

    app.get('/find',async (req,res)=>{
        const result = await models.find()
        res.send(result)
    })

    app.post('/create',async (req,res)=>{
        await models.create({
            name : req.body.name,
            age : req.body.age
        })
        console.log('成功');
        
    })

    app.listen(5000, (err) => {
        if(err) console.log(err);
        else console.log('成功');
    })
})()