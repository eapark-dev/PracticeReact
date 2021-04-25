import React, { useState  , useRef}  from 'react';

const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요');
    const [result, setResult] = useState([]);
    //값이 바뀌어도 랜더링 시키고싶지 않은 값들은 useRef 사용해야함.
    const timeOut = useRef(null);
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = () => {
        if(state === 'waiting') {
            setState ('ready');
            setMessage ('초록색이 되면 클릭하세요');
            timeOut.current = setTimeout( () => {
                setState('now');
                setMessage('지금 클릭');
                startTime.current = new Date();
            },  Math.floor( Math.random() * 1000) + 2000); //2~3초 랜덤
        } else if (state === 'ready') {
            clearTimeout(timeOut.current); //timeout 초기화
            setState ('waiting');
            setMessage ('성급하시군요! 초록색이 된 후에 클릭하세요.');
            
        }else if( state === 'now') {
            endTime.current = new Date();
            setState ('waiting');
            setMessage ('클릭해서 시작하세요');
            setResult((preveResult) => {
                return[...preveResult, endTime.current - startTime.current]
            });
        }
    };

    const onReset = () => {
        setResult([]);
    };

    const renderAverage = () => {
        return result.length === 0
            ? null //태그가 없는 걸 의미함
            : <>
                <div>평균시간 : {result.reduce((a,c) => a + c) / result.length}ms</div>
                <button onClick={onReset}>리셋</button>
            </>

    };

    return (
        <>
            <div
                id="screen"
                className={state} //css -> class
                onClick = {onClickScreen}
            >
                {message}
            </div>
            {/* 함수안에 if문 쓰는 방식 */}
            {/* {(() => {
                if(result.length === 0) {
                    return null;
                }else{
                    return <>
                        <div>평균시간 : {result.reduce((a,c) => a + c) / result.length}ms</div>
                        <button onClick={onReset}>리셋</button>
                    </>
                }
            })()} */}
            {renderAverage()}
        </>
    );
}

export default ResponseCheck;