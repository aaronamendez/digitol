const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const app = express();

// enabling cors support
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// using our router middleware
app.use(routes);

app.listen(5000, () => console.log('Server listening on port 5000'));
