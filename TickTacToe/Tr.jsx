import React from 'react';
import Td from './Td';

const Tr = ({rowData,rowIndex , dispatch}) => {
    return (
        <tr>
            {Array(rowData.length).fill().map( (td , i) => (<Td dispatch = {dispatch} cellIndex={i} rowIndex={rowIndex} cellData = {rowData[i]} >{``}</Td>))}
        </tr>    
    );
}

export default Tr;