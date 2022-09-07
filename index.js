const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/services/bd.service.js');
const app = express();
const cors = require('cors');

//app.set('json spaces',2);

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//ROUTES
require('./src/routes/materiales.routes')(app);
require('./src/routes/material_tipo.routes')(app);
require('./src/routes/proveedor.routes')(app);

app.listen(3000);
