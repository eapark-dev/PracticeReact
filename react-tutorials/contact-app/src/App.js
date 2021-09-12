import PhoneForm from './components/PhoneForm';
import React, { Component } from 'react';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0;

  state = {
    information: [],
  }

  //리액트 불변성 지키기 
  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information : this.state.information.concat(Object.assign({},data,{
        ...data,
        id:this.id++
      }))
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default App;
