
const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');



// app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);


const PORT = 5678;
const DB_URL = 'mongodb+srv://jero:8ucdbcgWlPblzFrF@cluster0.yxbxxei.mongodb.net/employee?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('DB connect successfully')
    })
    .catch((err) => console.log('DB connection Error', err));


app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
});