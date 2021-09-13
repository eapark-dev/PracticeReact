import React, { Component } from 'react';

class Data extends Component {
    render() {
        const Data = [
            {age: "15", name: "홍길동", score: "50", phone: "010-1234-5678"},
            {age: "17", name: "박길동", score: "70", phone: "010-3333-5678"},
            {age: "19", name: "김길동", score: "90", phone: "010-5556-5678"},
            {age: "14", name: "정길동", score: "100", phone: "010-1235-5678"},
            {age: "16", name: "이길동", score: "85", phone: "010-6666-5678"},
        ];
        return (
                {Data}
        );
    }
}

export default Data;