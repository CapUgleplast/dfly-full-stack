import express from "express";
import sequelize from "./database.js";
import models from './models/models.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import router from "./routes/index.js";
import path from "path";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api' , router);

const init = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, (e)=>{
            if(e){
                return console.log(e);
            }
            console.log('Server Init');
        });
    }
    catch (e) {
        console.log(e);
    }
};

init();


app.get('/', (req, res) => {
    res.send('hehehehe');
});

app.get('/posts', (req, res) => {
    res.json({
        success: 'hehehehe'
    });
});
