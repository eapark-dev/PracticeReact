import React, {useState, useReducer, useCallback} from 'react';
import Table from './Table';

const initialState = {
    winner : '',
    turn : '0',
    tableData : [['','',''],['','',''],['','','']],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_WINNER' :
            //state.wiiner = action.wiiner; 이런식으로 사용하면 안됨.
            return {
                ...state, //기존 state가 얕게 복사됨. 불변성
                winner : action.winner,
            }
    }
};

const TickTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onclickTable = useCallback( () => {
        dispatch({ type: 'SET_WINNER' , winner: '0'}) ;
    }, []);

    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('0');
    // const [tableData , setTableData] = useState([['','',''],['','',''],['','','']]);
    return (
        <>
            <Table onClick={onclickTable} tableData={state.tableData}/>
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    );
}

export default TickTacToe;