//파일을 쪼개는 경우 꼭 필요한 패키지 라이브러리를 가져와야한다.
const React = require('react');
const { Component } = React;

class WordRelay extends React.Component {
    state = {
        text: "Hello, webpack",
    };

    render(){
        return <h1>{this.state.text}</h1>
    }

}

//다른 곳에서도 사용할 수 있게 모듈화 한다.
module.exports = WordRelay;