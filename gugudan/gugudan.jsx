const React = require('react');
const { Component } = React;

class GuGuDan extends React.Component {
    state = {
        first : Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value : '',
        result : '',
    };

    onSubmit = (e) => { //gugudan submit 후 동작 
        e.preventDefault();
        if(parseInt(this.state.value)=== this.state.first * this.state.second){
            this.setState ( (prevState) => { //data를 변화시키면 알아서 화면에 넣어줌
                return {
                    result : this.state.first + ' X ' + this.state.second + '='+ this.state.value + ' 정답!',
                    first : Math.ceil(Math.random() * 9),
                    second : Math.ceil(Math.random() * 9),
                    value : '',
                };
            });
            this.input.focus();
        }else{
            this.setState ({
                result : '땡',
                value : '',
            });
            this.input.focus();
        }

    };

    onChange = (e) => { //값이 변경될 때 타겟 벨류 
        this.setState({value : e.target.value}) ;
    }; 

    refInput = (c) => { 
        this.input = c;
    } ;

    render() {
        return ( 
            //setState에는 직접 바꿀 것들만 넣어야함 , () ==> 그룹 연산자, 우선순위 높일 때만 사용 , 없어도 됨
            //사용하지 않는 div 제거 하기 위해서 Reaact.Fragment 사용 , react 호환이 되면 <> 빈 태그 넣기 
            <React.Fragment>
                <div>{this.state.first} 곱하기 {this.state.second}는?</div>
                    <input ref={this.refInput} type="number"  value={this.state.value} onChange= {this.onChange}/> 
                    <button onClick= {this.onSubmit}>입력!</button>
                <div>{this.state.result}</div>
            </React.Fragment>
        );
    }

};

module.exports = GuGuDan;