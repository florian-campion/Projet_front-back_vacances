import axios from 'axios';
    axios
      .post('http://192.168.43.152:1337/api/auth/local', {
        identifier: document.querySelector('#identifier').value,
        password: document.querySelector('#password').value,
      })
      .then(response => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        let tokens = response.data.jwt;
        localStorage.setItem('tokens', JSON.stringify(tokens));
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });
