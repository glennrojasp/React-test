import React, {useState, useEffect} from 'react';

export const PopUpForm = ({item={}, addAnimal}) => {
    const [animalData, setAnimalData] = useState({});
    const [animalName, setAnnimalName] = useState('');
    const [animalAge, setAnimalAge] = useState('');
    const [animalSpecies, setAnimalSpecies] = useState('');
    const [formTitle, setFormTitle] = useState('Add new animal');
    const [formSubmit, setFormSubmit] = useState('Add');

    useEffect(() => {
        if(!item && item.id){
            setAnimalData(item);
            setAnnimalName(item.name);
            setAnimalAge(item.age);
            setAnimalSpecies(item.species);
            setFormTitle("Update animal");
            setFormSubmit('Update');
        }
    }, [])


    const handleFormSubmit = (e) => {
        e.preventDefault();
        addAnimal({'name': animalName , 'age': animalAge, 'species': animalSpecies})

    }

    const handleChange = (e) => {
    //    console.log('testing', e.target);
    //    console.log('testing name', e.target.name);
    //    console.log('testing value', e.target.value);
        switch(e.target.name){
            case "animalName":{
                setAnnimalName(e.target.value);
                break;
            }
            case "animalAge":{
                setAnimalAge(e.target.value);
                break;
            }
            case "animalSpecies":{
                setAnimalSpecies(e.target.value);
                break;
            }
            default: { 
                //statements; 
                break; 
             } 
        }
    }
    // let values = {'id':null, 'name': '', 'age':'', 'species':''};
    

    return (
        <>
            <form submit={() => handleFormSubmit}>
                <h2>{formTitle}</h2>
                <label for="animalName">Name</label>
                <input type="text" name="animalName" value={animalName} onChange={handleChange}/>
                <label for="animalAge">Age</label>
                <input type="text" name="animalAge" value={animalAge} onChange={handleChange}/>
                <label for="animalSpecies">Species</label>
                <input type="text" name="animalSpecies" value={animalSpecies} onChange={handleChange}/>
                <button type="button" class="btn" onClick={handleFormSubmit}>{formSubmit}</button>
                <button type="button" class="btn cancel" onClick="closeForm()">Close</button>
            </form>
        </>
    )
}