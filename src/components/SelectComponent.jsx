import React from 'react';
import data from '../resources/json/data.json';

const SelectComponent = ({setId}) => {
    const onSelect = (event) => {
        setId (parseInt(event.target.value))
        console.log(event.target.value)
    }

    const optionItems = data.map((option) =>
        <option key={option.id} value={option.id}>{option.city}</option>
    );

    return (
        <select onChange={onSelect}>
            {optionItems}
        </select>
    );
}

export default SelectComponent;