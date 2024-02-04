import React from 'react';

export const ItemList = ({item, updateAnimal, deleteAnimal}) => {

    return(
        <tr key={item.id}>
            <td className="column1">{item.name}</td>
            <td className="column2">{item.age}</td>
            <td className="column3">{item.species}</td>
            <td className="column4"><button className="btn btn-edit" onClick={() => updateAnimal(item)}>Edit</button><button className="btn btn-delete" onClick={() => deleteAnimal(item.id)}>Delete</button></td>
        </tr>
    );
}