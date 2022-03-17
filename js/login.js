const APICALL = "http://192.168.43.152:1337/api/auth/local";

const identifier = document.querySelector('.identifier');
const password = document.querySelector('.password');
const connexion = document.querySelector('.connex');
const form = document.querySelector('.formDesk');
const loginFailed = document.querySelector('.failed');

const savedToken = JSON.parse(window.localStorage.getItem('data'));

let saveData = {
  authData: {
    token: ""
  }
}

const dataUser = async (user, password) => {
  const answer = await fetch(APICALL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "identifier": user,
      "password": password
    })
  });

  const data = await answer.json();
  console.log(data);

  if (data.jwt != null) {
    saveData[0] = {
      token: data.jwt
    }
    saveObj();
    window.location.href = '/html/index.html';
  } else {
    loginFailed.getElementsByClassName.display = 'block';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  dataUser(identifier.value, password.value)
});

const saveObj = () => {
  window.localStorage.setItem('data', JSON.stringify(saveData));
}

disconectButton.addEventListener('click', (e) => {
  savedToken[0].token = null;
  saveObj();
  window.location.href = '/html/index.html';
});
