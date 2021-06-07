require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const URI = `database url`;
const corsOptions = {
    origin: `${process.env.FRONTEND}`,
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended = true}));

// mongoose
//     .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Database Connected');
//     })
//     .catch((error) => console.log(error));

app.get('/', async (req, res) => {
    try {
        res.status(200).json({
            method: 'SERVER',
            status: res.statusCode,
            message: 'Server Active',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            method: 'SERVER',
            status: res.statusCode,
            message: 'Server Inactive',
        });
    }
});

app.listen(PORT, () => {
    if (process.env.NODE_ENV == 'production') {
        console.log(`Server Running : https://backend-deploy.com \nClient Running : ${process.env.FRONTEND}`);
    } else {
        console.log(`Server Running : http://localhost:${PORT}`);
    }
});
