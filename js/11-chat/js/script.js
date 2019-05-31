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
    var messageId = 0;
      jsonPost("http://students.a-level.com.ua:10012", {func: "getMessages", messageId})
        .then(res => {
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
          }
          messageId = res.nextMessageId;
          console.log(messageId);
        });
    }, 3500
  );
})();