const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

/** import routes */
const postRoute = require('./routes/posts/posts');
app.use('/posts', postRoute);

/** Routes */
app.get('/', (req, res) => {
    res.send('Home');
});

/** DB connection */
mongoose.connect(process.env.DB_CRED, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('DB connected...')
});

app.listen(4201, () => {
    console.log(`app listening at 4201`);
});

