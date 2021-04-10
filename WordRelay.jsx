//파일을 분리할 때에는 아래 두개를 필수로 넣어줘야한다.
const React = require('react');
const { Component } = React;

class WordRelay extends React.Component {
    state = {
        text : "Hello, webpack",
    };

    render() {
        return <h1>{this.state.text}</h1>
    };
 }

 //node의 모듈 시스템, 밖에서도 해당 파일을 사용할 수 있게 하기위해 작성
 module.exports = WordRelay;