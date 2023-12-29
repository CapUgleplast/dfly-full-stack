import {v4} from "uuid";
import path from "path";
import fs from 'fs';
import {Art, Upload} from "../models/models.js";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

class uploadController {
    async create(req, res){
        const {upload} = req?.files || req;
        const file = Array.isArray(upload) ? upload : [upload];
        console.log(file, 'file');
        let uploadsOut = [];
        for(let i = 0; i < file.length; i++){
            const fileName = `${v4()}.webp`;
            const filePath = await file[i].mv(path.resolve(__dirname, '..', 'static', fileName));
            const upload = await Upload.create({name: fileName, path: filePath, type: 'image'});
            uploadsOut.push(upload);
        }
        if(req.is_local){
            // return uploadsOut.map((e) => {return e.dataValues.id;});
            return uploadsOut;
        }
        return res.send(uploadsOut);
    }

    async delete(req, res){
        const upload = await Upload.findOne({where: {id: req.params.id}});
        await fs.unlink(path.resolve(__dirname, '..', 'static', upload.name), (err) => {
            if (err) {
                throw err;
            }
        });
        await Upload.destroy({where: {id: req.params.id}});

        res.sendStatus(200);
    }

    async getOne(req, res){
        const upload = await Upload.findOne({where: {id: req.params.id}});
        return res.send(upload);
    }

    async update(req, res){
        const upd = await Upload.findOne({where: {id: req.params.id}});
        const { upload } = req.files;
        console.log(req.files);
        const fileName = `${v4()}.webp`;
        await upload.mv(path.resolve(__dirname, '..', 'static', fileName));
        await fs.unlink(path.resolve(__dirname, '..', 'static', upd.dataValues.name), (err) => {
            if (err) {
                console.log(err);
            }
        });
        upd.name = fileName;
        await upd.save();
        return res.send(upd);
    }
}

export default uploadController;