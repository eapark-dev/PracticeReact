import React, {useCallback, useEffect, useRef , memo} from 'react';
import {CLICK_CELL} from './TickTacToe';

const Td = memo(({rowIndex, cellIndex , dispatch , cellData}) => {
    console.log('td rendered');

    const ref = useRef([]);
    useEffect(()=> {
        console.log(rowIndex === ref.current[0] , cellIndex === ref.current[1], dispatch === ref.current[2] , cellData === ref.current[3]);
        console.log(cellData, ref.current[3]);
        ref.current = [rowIndex, cellIndex,dispatch, cellData];
    } , [rowIndex, cellIndex, dispatch, cellData]);

    const onClickTd = useCallback(() => { 
        console.log(rowIndex, cellIndex);
        if(cellData) {
            return;
        }
        dispatch({type: CLICK_CELL, row:rowIndex, cell:cellIndex});
    },[cellData]); //계속 값이 바뀌는 경우는 input에 넣어주어야한다.
    
    return (
        <td onClick={onClickTd}>{cellData}</td>
    );
});

export default Td;