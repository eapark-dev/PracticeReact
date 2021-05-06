import React, {useState, useEffect, useReducer, useCallback} from 'react';
import Table from './Table';

const initialState = {
    winner : '',
    turn : '0',
    tableData : [
        ['','',''],
        ['','',''],
        ['','','']
    ],
    recentCell : [-1, -1],
}

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_WINNER' :
            //state.wiiner = action.wiiner; 이런식으로 사용하면 안됨.
            return {
                ...state, //기존 state가 얕게 복사됨. 불변성
                winner : action.winner,
            }
        case CLICK_CELL: {
            const tableData = [...state.tableData]; //... 객체를 얕은 복사할 때 사용
            tableData[action.row] = [...tableData[action.row]]; //immer라는 라이브러리로 가독성 문제 해결 예정
            tableData[action.row][action.cell] = state.turn;
            return {
                ...state,
                tableData,
                recentCell : [action.row, action.cell],
            };
        }
        case CHANGE_TURN : {
            return {
                ...state,
                turn : state.turn === '0' ? 'X' : '0',
            };
        }
        case RESET_GAME : {
            return {
                ...state,
                turn : '0',
                tableData : [
                    ['','',''],
                    ['','',''],
                    ['','','']
                ],
                recentCell : [-1, -1],
            };
        }
        default:
            return state;
    }
};

const TickTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {tableData , turn ,winner , recentCell} = state;

    const onclickTable = useCallback( () => {
        dispatch({ type: 'SET_WINNER' , winner: '0'}) ;
    }, []);

    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('0');
    // const [tableData , setTableData] = useState([['','',''],['','',''],['','','']]);

    useEffect( () => {
        const [row, cell] = recentCell;
        if( row < 0) {
            return;
        }
        let win = false;
        if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn ) {
            win = true;
        }
        if(tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
            win = true;
        }
        if(tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
            win = true;
        }
        if(tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
            win = true;
        }
        console.log(tableData);
        if(win){ //승리 시
            dispatch({type : SET_WINNER   , winner : turn});
            dispatch({ type : RESET_GAME});
        }else {
            //무승부 검사
            let all = true; // all 이 true 면 무승부
            tableData.forEach( (row) => {
                row.forEach( (cell) => {
                    if(!cell) {
                        all = false;
                    }
                });
            });
            if(all){
                dispatch({type : RESET_GAME});
            }else {
                dispatch({type : CHANGE_TURN});
            }
            
        }
    }, [recentCell]);

    return (
        <>
            <Table onClick={onclickTable} tableData={tableData} dispatch = {dispatch}/>
            {winner && <div>{winner}님의 승리</div>}
        </>
    );
}

export default TickTacToe;