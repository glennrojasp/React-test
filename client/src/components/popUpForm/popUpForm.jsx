import React, {useState, useEffect} from 'react';
import './popUpForm.scss';

export const PopUpForm = ({className, item, handleAnimal, closeForm}) => {
    const [animalData, setAnimalData] = useState({});
    const [animalName, setAnnimalName] = useState('');
    const [animalAge, setAnimalAge] = useState('');
    const [animalSpecies, setAnimalSpecies] = useState('');
    const [formTitle, setFormTitle] = useState('Add new animal');
    const [formSubmit, setFormSubmit] = useState('Create');

    useEffect(() => {
        if(item.id){
            setAnimalData(item);
            setAnnimalName(item.name);
            setAnimalAge(item.age);
            setAnimalSpecies(item.species);
            setFormTitle("Update animal");
            setFormSubmit('Update');
        }
    }, [item])


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(animalData.id){
            handleAnimal({'id':item.id ,'name': animalName , 'age': animalAge, 'species': animalSpecies})
        }else{
            handleAnimal({'name': animalName , 'age': animalAge, 'species': animalSpecies});
        }
        

    }

    const handleChange = (e) => {

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
        <div className={className}>
            <div className='title-container'><h2>{formTitle}</h2></div>
            <form submit={() => handleFormSubmit}>
                <label for="animalName">Name</label>
                <input type="text" name="animalName" value={animalName} onChange={handleChange}/>
                <label for="animalAge">Age</label>
                <input type="text" name="animalAge" value={animalAge} onChange={handleChange}/>
                <label for="animalSpecies">Species</label>
                <input type="text" name="animalSpecies" value={animalSpecies} onChange={handleChange}/>
                <button type="button" className="btn btn-edit" onClick={handleFormSubmit}>{formSubmit}</button>
                <button type="button" className="btn btn-delete" onClick={closeForm}>Cancel</button>
            </form>
        </div>
    )
}