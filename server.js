require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const basketRouter = require('./basketRoute');
// if (process.env.NODE_ENV !== 'production') {
// }


const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

mongoose.connect(process.env.MONGODB_URL).then((connection) => {
    app.listen(3000, () => {
        console.log("Listening on port 3000");
    });
}).catch((err) => console.log(err));

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Hello World'));
app.use("/api/payments", basketRouter);

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });
    res.status(201).json({
        clientSecret: paymentIntent.client_secret,
    });
});

