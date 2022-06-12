import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import scenarios from './routers/scenarios.routes.js';
import auth from './routers/auth.routes.js';

const app = express();
const PORT = process.env.port || 3001;
const URI = 'mongodb+srv://admin:T8ADp4DsHS0CVURT@cluster0.sxpjp.mongodb.net/?retryWrites=true&w=majority';

app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}))
app.use(cors());
app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
});

// Apply all routers
app.use('/scenarios', scenarios);
app.use('/', auth);

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((err) => {
    console.log('err', err);
});