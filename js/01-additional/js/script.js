var credentials = {
  login: 'admin',
  password: 'qwerty',
};

var errorMessage = {
  loginIsInvalid: 'Login is invalid!',
  passwordIsInvalid: 'Password is invalid!',
  loginAndPasswordAreInvalid: 'Login and password are invalid!'
}

form.onsubmit = function(){
  if(credentials.login === login.value && credentials.password === password.value) {
    form.style.backgroundColor = "green";
    return false;
  }else if(credentials.login !== login.value && credentials.password === password.value){
    form.style.backgroundColor = "red";
    document.getElementById("error__message").innerHTML = errorMessage.loginIsInvalid;
    return false;
  }else if(credentials.login === login.value && credentials.password !== password.value){
    form.style.backgroundColor = "red";
    document.getElementById("error__message").innerHTML = errorMessage.passwordIsInvalid;
    return false;
  }else{
    form.style.backgroundColor = 'red';
    document.getElementById("error__message").innerHTML = errorMessage.loginAndPasswordAreInvalid;
    return false;
  }
}