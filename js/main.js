// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})
const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput=document.querySelector('.login-email');
const passwordInput=document.querySelector('.login-password');
const loginSignup=document.querySelector('.login-signup');

const listusers=[
  {id:01,
    email:'maks@sfsfsf.com',
    password:'12345',
    displayName:'maks'
  },
  {id:02,
    email:'sanya@sfsfsf.com',
    password:'777777',
    displayName:'sanya'
  },
  {id:03,
    email:'ira@sfsfsf.com',
    password:'3333333',
    displayName:'iraid:'
  }
];
 
const setUsers={
  user:null,
  logIn(){console.log('вход')},
  logOut(){console.log('выход')},
  signIn(){console.log('регистрация')} 
};





// const setUsers={
//   user: null,
//   login:(){
//     console.log

//   },
//   logOut(){},
//   signIn(){}
// }

// setUsers.login();
