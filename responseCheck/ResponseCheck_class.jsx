import React, { Component } from 'react';

class ResponseCheck extends Component {
    state = {
        state : 'waiting',
        message : '클릭해서 시작하세요',
        result : [],
    };

    //랜더링이 되지 않도록 하기 위해 state안이 아니라 바깥에 두어야함.
    timeout;
    startTime;
    endTime;
    //클래스 사용시 구조분해 필수
    onClickScreen = () => {
        const { state, message, result } = this.state;
        if(state === 'waiting') {
            this.setState( {
                state : 'ready',
                message : '초록색이 되면 클릭하세요',
            });
            this.timeout = setTimeout( () => {
                this.setState( {
                    state : 'now',
                    message : '지금 클릭',
                });
                this.startTime = new Date();
            },  Math.floor( Math.random() * 1000) + 2000); //2~3초 랜덤
        } else if (state === 'ready') {
            clearTimeout(this.timeout); //timeout 초기화
            this.setState( {
                state : 'waiting' ,
                message : '성급하시군요! 초록색이 된 후에 클릭하세요.',
            });
            
        }else if( state === 'now') {
            this.endTime = new Date();
            this.setState( (prevState) =>  {
                return {
                    state : 'waiting' ,
                    message : '클릭해서 시작하세요',
                    result: [...prevState.result, this.endTime - this.startTime ],
                };
            });
        }
    };

    renderAverage = () => {
        const {result} = this.state;
        return result.length === 0
            ? null //태그가 없는 걸 의미함
            : <>
                <div>평균시간 : {result.reduce((a,c) => a + c) / result.length}ms</div>
                <button onClick={this.onReset}>리셋</button>
            </>

    };

    onReset = () => {
        this.setState ({
            result : [],
        });
    }

    render() { //jsx안에서는 for과 if를 쓸 수 없다.
        const  {state, message} = this.state;
        return(
            <>
                <div
                    id="screen"
                    className={state} //css -> class
                    onClick = {this.onClickScreen}
                >
                    {message}
                </div>
                {this.renderAverage()}
            </>
        );
    }
}

export default ResponseCheck;