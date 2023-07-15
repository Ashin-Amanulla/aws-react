const express = require('express')
const app = express();
const logger = require('morgan');
const cors = require('cors');
const path = require('path');



app.use(logger('dev'));
app.use(cors())
app.use(express.static(path.join(__dirname, 'build'))); //make react build static
console.log(path.join(__dirname, '../frontend','build')); //check

app.get('/api/getTodo', async (req, res) => {
    console.log('Hello!!')
    let todo = [{
        id: 1,
        title: 'Complete Physics Assignments',
        status: false
    },
    {
        id: 2,
        title: 'Complete Maths Assignments',
        status: false
    }];
    res.send({ data: todo, status: true });
});


app.get('*', async (req, res) => {
    try{
        res.sendFile(path.join(__dirname, 'build','index.html'));
    }
    catch(err) {
        console.log(err)
        res.send(err);
    }
})


app.listen(80, () => {
    console.log('listening on 80')
})