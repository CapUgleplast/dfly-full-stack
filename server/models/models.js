import Sequelize from "../database.js";
import DataTypes from 'sequelize';

export const Art = Sequelize.define('art', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    material: {type: DataTypes.STRING},
    width: {type: DataTypes.INTEGER},
    height: {type: DataTypes.INTEGER},
    year: {type: DataTypes.INTEGER},
    price: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
    upload: {type: DataTypes.ARRAY(DataTypes.JSON)}
});

export const Upload = Sequelize.define('upload', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    path: {type: DataTypes.STRING},
    type: {type: DataTypes.STRING},
});

Art.hasMany(Upload);
Upload.belongsTo(Art);

export default {
    Art,
    Upload
};