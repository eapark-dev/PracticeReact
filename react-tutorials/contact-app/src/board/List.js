import React, { Component } from 'react';
import Data from './Data';

class CreateInputSearchBox extends Component{
    render() {
        return (
            <form>
                <input type="text" />
                <button type="submit">검색</button>
            </form>
        );
    }
}


class CreateTable extends Component{
    render() {
        const talbeStyle = {
            width : "100%",
            border : "1px solid black",
        }
        const rows = [];
        
        return (
            <table style={talbeStyle}>
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        );
    }
}

class List extends Component {
    render() {
        return (
            <div>
            <CreateInputSearchBox/>
            <CreateTable/>
            </div>
        );
    }
}



export default List;