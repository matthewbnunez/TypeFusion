const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;
require('dotenv').config();

//config mongoose
require('./config/mongoose.config');

//cookies
app.use(cookieParser());

//config express
app.use(cors({
    credentials: true, 
    origin: 'http://localhost:3000'
}));


//POST method
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
require('./routes/user.routes')(app);

//port
app.listen(port, () => console.log(`Listening on port: ${port}`) );