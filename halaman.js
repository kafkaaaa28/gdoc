let formregister = document.getElementById('form-register');
let formlogin = document.getElementById('form-login');
let masuk = document.getElementById('masuk');
let border = document.getElementById('border');
let loader = document.createElement('div');
let load = document.createElement('div');
let bg = document.getElementById('bg');
let comming = document.getElementById('comming');

formregister.style.display = 'none';
loader.appendChild(load);
bg.appendChild(loader);

function closex() {
  border.classList.add('tracking-out-contract-bck-top');
  setTimeout(() => {
    border.style.display = 'none';
  }, 500);
}
let daftar = document.getElementById('daftar');
daftar.addEventListener('click', function () {
  border.classList.add('text-blur-out');

  setTimeout(() => {
    formlogin.style.display = 'none';
    border.classList.add('text-focus-in');
    formregister.style.display = 'block';
    border.style.display = 'none';
  }, 1000);

  setTimeout(() => {
    loader.classList.add('muter');
    loader.style.display = 'block';
  }, 1000);

  setTimeout(() => {
    border.classList.remove('text-blur-out');
    border.style.display = 'block';
    loader.style.display = 'none';
  }, 2500);
});

masuk.addEventListener('click', function () {
  border.classList.add('text-blur-out');
  setTimeout(() => {
    formregister.style.display = 'none';
    border.classList.add('text-focus-in');
    formlogin.style.display = 'block';
    border.style.display = 'none';
  }, 1000);

  loader.classList.add('muter');
  setTimeout(() => {
    loader.style.display = 'block';
  }, 1000);

  setTimeout(() => {
    border.classList.remove('text-blur-out');
    border.style.display = 'block';
    loader.style.display = 'none';
  }, 2500);
});

document.getElementById('hideshow').addEventListener('click', function () {
  let passlogin = document.getElementById('pass-login');
  if (passlogin.type === 'password') {
    passlogin.type = 'text';
  } else {
    passlogin.type = 'password';
  }
});
document.getElementById('showhide').addEventListener('click', function () {
  let passregister = document.getElementById('pass-register');

  if (passregister.type === 'password') {
    passregister.type = 'text';
  } else {
    passregister.type = 'password';
  }
});
let mymodal = document.getElementById('my-modal');
let trans = document.getElementById('transparent');
mymodal.style.display = 'none';

function tutup() {
  mymodal.classList.add('tracking-out-contract-bck-top');
  setTimeout(() => {
    mymodal.style.display = 'none';
  }, 500);
  trans.style.backgroundColor = 'white';
  trans.classList.remove('no-interaction');
}

function login() {
  let passlogin = document.getElementById('pass-login').value;
  let userlogin = document.getElementById('user-login').value;
  let massagecontent = document.querySelector('.massage-content');

  if (userlogin.trim() === 'admin' && passlogin.trim() === 'admin123') {
    localStorage.setItem('sebagai', 'admin');
    localStorage.setItem('username', userlogin);
    localStorage.setItem('password', passlogin);
    border.style.display = 'none';
    comming.textContent = `Comming soon`;
  } else if (localStorage.getItem('username') === userlogin.trim() && localStorage.getItem('password') === passlogin.trim()) {
    console.log(`user = ${userlogin} pw = ${passlogin}`);
    border.style.display = 'none';
    comming.textContent = `Comming soon`;
  } else {
    trans.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    mymodal.classList.add('tracking-in-expand-fwd-top');
    mymodal.classList.remove('tracking-out-contract-bck-top');
    massagecontent.textContent = 'The username or password is incorrect, or you have not registered'.toUpperCase();
    mymodal.style.display = 'block';
    trans.classList.add('no-interaction');
  }
}

function register() {
  let userregis = document.getElementById('user-register').value;
  let passregis = document.getElementById('pass-register').value;
  let massagecontent = document.querySelector('.massage-content');
  let alert = document.getElementById('alert');
  if (userregis && passregis) {
    localStorage.setItem('sebagai', 'username');
    localStorage.setItem('username', userregis);
    localStorage.setItem('password', passregis);
    alert.classList.add('text-focus-in');
    alert.textContent = `you have successfully registered`;
  } else {
    trans.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    mymodal.classList.add('tracking-in-expand-fwd-top');
    mymodal.classList.remove('tracking-out-contract-bck-top');
    massagecontent.textContent = 'please fill in all fields'.toUpperCase();
    mymodal.style.display = 'block';
    trans.classList.add('no-interaction');
  }
}
