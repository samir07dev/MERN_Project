import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyparser.json({ limit: "20mb", extended: "true" }));
app.use(bodyparser.urlencoded({ limit: "20mb", extended: "true" }));

app.use(cors());

const CONNECTION_URL = "mongodb://samir07dec:<password>@ac-2qz7vmz-shard-00-00.idcpsxo.mongodb.net:27017,ac-2qz7vmz-shard-00-01.idcpsxo.mongodb.net:27017,ac-2qz7vmz-shard-00-02.idcpsxo.mongodb.net:27017/?ssl=true&replicaSet=atlas-1uo99s-shard-0&authSource=admin&retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
}).then(() => app.listen(PORT, () =>
    console.log(`connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));


