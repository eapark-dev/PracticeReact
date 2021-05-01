import React, {Component} from 'react';
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

class Lotto extends Component {
    state = {
        winNumbers: getWinNumbers(), // 당첨 숫자들
        winBalls : [], //앞에 6개의 공
        bnous : null, // 보너스 공
        redo: false,
    };

    timeouts = [];

    runTimeounts = () => {
        const {winNumbers} = this.state
        for (let i =0; i<winNumbers.length -1; i++) {
            this.timeouts[i] = setTimeout(() => {
                this.setState((prevState) => {
                    return {
                    winBalls: [...prevState.winBalls, winNumbers[i]],
                    };
                });
            }, (i + 1) * 1000);
        }
        this.timeouts[6] = setTimeout(()=>{
            this.setState( {
                bnous : winNumbers[6],
                redo : true  , //한번 더 버튼이 보너스 공까지 나왔을 때 다시 뽑을 수 있도록 표시되기 위해 true로 해줌
            });
        } , 7000)
    };

    componentDidMount() {
        this.runTimeounts();
    }

    componentWillUnmount() {
        this.timeouts.forEach( (v) => {
            clearTimeout(v);
        });
    }

    componentDidUpdate(preveProps, prevState) {
        if(this.state.winBalls.length === 0) {
            this.runTimeounts();
        }
    }

    onClickRedo = () => {
        this.setState({
            winNumbers: getWinNumbers(), // 당첨 숫자들
            winBalls : [], //앞에 6개의 공
            bnous : null, // 보너스 공
            redo: false,
        });
        this.timeouts = [];
    };

    render() {
        const {winBalls, bnous, redo} = this.state;
        return (
            <> 
                <div>당첨 숫자</div>
                <div id="결과창">
                    {winBalls.map((v) => <Ball key={v} number={v} />)}
                </div>
                <div>보너스!</div>
                {bnous && <Ball number = {bnous} />}
                {redo && <button onClick={this.onClickRedo} >한번 더!</button>}
            </>
        );
    }
}

export default Lotto;