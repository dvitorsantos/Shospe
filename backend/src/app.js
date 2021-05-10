const express = require('express');
const cors = require('cors')

const products = require('./routes/products')
const users = require('./routes/users')

require('./database')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/products', products)
app.use('/users', users)

app.listen(3333)
