import React, {Component} from 'react';
//PureComponent를 사용하면 shouldComponentUpdate 함수를 자동으로 구현해주어 불필요한 렌더링을 막아준다.
//PureComponent의 단점은 배열이나 참조 컴포넌트가 생기면 진짜 바뀌었는 확인 하는데 어려워한다.
class renderTest extends Component {
    state = {
        counter : 0,
    };

    onClick = () => {
        this.setState( {});
    }

    //현재 카운터와 미래의 카운터가 다르면 렌더링을 진행한다.
    //불필요한 렌더링을 없애기 위해 스스로 체크 해야한다.
    //최적화 하기 위한 연습을 해야한다. 
    //바뀌는 게 없으면 렌더링이 안되도록 최적화 연습을 해야한다.
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.state.counter !== nextState.counter ) {
            return true;
        }
        return false;
    }

    render() {
        console.log('렌더링', this.state);
        return (<div>
            <button onClick={this.onClick}>클릭</button>
        </div>

        )
    }
}

export default renderTest;