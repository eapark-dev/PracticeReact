import React, {Component} from 'react';

//클래스의 경우 -> constructor -> render -> ref -> componentDidMount -> {setState/props 바뀔 때 -> shouldComponetUpdate(true)-> render -> componentDidUpdate}
// 부모가 나를 없앨을 때 -> componentWillUnmount -> 소멸 

const rspCords = {
    바위 : '0',
    가위 : '-142px',
    보: '-289px',
}

const scores = {
    바위 : 1,
    가위 : 0,
    보: -1,
}


class RockscissorPaper extends Component {
    state = {
        result : '',
        imgCoord : '0',
        score : 0,
    };

    interval;

    componentDidMount() { //랜더가 처음 실행되고 componentDidMount가 실행된다. , 처음 랜더가 성공적으로 수행되었을 때만 실행됨.
        //비동기 함수가 바깥에 변수를 참조하면 클로저 문제가 발생한다. 항상 안에 넣기.
        this.interval = setInterval( ()=> { 
            const {imgCoord} = this.state;
            if (imgCoord === rspCords.바위) {
            this.setState({
                imgCoord: rspCords.가위,
            });
            } else if (imgCoord === rspCords.가위) {
            this.setState({
                imgCoord: rspCords.보,
            });
            } else if (imgCoord === rspCords.보) {
            this.setState({
                imgCoord: rspCords.바위,
            });
            }
        }, 1000);
    }

    componentDidUpdate() { //리렌더링 후 실행
        //this.interval = setInterval(this.changeHand, 100);
    }

    componentWillUnmount() { // 컴포넌트가 제거되기 직전 실행. 비동기 요청 정리를 많이 함
        clearInterval(this.interval);
    }

    onClickBtn = (choice) => {

    }

    render() {
        const {result, score, imgCoord} = this.state; //imgCord : 이미지 좌표
        return(
            <>
                <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
                <div>
                    <button id="rock" className="btn" onClick={() => this.onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={() => this.onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={() => this.onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        );
    }
}

export default RockscissorPaper;