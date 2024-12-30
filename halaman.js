let navmenu = document.getElementById('nav-menu');
let nav = document.getElementById('nav');
let body = document.body;
let darkmode = document.getElementById('dark-mode');
let lightmode = document.getElementById('light-mode');
lightmode.style.display = 'none';
function mode(background) {
  if (background === 'dark') {
    body.classList.add('darkmode');
    fakebot.style.color = 'white';
    fakebot.style.backgroundColor = '#0b1419';
    mymodal.style.color = 'white';
    mymodal.style.backgroundColor = '#0b1419';
    navmenu.style.backgroundColor = '#0b1419';
    nav.style.backgroundColor = '#0b1419';
    navmenu.style.color = 'white';
    if (window.innerWidth <= 1024) {
      navmenu.style.backgroundColor = '#ffffff';
      navmenu.style.color = 'black';
    }
    darkmode.classList.add('tracking-out-contract-bck-top');
    setTimeout(() => {
      darkmode.style.display = 'none';
    }, 500);
    lightmode.classList.add('tracking-in-expand-fwd-top');
    setTimeout(() => {
      lightmode.classList.remove('tracking-out-contract-bck-top');
      lightmode.style.display = 'block';
    }, 500);
  } else if (background === 'light') {
    body.classList.remove('darkmode');
    fakebot.style.color = 'black';
    mymodal.style.color = 'black';
    mymodal.style.backgroundColor = 'white';
    fakebot.style.backgroundColor = 'white';
    navmenu.style.backgroundColor = '#ffffff';
    nav.style.backgroundColor = '#ffffff';
    navmenu.style.color = 'black';
    if (window.innerWidth <= 1024) {
      navmenu.style.backgroundColor = '#0b1419';
      navmenu.style.color = 'white';
    }
    lightmode.classList.add('tracking-out-contract-bck-top');
    setTimeout(() => {
      lightmode.classList.remove('tracking-in-expand-fwd-top');
      lightmode.style.display = 'none';
    }, 500);
    darkmode.classList.add('tracking-in-expand-fwd-top');
    setTimeout(() => {
      darkmode.classList.remove('tracking-out-contract-bck-top');
      darkmode.style.display = 'block';
    }, 500);
  }
}

let bot = document.getElementById('bot');
let border = document.getElementById('border');
let loader = document.createElement('div');
let load = document.createElement('div');
let bg = document.getElementById('bg');
let navbars = document.getElementById('nav-bars');
let navclose = document.getElementById('nav-close');
let account = document.getElementById('account');
let content = document.querySelector('.login-user');
let h1 = document.getElementById('h1');
let useradmin = document.getElementById('user-admin');
h1.textContent = `login or register first to see content`.toUpperCase();
content.style.display = 'none';
load.style.display = 'none';
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
    bot.style.display = 'block';
    body.classList.remove('no-scroll');
  } else if (localStorage.getItem('username') === userlogin.trim() && localStorage.getItem('password') === passlogin.trim()) {
    localStorage.setItem('refresh', 'true');
    useradmin.innerText = `${userlogin.toUpperCase()}`;
    logout.style.display = 'block';
    account.style.display = 'none';
    border.style.display = 'none';
    h1.style.display = 'none';
    content.style.display = 'block';
    bot.style.display = 'block';
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

let massagecontent = document.querySelector('.massage-content');
function register() {
  let userregis = document.getElementById('user-register').value;
  let passregis = document.getElementById('pass-register').value;
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
    bot.style.display = 'block';
    content.style.display = 'block';
    border.style.display = 'none';
    h1.style.display = 'none';
    body.classList.remove('no-scroll');
  } else {
    content.style.display = 'none';
  }
};

// fake bot //
let fakebot = document.getElementById('fakebot');
let closebot = document.getElementById('close-bot');
bot.style.display = 'none';
fakebot.style.display = 'none';
closebot.addEventListener('click', function () {
  fakebot.classList.add('tracking-out-contract-bck-top');
  setTimeout(() => {
    fakebot.style.display = 'none';
  }, 500);
});

bot.addEventListener('click', function () {
  fakebot.classList.remove('tracking-out-contract-bck-top');
  if (window.innerWidth <= 1024) {
    navbars.style.display = 'block';
    navclose.style.display = 'none';
    navmenu.classList.add('scale-out-hor-right');
  }
  fakebot.classList.add('tracking-in-expand-fwd-top');
  setTimeout(() => {
    fakebot.style.display = 'block';
  }, 500);
});

let question = document.getElementById('question');
let useranswer = document.getElementById('user-answer');

let init = 0;
let data = {};

const umur = () => {
  const userAge = parseInt(data.usia);
  if (userAge === 18) {
    return 'sama';
  } else if (userAge < 18) {
    return 'lebih muda';
  } else if (userAge > 18) {
    return 'lebih tua';
  }
};

const botsay = () => {
  return [
    `perkenalkan saya kafkabot, siapa nama kamu ? `,
    `halo , ${data.nama} berapa usia kamu ? `,
    `ohh, ${data.usia} wahh umur kamu ${umur()} dengan saya lohh , btw hobi kamu apa ?`,
    `wawww hobi kamu ${data.hobi} menarik juga kalau rumah kamu dimana`,
    `di ${data.alamat} kalau saya di bandung kapan kapan kita main ya,, babayyy`,
  ];
};

question.innerHTML = botsay()[0];

const botstart = function () {
  init++;
  if (useranswer.value === '') {
    trans.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    mymodal.classList.add('tracking-in-expand-fwd-top');
    mymodal.classList.remove('tracking-out-contract-bck-top');
    massagecontent.innerHTML = 'please fill in all fields'.toUpperCase();
    mymodal.style.display = 'block';
    trans.classList.add('no-interaction');
    return;
  }
  if (init === 1) {
    setTimeout(() => {
      data.nama = useranswer.value;
      botdelay();
    }, 1000);
  } else if (init === 2) {
    setTimeout(() => {
      data.usia = useranswer.value;
      botdelay();
    }, 1000);
  } else if (init === 3) {
    setTimeout(() => {
      data.hobi = useranswer.value;
      botdelay();
    }, 1000);
  } else if (init === 4) {
    setTimeout(() => {
      data.alamat = useranswer.value;
      botdelay();
    }, 1000);
  } else if (init === 5) {
    finishing();
  } else {
    botend();
  }
};

function botdelay() {
  question.innerHTML = botsay()[init];
  useranswer.value = '';
}

function botend() {
  useranswer.value = '';
  location.reload();
}

function finishing() {
  question.innerHTML = 'Sampai jumpa, semoga harimu menyenankan!';
}
