//파일을 쪼개는 경우 꼭 필요한 패키지 라이브러리를 가져와야한다.
import React, {useState} from 'react';
import Try from './Try';

function getNumbers () { //숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i =0; i< 4; i += 1){
        const chosen = candidate.splice(Math.floor(Math.random() * (9-i)), 1) [0] ;
        array.push(chosen);
    }
    return array;
}

const NumberBaseball = () => {
    const [result, setResult] = useState(''); 
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(value === answer.join('')){  //답을 제출하면 답을 비교
            setResult('홈런!');
            setTries((prevTries)=> {
                return [...prevTries, {try : value, result: '홈런!' }] 
            });
            alert('게임을 다시 시작합니다.');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
        }else{ //답이 아닐 경우
            const answerArry = value.split('').map( (v)=> parseInt(v));
            let strike =0;
            let ball = 0;
            if(tries.length >= 9) { //10번 이상  틀렸을 때
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')} 였습니다!`);
                alert('게임을 다시 시작합니다.');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            }else { 
                for (let i =0; i < 4; i += 1) {
                    if(answerArry[i] === answer[i]) {
                        strike += 1;
                    } else if(answer.includes(answerArry[i])){
                        ball += 1;
                    }
                }
                setTries((prevTries)=> [...prevTries, {try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}]);
                setValue('');
            }
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    //map이란 리액트에서 반복문을 사용하는 함수
    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput}/>
            </form>
            <div>시도: {tries.length} </div>
            <ul>
                {tries.map( (v,i) => {
                    return ( //key값에는 i 자체를 쓰면 안된다. 성능이 최적화 할 때 react에서 key를 보고 판단하는데 뭐를 바꿨는 지 알 수 없어서 사용하면 안됨.
                        //key에 index를 넣으면 안됨
                        <Try key={`${i + 1}차 시도`} tryInfo={v}/> //code가 길어질 경우 컴포넌트 단위로 분리시켜 가져오는 게 가독성에 좋다.
                        //컴포넌트를 가져올 때 key, value값을 인식하지 못하기 때문에 value={} 와 index={} 로 가져가야한다.
                    );
                })}
            </ul>
        </>
    );

};


//다른 곳에서도 사용할 수 있게 모듈화 한다.
export default NumberBaseball;


