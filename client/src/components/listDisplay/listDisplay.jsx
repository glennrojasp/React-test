import React, { useState, useEffect }from 'react';
import './listDisplay.scss';

export const ListDisplay = () => {
    const [dataJson, setDataJson] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3030/getDataFromServer')
        .then(response => response.json())
        .then(data => setDataJson(data))
        .catch(err => console.error(err));
    }, []);


    const testButton = () => {
        console.log("testing button");
    };

    return(
        <div className="table-container">
            <div class="table-data">
                <div class="wrap-table100">
                    <div className="table100 ">
                        <table>
                            <thead >
                                <tr className="table100-head">
                                    <th className="column1">Name</th>
                                    <th className="column2">Age</th>
                                    <th className="column3">Species</th>
                                    <th className="column4">Interactions <button className="btn btn-create" onClick={testButton}>Create</button></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataJson.map((item) => (
                                    <tr key={item.id}>
                                        <td className="column1">{item.name}</td>
                                        <td className="column2">{item.age}</td>
                                        <td className="column3">{item.species}</td>
                                        <td className="column4"><button className="btn btn-edit" onClick={testButton}>Edit</button><button className="btn btn-delete" onClick={testButton}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}