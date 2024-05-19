import fsPromises from 'fs/promises';
import path from 'path';

const dataFilePath = path.join('app/clientData.json');

export default async function handler(req, res) {

    if (req.method === 'GET') {
        // Read the existing data from the JSON file
        const jsonData = await fsPromises.readFile(dataFilePath);
        const objectData = JSON.parse(jsonData);

        if(req.query?.section){
            console.log(objectData[req.query.section])
            res.status(200).json(objectData[req.query.section]);
            return;
        }

        res.status(200).json(objectData);
    } else if (req.method === 'POST') {
        try {
            // Read the existing data from the JSON file
            const jsonData = await fsPromises.readFile(dataFilePath);
            let objectData = JSON.parse(jsonData);

            // Get the data from the request body
            const data = req.body;

            // Add the new data to the object
            objectData = {...objectData, ...data};

            // Convert the object back to a JSON string
            const updatedData = JSON.stringify(objectData);

            // Write the updated data to the JSON file
            await fsPromises.writeFile(dataFilePath, updatedData);

            // Send a success response
            res.status(200).json(objectData);
        } catch (error) {
            console.error(error);
            // Send an error response
            res.status(500).json({ message: 'Error storing data' });
        }
    } else if (req.method === 'PUT') {
        try {
            // Read the existing data from the JSON file
            const jsonData = await fsPromises.readFile(dataFilePath);
            let objectData = JSON.parse(jsonData);

            // Get the data from the request body
            const {names} = req.body;

            // Add the new data to the object
            names.forEach(e => objectData[e] = undefined)

            // Convert the object back to a JSON string
            const updatedData = JSON.stringify(objectData);

            // Write the updated data to the JSON file
            await fsPromises.writeFile(dataFilePath, updatedData);

            // Send a success response
            res.status(200).json(objectData);
        } catch (error) {
            console.error(error);
            // Send an error response
            res.status(500).json({ message: 'Error storing data' });
        }
    }

}