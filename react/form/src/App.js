import React from 'react';
import logo from './logo.svg';
import './App.css';

class PasswordComparison extends React.Component {
  constructor(props){
    super(props);

    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState(
      {
        [name]: value
      }
    );
    console.log(value);
  }

  handleSubmit(event){
    if(this.state.enterPassword === this.state.confirmPassword){
      alert('Password true');
    }else{
      alert('Password wrong');
    }
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter password:
          <input 
            type="text"
            name="enterPassword"
            id="enter"
            value={this.state.enterPassword} 
            onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          Confirm password:
          <input 
            type="text" 
            name="confirmPassword"
            value={this.state.confirmPassword} 
            onChange={this.handleChange}/>
        </label>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

function App() {
  return (
    <div className="App">
      <PasswordComparison/>
    </div>
  );
}

export default App;
