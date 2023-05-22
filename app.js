const express = require('express');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const { isArray } = require("util");
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(cors({
//     origin: ['http://rays.snmih.in']
// }));


const testRoute = require('./routes/testRoute');
const personRoute = require('./routes/personRoute');

app.use(testRoute);
app.use(personRoute);

app.listen(process.env.PORT || 3334, () => {
    console.clear();
    console.log("Application listening on port 3334!");
});


