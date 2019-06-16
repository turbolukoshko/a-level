import React from 'react';
import './App.css';

let Wrapper = props =>
  <div className="wrapper">
    {props.children}
  </div>

let Header = props =>
  <div className="header">
    <img src="../images/logo.png" alt="logo" className="logo"/>
    <h3>Super Chat</h3>
  </div>

let ChatForms = props =>
<section className="chat__forms">
  {props.children}
</section>

let NickLabel = props =>
  <label htmlFor="nick">{props.children}</label>

let NickField = props =>
    <input className="nick" id="nick"/>

let MessageLabel = props =>
  <label htmlFor="message">
    {props.children}
  </label>

let MessageField = props =>
  <input type="text" className="message" id="message"></input>

let Send = props =>
  <button className="send" id="send">
    {props.children}
  </button>

let ChatField = props =>
<section className="chat__field">
  {props.children}
</section>

// let History = props =>
//   <ul>
//     {props.texts.map(text => <li className="chat__message">{text}</li>)}
//   </ul>

let History = props =>
  <div className="history">
    {props.children}
  </div>

let HistoryNick = props =>
  <h1 className="history__nick">
    {props.children}
  </h1>
  
let HistoryMessage = props =>
  <p className="history__message">
    {props.children}
  </p>

let HistoryList = props =>
<ul className="history__list">
  <h1 className="history__title">Chat history</h1>
  {props.children}
</ul>

let HistoryElement = props =>
<li className="history__element">
  <HistoryNick>John Doe</HistoryNick>
  <HistoryMessage>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</HistoryMessage>
</li>

function App() {
  return (
      <Wrapper>
        <Header/>
        <ChatForms>
          <NickLabel>Nick</NickLabel>
          <NickField />
          <MessageLabel>Message</MessageLabel>
          <MessageField />
          <Send>Send</Send>
        </ChatForms>
        <ChatField>
          <History>
            <HistoryList>
              <HistoryElement/>
              <HistoryElement/>
            </HistoryList>
          </History>
        </ChatField>
      </Wrapper>
  );
}

export default App;