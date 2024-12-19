let formregister = document.getElementById('form-register');
let formlogin = document.getElementById('form-login');
let masuk = document.getElementById('masuk');
let border = document.getElementById('border');
let loader = document.createElement('div');
let load = document.createElement('div');
let bg = document.getElementById('bg');
formregister.style.display = 'none';
loader.appendChild(load);
bg.appendChild(loader);

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
  mymodal.style.display = 'none';
  trans.style.backgroundColor = 'white';
  trans.classList.remove('no-interaction');
}

function login() {
  let passlogin = document.getElementById('pass-login').value;
  let userlogin = document.getElementById('user-login').value;

  if (userlogin == 'admin' && passlogin == 'admin123') {
    localStorage.setItem('sebagai', 'admin');
    localStorage.setItem('username', userlogin);
    localStorage.setItem('password', passlogin);
  } else {
    localStorage.setItem('modalStatus', 'open');
    trans.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    mymodal.style.display = 'block';
    trans.classList.add('no-interaction');
  }
}
window.onload = function () {
  if (localStorage.getItem('modalStatus') === 'open') {
    trans.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    mymodal.style.display = 'block';
    trans.classList.add('no-interaction');
  } else {
    mymodal.style.display = 'none';
  }

  localStorage.removeItem('modalStatus');
};
