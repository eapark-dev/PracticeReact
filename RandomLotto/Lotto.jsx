import React, { useState , useRef, useEffect , useMemo , useCallback} from 'react';
import Ball from './Ball';

function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map( (v,i) => i +1 );
    const shuffle = [] ;
    while (candidate.length > 0) {
       shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1] ;
    const winNumbers = shuffle.slice(0,6).sort((p,c) => p-c);
    return [...winNumbers, bonusNumber];
}

//useCallback은 함수 자체를 기억하는 것
//useMemo는 리턴 값을 기억하고 있는 것

//hooks
const Lotto = () => {
    const LottoNumbers = useMemo( () => getWinNumbers(), []); //리턴값을 기억해 한번만 호출시키게 한다.
    const [winNumbers, setWinNumbers] = useState(LottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus , setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeOuts = useRef([]); 

    //inputs 자리가 빈 배열이면 componentDidMount() 와 같음
    useEffect( () => {
        console.log('useEffect');
        for (let i =0; i<winNumbers.length -1; i++) {
            timeOuts.current[i] = setTimeout(() => {
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
            }, (i + 1) * 1000);
        }
        timeOuts.current[6] = setTimeout(()=>{
            setBonus(winNumbers[6]);
            setRedo(true);
        } , 7000);
        return() => {
            timeOuts.current.forEach((v) => {
                clearTimeout(v);
            });
        };
    }, [timeOuts.current]);
    //배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행


    //함수 자체를 기억하고 있어 여러번 실행시켜주지 않는다.
    const onClickRedo = useCallback(() => {
        //useCallback에서 사용하는 te는 항상 inputs에 넣어주어야한다.
        //두번째 요소가 바뀌었을 때 실행
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeOuts.current = [];
    }, [winNumbers]);

    return (
        <> 
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v) => <Ball key={v} number={v} />)}
            </div>
            <div>보너스!</div>
            {bonus && <Ball number = {bonus} />}
            {redo && <button onClick={onClickRedo} >한번 더!</button>}
        </>
    );
}



export default Lotto;