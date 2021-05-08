import React ,{useRef, useEffect , memo , useMemo} from 'react';
import Td from './Td';

//memo를 사용해도 계속 리렌더링이 될 때는 useMemo사용. 컴포넌트 자체를 기억한다.
//검색 최적화 하기 위해서 반복문 사용하는 부분은 memo를 사용한다.

const Tr = memo(({rowData,rowIndex , dispatch}) => {
    console.log('tr rendered');

    const ref = useRef([]);
    useEffect(()=> {
        console.log(rowData === ref.current[0] , rowIndex === ref.current[1], dispatch === ref.current[2]);
        ref.current = [rowIndex,rowIndex, dispatch];
    } , [rowIndex,rowIndex, dispatch]);

    
    return (
        <tr>
            {Array(rowData.length).fill().map( (td , i) => (
                useMemo(() =><Td key={i} dispatch = {dispatch} cellIndex={i} rowIndex={rowIndex} cellData = {rowData[i]} >{``}</Td>
                    ,[rowData[i]], //td가 함부로 리랜더링 되지 않게 할 수 있다.
                    )
                ))}
        </tr>    
    );
});

export default Tr;