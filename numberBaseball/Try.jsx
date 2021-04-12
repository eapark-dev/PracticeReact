import React, { Component } from 'react';

class Try extends Component {
    render() { //props가 생기면서 부모 자식관계가 생긴다. 부모 컴포넌트가 자식 컴포넌트한테 props를 준다.
        return (
            <li> 
                <b>{this.props.value.fruit}</b> - {this.props.index} 
                <div>컨텐츠</div>
                <div>컨텐츠1</div>
                <div>컨텐츠2</div>
                <div>컨텐츠3</div>
            </li>
        )
    }
}

export default Try;

