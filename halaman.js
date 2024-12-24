let border = document.getElementById('border');
let loader = document.createElement('div');
let load = document.createElement('div');
let bg = document.getElementById('bg');
let navbars = document.getElementById('nav-bars');
let navclose = document.getElementById('nav-close');
let navmenu = document.getElementById('nav-menu');
let account = document.getElementById('account');
let content = document.querySelector('.login-user');
let h1 = document.getElementById('h1');
let useradmin = document.getElementById('user-admin');
h1.textContent = `login or register first to see content`.toUpperCase();
content.style.display = 'none';
load.style.display = 'none';
let body = document.body;
border.style.display = 'none';
navclose.style.display = 'none';
load.classList.add('muter');
loader.appendChild(load);
bg.appendChild(loader);
let logout = document.getElementById('logout');
logout.style.display = 'none';
logout.addEventListener('click', function () {
  setTimeout(() => {
    logout.style.display = 'none';
    localStorage.clear();
    location.reload();
  }, 1000);
});

navbars.addEventListener('click', function () {
  navbars.style.display = 'none';
  navclose.style.display = 'block';
  navmenu.classList.remove('scale-out-hor-right');
  navmenu.classList.add('scale-in-hor-right');
  navmenu.style.display = 'flex';
});

navclose.addEventListener('click', function () {
  navbars.style.display = 'block';
  navclose.style.display = 'none';
  navmenu.classList.remove('scale-in-hor-right');
  navmenu.classList.add('scale-out-hor-right');
  setTimeout(() => {
    navmenu.style.display = 'none';
  }, 500);
});

account.addEventListener('click', function () {
  body.classList.add('no-scroll');
  border.classList.add('text-focus-in');
  if (window.innerWidth <= 1024) {
    navbars.style.display = 'block';
    navclose.style.display = 'none';
    navmenu.classList.add('scale-out-hor-right');
  }
  setTimeout(() => {
    border.style.display = 'block';
  }, 1000);
  border.classList.remove('tracking-out-contract-bck-top');
});
function closex() {
  account.style.display = 'block';
  body.classList.remove('no-scroll');
  border.classList.add('tracking-out-contract-bck-top');
  setTimeout(() => {
    border.style.display = 'none';
  }, 500);
}

// daftarr akunn ////
let formregister = document.getElementById('form-register');
let formlogin = document.getElementById('form-login');
let daftar = document.getElementById('daftar');
let masuk = document.getElementById('masuk');
formregister.style.display = 'none';

daftar.addEventListener('click', function () {
  border.classList.add('text-blur-out');

  setTimeout(() => {
    formlogin.style.display = 'none';
    border.classList.add('text-focus-in');
    formregister.style.display = 'block';
    border.style.display = 'none';
  }, 1000);

  setTimeout(() => {
    border.classList.remove('text-blur-out');
    border.style.display = 'block';
  }, 1500);
});

masuk.addEventListener('click', function () {
  border.classList.add('text-blur-out');
  setTimeout(() => {
    formregister.style.display = 'none';
    border.classList.add('text-focus-in');
    formlogin.style.display = 'block';
    border.style.display = 'none';
  }, 1000);

  setTimeout(() => {
    border.classList.remove('text-blur-out');
    border.style.display = 'block';
  }, 1500);
});
// daftar akun selesaii ///

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
  let bgimage = document.getElementById('bg-image');

  mymodal.classList.add('tracking-out-contract-bck-top');
  setTimeout(() => {
    mymodal.style.display = 'none';
  }, 500);
  trans.classList.remove('bg-transparent');
  trans.style.background = bgimage;
  trans.classList.remove('no-interaction');
}

function login() {
  let passlogin = document.getElementById('pass-login').value;
  let userlogin = document.getElementById('user-login').value;
  let massagecontent = document.querySelector('.massage-content');
  let comming = document.getElementById('comming');

  comming.style.color = 'white';
  if (userlogin.trim().toLowerCase() === 'admin' && passlogin.trim() === 'admin123') {
    localStorage.setItem('sebagai', 'admin');
    localStorage.setItem('username', userlogin);
    localStorage.setItem('password', passlogin);
    localStorage.setItem('refresh', 'true');
    useradmin.innerText = `${userlogin.toUpperCase()}`;
    logout.style.display = 'block';
    account.style.display = 'none';
    border.style.display = 'none';
    h1.style.display = 'none';
    content.style.display = 'block';
    body.classList.remove('no-scroll');
  } else if (localStorage.getItem('username') === userlogin.trim().toLowerCase() && localStorage.getItem('password') === passlogin.trim()) {
    localStorage.setItem('refresh', 'true');
    useradmin.innerText = `${userlogin.toUpperCase()}`;
    logout.style.display = 'block';
    account.style.display = 'none';
    border.style.display = 'none';
    h1.style.display = 'none';
    content.style.display = 'block';
    body.classList.remove('no-scroll');
  } else {
    body.classList.add('no-scroll');
    trans.classList.add('bg-transparent');
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
  let regisuser = document.getElementById('regis-user');
  let alert = document.getElementById('alert');
  if (userregis && passregis) {
    localStorage.setItem('sebagai', 'username');
    localStorage.setItem('username', userregis);
    localStorage.setItem('password', passregis);
    load.style.display = 'block';
    regisuser.appendChild(loader);
    setTimeout(() => {
      alert.classList.add('text-focus-in');
      alert.textContent = `you have successfully registered`;
      loader.style.display = 'none';
    }, 1300);
  } else {
    trans.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    mymodal.classList.add('tracking-in-expand-fwd-top');
    mymodal.classList.remove('tracking-out-contract-bck-top');
    massagecontent.textContent = 'please fill in all fields'.toUpperCase();
    mymodal.style.display = 'block';
    trans.classList.add('no-interaction');
  }
}
window.onload = function () {
  if (localStorage.getItem('refresh') === 'true') {
    let storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      useradmin.innerText = `${storedUsername.toUpperCase()}`;
    }
    logout.style.display = 'block';
    account.style.display = 'none';
    content.style.display = 'block';
    border.style.display = 'none';
    h1.style.display = 'none';
    body.classList.remove('no-scroll');
  } else {
    content.style.display = 'none';
  }
};
