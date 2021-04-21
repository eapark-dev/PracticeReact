import React, { PureComponent } from 'react';

class Try extends PureComponent {
    //component를 잘게 쪼개 사용하는 게 중요하다. 
    render() {
        const {tryInfo} = this.props;
        return (
            <li>
                <div>{this.props.tryInfo.try}</div>
                <div>{this.props.tryInfo.result}</div>
            </li>
        );
    }
}

// class Try extends Component {
//     render() { //props가 생기면서 부모 자식관계가 생긴다. 부모 컴포넌트가 자식 컴포넌트한테 props를 준다.
//         return (
//             <li>
//                 <div>{this.props.tryInfo.try}</div>
//                 <div>{this.props.tryInfo.result}</div>
//             </li>
//         )
//     }
// }

export default Try;

