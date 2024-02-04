import React, { useState, useEffect }from 'react';
import { ItemList } from '../itemList/itemList';
import { PopUpForm } from '../popUpForm/popUpForm';
import './listDisplay.scss';


export const ListDisplay = () => {
    const [dataJson, setDataJson] = useState([]);
    const [newAnimal, setNewAnimal] = useState({});
    const [displayForm , setDisplayForm] = useState(false);


    useEffect(() => {
        fetch('http://localhost:3030/data')
        .then(response => response.json())
        .then(data => setDataJson(data))
        .catch(err => console.error(err));
    }, [newAnimal]);


    const generateId = () => {
        //Random calculations with a range of 30 may not be suitable for real apps. This is a test scenario, so i have kept it low for this reason.
        let idNumber = Math.ceil(Math.random()*30);
        let dataLength = 30;

        while(dataJson.some(item => item.id === idNumber)){
            if(dataJson.length > dataLength){
                dataLength += dataLength;
            }
            idNumber = Math.ceil(Math.random()*dataLength);
        }

        return idNumber;
    };

    const handleFormVisibility = () => {
        setDisplayForm(!displayForm);
        console.log(displayForm);
    };

    const addAnimal = async (animalData) => {
        const id = generateId();
        
        let animal= { "id": id, ...animalData};
        setNewAnimal(animal);

        console.log('dataJson', dataJson);

        try {
            const response = await fetch('http://localhost:3030/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(animal),
            });

            if (response.ok) {
                // Manejar el éxito, por ejemplo, limpiar el formulario
                setNewAnimal({});
                    // Reinicializa aquí los campos del nuevo elemento después de la creación
            } else {
                // Manejar errores, por ejemplo, mostrar un mensaje de error
                console.error('Error al crear el elemento');
            }
        } catch (error) {
            console.error('Error de red', error);
        }
    };

    const updateAnimal = async (item) => {
        console.log("e", item);
    }

    const deleteAnimal = async (itemId) => {
        try{
            const response = await fetch(`http://localhost:3030/data/${itemId}`, {
                method: 'DELETE',
            });
        if (response.ok) {
            // Manejar el éxito, por ejemplo, limpiar el formulario
            setNewAnimal({});
                // Reinicializa aquí los campos del nuevo elemento después de la creación
        } else {
            // Manejar errores, por ejemplo, mostrar un mensaje de error
            console.error('Error al eliminar el elemento');
        }
        } catch (error) {
            console.error('Error de red', error);
        }
    }

    return(
        <div className="table-container">
            <div className="table-data">
                <div className="wrap-table100">
                    <div className="table100 ">
                        <table>
                            <thead >
                                <tr className="table100-head">
                                    <th className="column1">Name</th>
                                    <th className="column2">Age</th>
                                    <th className="column3">Species</th>
                                    <th className="column4">Interactions <button className="btn btn-create" onClick={handleFormVisibility}>Create</button></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataJson.map((item) => (

                                    <ItemList key={item.id} item={item} updateAnimal={updateAnimal} deleteAnimal={deleteAnimal} /> 
                                  
                                ))}
                            </tbody>
                        </table>
                        <PopUpForm addAnimal={addAnimal}/>
                    </div>
                </div>
            </div>
        </div>
    );
}