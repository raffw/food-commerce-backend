require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');
const sequelize = db.sequelize;

const router = require('./routes/router');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

// sequelize.authenticate().then((error)=> {
//     console.log('database success connect')
// }).catch((error)=> {
//     console.log('connection error')
// })


// (async () => {
//   try {
//     await db.sequelize.authenticate();
//     console.log('Connection has been established successfully.');

//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   } finally {
//     await db.sequelize.close();
//   }
// })();


app.use('/', router);

app.listen(process.env.SERVER_PORT, () => {console.log('Server Running')});
