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

btn.addEventListener('click', () => {
  jsonPost("http://students.a-level.com.ua:10012", {func: 'addMessage', nick: nick.value, message: message.value})
});

(function(){
  setInterval(function(){
    var nextMessageId = 0;
    jsonPost("http://students.a-level.com.ua:10012", {func: "getMessages", nextMessageId})
  .then(res => {
    for(let i = nextMessageId; i < res.data.length; i++){
      let container = document.createElement('div');
      container.className = 'container';
      let containerNick = document.createElement('h3');
      containerNick.className = 'containerNick';
      let containerMessage = document.createElement('p');
      containerMessage.className = 'containerMessage';
      containerNick.innerHTML = res.data[i].nick;
      containerMessage.innerHTML = res.data[i].message;
      container.appendChild(containerNick);
      container.appendChild(containerMessage);
      chatHistory.appendChild(container);
      chatHistory.insertBefore(container, chatHistory.firstChild);
      console.log(res.data[i]);
    }
    nextMessageId = res.nextMessageId;
  });
  }, 3500);
})();