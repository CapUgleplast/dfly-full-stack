import {Art} from '../models/models.js';
import uploadController from "./uploadController.js";
import {v4} from 'uuid';
import path from 'path';


export class artController {
    async create(req, res){
        const body = req.body;
        const uploads = await uploadController.prototype.create({...req.files, is_local: true});
        console.log(uploads);
        const art = await Art.create({...body, upload: uploads});
        return res.send(art);
    }

    async delete(req, res){
        await Art.destroy({where: {id: req.params.id}});
        res.sendStatus(200);
    }

    async getOne(req, res){
        const art = await Art.findOne({where: {id: req.params.id}});
        return res.send(art);
    }

    async getAll(req, res){
        const art = await Art.findAll();
        return res.send(art);
    }

    async update(req, res){
        const art = await Art.findOne({where: {id: req.params.id}});
        const upd = req.body;
        for(const key in upd){
            art[key] = upd[key];
        }
        await art.save();
        return res.send(art);
    }

}

export default artController;
