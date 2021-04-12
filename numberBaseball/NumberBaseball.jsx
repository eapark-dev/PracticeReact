//파일을 쪼개는 경우 꼭 필요한 패키지 라이브러리를 가져와야한다.
import React, { Component } from 'react';
import Try from './Try';

function getNumbers () { //숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries:[], 
    };

    onSubmitForm = () => {

    };

    onChangeInput = () => {

    };

    fruits = [
        {fruit:'사과',taste:'맛있다'},
        {fruit:'밤',taste:'딱딱하다'},
        {fruit:'배',taste:'시원하다'},
        {fruit:'귤',taste:'달다'},
        {fruit:'딸기',taste:'달콤하다'},
    ];

    render(){
        //map이란 리액트에서 반복문을 사용하는 함수
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도: {this.state.tries.length} </div>
                <ul>
                    {this.fruits.map( (v,i) => {
                        return ( //key값에는 i 자체를 쓰면 안된다. 성능이 최적화 할 때 react에서 key를 보고 판단하는데 뭐를 바꿨는 지 알 수 없어서 사용하면 안됨.
                            <Try value={v} index={i}/> //code가 길어질 경우 컴포넌트 단위로 분리시켜 가져오는 게 가독성에 좋다.
                            //컴포넌트를 가져올 때 key, value값을 인식하지 못하기 때문에 value={} 와 index={} 로 가져가야한다.
                        );
                    })}
                </ul>
            </>
        );
    }

}


//다른 곳에서도 사용할 수 있게 모듈화 한다.
export default NumberBaseball;


