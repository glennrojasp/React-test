let dataJS = require('./data');

// Obtener todos los elementos
const getAnimals = (req, res) => {
    res.send(dataJS);
};

// Crear un nuevo elemento
const createAnimal = (req, res) => {
    const newItem = req.body;
    // Asumiendo que el nuevo elemento se envía en el cuerpo de la solicitud
    dataJS.push(newItem);
    res.json(newItem);
};

const updateAnimal = (req, res) => {
    const animalId = req.params.id;
    const updatedAnimal = req.body;

    const animalIndex = dataJS.findIndex(animal => animal.id === animalId);

    if (animalIndex !== -1 ){
        dataJS[animalIndex] = {
            ...dataJS[animalIndex],
            ...updatedAnimal,
        };
        res.json(dataJS[animalIndex]);
    }else{
        res.status(404).json({ error: 'Animal no encontrado'})
    }
};

const deleteAnimal = (req, res) =>{
    const animalId = req.params.id;

    const newDataJS = dataJS.filter(animal => animal.id !== Number(animalId));

    console.log(animalId);
    console.log(newDataJS);

    if(newDataJS.length < dataJS.length){
        dataJS = newDataJS;
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Animal no encontrado'})
    }
};

module.exports = { getAnimals, createAnimal, updateAnimal, deleteAnimal };