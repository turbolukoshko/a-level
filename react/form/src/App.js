import React from 'react';
import logo from './logo.svg';
import './App.css';

// class PasswordComparison extends React.Component {
//   constructor(props){
//     super(props);

//     this.state = {value: ''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event){
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState(
//       {
//         [name]: value
//       }
//     );
//     console.log(value);
//   }

//   handleSubmit(event){
//     if(this.state.enterPassword === this.state.confirmPassword){
//       alert('Password true');
//     }else{
//       alert('Password wrong');
//     }
//     event.preventDefault();
//   }

//   render(){
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Enter password:
//           <input 
//             type="text"
//             name="enterPassword"
//             id="enter"
//             value={this.state.enterPassword} 
//             onChange={this.handleChange}/>
//         </label>
//         <br/>
//         <label>
//           Confirm password:
//           <input 
//             type="text" 
//             name="confirmPassword"
//             value={this.state.confirmPassword} 
//             onChange={this.handleChange}/>
//         </label>
//         <br/>
//         <input type="submit" value="Submit"/>
//       </form>
//     );
//   }
// }

class Input extends React.Component {
  constructor(props){
      super(props)
      this.state = {value: '',
                    value2: '', 
                    valid: false}

      this.handleChange = this.handleChange.bind(this)
      this.handleChange2 = this.handleChange2.bind(this);

      this.validate     = this.validate.bind(this)
  }

  handleChange(e){
      this.setState({value: e.target.value})
      console.log(e.target.value, this.state.value,e.target.value === this.state.value)
      this.setState(this.validate)
  }

  handleChange2(e){
    this.setState({value2: e.target.value});
    this.setState(this.validate);
  }

  validate(state){
      console.log(state)
      return {
          valid: (state.value === state.value2) && (state.value != '') && (state.value.length > 2)
      }
  }

  render(){
      return(
          <div>
            <label>
              Enter password:
              <input value={this.state.value} 
                onChange={this.handleChange}
                style={{backgroundColor: this.state.valid ? '' : '#F99'}}
              />
            </label>
            <br/>
            <label>
              Confirm password:
              <input value={this.state.value2} 
                onChange={this.handleChange2}
                style={{backgroundColor: this.state.valid ? '' : '#F99'}}
              />
            </label>
          </div>
      )
  }
}

class ChatInputs extends React.Component {
  constructor(props){
      super(props)

      this.state = {
          nick: '',
          message: ''
      }

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    
    this.props.onSend(this.state.nick, this.state.message)
    this.setState({message: ''});
  }

  render(){
      console.log(this.props)
      return (
          <div>
              <input placeholder='Nick'
                  value={this.state.nick}
                  onChange={e => this.setState({nick: e.target.value})}
              />
              <input placeholder='Message'
                  value={this.state.message}
                  onChange={e => this.setState({message: e.target.value})}
              />
              <button onClick={this.handleChange} 
                disabled={((this.state.nick === '') || (this.state.message === '')) ? true : false}
                >Send...</button>
          </div>
      )
  }

  static get defaultProps(){
      return {
          onSend(){
              throw new Error(`Looks like you've forget onSend prop in ChatInputs`)
          }
      }
  }

}

function jsonPost(url, data)
{
    return new Promise((resolve, reject) => {
        var x = new XMLHttpRequest();   
        x.onerror = () => reject(new Error('jsonPost failed'))
        //x.setRequestHeader('Content-Type', 'application/json');
        x.open("POST", url, true);
        x.send(JSON.stringify(data))

        x.onreadystatechange = () => {
            if (x.readyState == XMLHttpRequest.DONE && x.status == 200){
                resolve(JSON.parse(x.responseText))
            }
            else if (x.status != 200){
                reject(new Error('status is not 200'))
            }
        }
    })
}

function getTime(timestamp) {
    let time = new Date(timestamp).toLocaleTimeString("en-US")
    return time;
}

let Message = ({msg}) =>
<div>
    <b>{msg.nick}</b>:{msg.message} {getTime(msg.timestamp)}
</div>

class ChatHistory extends React.Component {
    constructor(props){
        super(props)


        this.state = {messages:[ ] } 
    }


    componentDidMount(){
        this.interval = setInterval(() => {
            console.log('TUT GET MESSAGES')
            jsonPost("http://students.a-level.com.ua:10012", {func: 'getMessages'}).then( data => this.setState({messages: data.data.reverse()})
        , 2000)}
      )};

    render(){
        return (
            <div>
            {this.state.messages.length > 0 ? this.state.messages.map(msg => <Message msg={msg} />)
                                            : "LOADING"}
            </div>
        )
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
}

function App() {
  return (
    <div className="App">
      <Input/>
      <ChatInputs onSend={(nick, message) => jsonPost("http://students.a-level.com.ua:10012", {func: 'addMessage', nick, message})}/>
      <ChatHistory/>
    </div>
  );
}

export default App;
