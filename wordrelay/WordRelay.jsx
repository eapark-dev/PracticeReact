//파일을 쪼개는 경우 꼭 필요한 패키지 라이브러리를 가져와야한다.
const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
    const [Word, setWord] = useState('박은아');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);


    const onSubmitForm = (e) => {
        e.preventDefault();
        if(Word[Word.length -1] == value[0]) {
            setResult('딩동댕');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        }   else{
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>{Word}</div>
            <form onSubmit = {onSubmitForm}>
                <input ref={inputRef} value={value} onChange={onChangeInput}/>
                <button>입력</button>
            </form>
            <div>{result}</div>
        </>
    );
}

//다른 곳에서도 사용할 수 있게 모듈화 한다.
module.exports = WordRelay;