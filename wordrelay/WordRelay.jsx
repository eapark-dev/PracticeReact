//파일을 쪼개는 경우 꼭 필요한 패키지 라이브러리를 가져와야한다.
const React = require('react');
const { Component } = React;

class WordRelay extends React.Component {
    state = {
        word: '박은아',
        value: '',
        result: '',
    };

    onSubmitForm = (e)=> {
        e.preventDefault();
        if(this.state.word[this.state.word.length -1] == this.state.value[0]) {
            this.setState({
                result: '딩동댕',
                word : this.state.value,
                value : '',
            });
            this.input.focus();
        }   else{
            this.setState({
                result:'땡',
                value:'',
            });
            this.input.focus();
        }
    };

    onRefInput = (c) => {
        this.input = c;
    };

    onChangeInput = (e) => {
        this.setState({ value: e.target.value });
    };

    input;

    render(){
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }

}

//다른 곳에서도 사용할 수 있게 모듈화 한다.
module.exports = WordRelay;