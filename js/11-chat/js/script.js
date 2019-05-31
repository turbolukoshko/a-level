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
var messageId = 0;

btn.addEventListener('click', () => {
  // sendMessage(nick.value, message.value);
  sendAndCheck();
});

async function sendMessage(nick, message){
    await jsonPost("http://students.a-level.com.ua:10012", {func: 'addMessage', nick: nick, message: message});
}

async function getMessages(){
  let res = await jsonPost("http://students.a-level.com.ua:10012", {func: "getMessages", messageId})
  for(var mess of res.data){
    let container = document.createElement('div');
    container.className = 'container';
    let containerNick = document.createElement('h3');
    containerNick.className = 'containerNick';
    let containerMessage = document.createElement('p');
    containerMessage.className = 'containerMessage';
    containerNick.innerHTML = mess.nick;
    containerMessage.innerHTML = mess.message;
    container.appendChild(containerNick);
    container.appendChild(containerMessage);
    chatHistory.appendChild(container);
    chatHistory.insertBefore(container, chatHistory.firstChild);
    console.log(mess);
  }
  messageId = res.nextMessageId;
  console.log(res.data.length);
}

async function sendAndCheck(){
  await sendMessage(nick.value, message.value);
  let hist = await getMessages();
}

async function checkLoop(){
  const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))
  while(true){
    await getMessages();
    await delay(2000);
  }
}

checkLoop();