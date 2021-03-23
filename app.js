const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./routes/Student.route');

const app= express();

mongoose.connect('mongodb://localhost/studentsDb', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to Database"))
.catch(err => {
    console.error("Couldnot connect to Database", err);
    process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/students', Student);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`App is running on ${port} ...`);
});