import React, {useState, useReducer} from 'react';
import Table from './Table';

const initialState = {
    winner : '',
    turn : '0',
    tableData : [['','',''],['','',''],['','','']],
}

const TickTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('0');
    // const [tableData , setTableData] = useState([['','',''],['','',''],['','','']]);
    return (
        <>
            <Table />
            {winner && <div>{winnder}님의 승리</div>}
        </>
    );
}

export default TickTacToe;