import React, { Component } from 'react';

class ResponseCheck extends Component {
    state = {
        state : 'waiting',
        message : '클릭해서 시작하세요',
        result : [],
    };

    onClickScreen = () => {

    };

    renderAverage = () => {
        const {result} = this.state;
        return result.length === 0
            ? null
            : <div>평균시간 : {esult.reduce((a,b) => a + c) / result.length}ms</div>
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