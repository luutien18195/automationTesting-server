import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import scenarios from './routers/scenarios.js'

const app = express();
const PORT = process.env.port || 3001;
const URI = 'mongodb+srv://admin:T8ADp4DsHS0CVURT@cluster0.sxpjp.mongodb.net/?retryWrites=true&w=majority';

app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}))
app.use(cors());

// Apply all routers
app.use('/scenarios', scenarios);

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((err) => {
    console.log('err', err);
});

