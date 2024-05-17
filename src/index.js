require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');
const sequelize = db.sequelize;

const userRouter = require('../src/routes/userRoute/userRoute');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

app.use('/user', userRouter)

app.listen(process.env.SERVER_PORT, () => {console.log('Server Running')});
