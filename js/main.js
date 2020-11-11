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
const userElem=document.querySelector('.user');
const userNameElem=document.querySelector('.user-name');



const listUsers=[
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
  logIn(email,password,handler){
    const user=this.getUsers(email);
    if(user&&user.password===password){
      this.autorizedUser(user);
      handler();
    } else {alert('Пользователь с такими данными не найден')}
  },
  logOut(){console.log('выход')},
  
  signUp(email,password, handler){
    if(!this.getUsers(email)){
      const user={email,password,displayName:email};
      listUsers.push(user)
      this.autorizedUser(user)
      handler();
    }
      else{alert('Пользователь с таким именем уже зарегистрирован')}
    },
    getUsers(email){
     return listUsers.find(item=> item.email===email)

    },
    autorizedUser(user){
      this.user=user;
    }  
  };

  const toggleAuthDom = ()=>{
    const user = setUsers.user;
    console.log('user:',user);
    if(user){
      loginElem.style.display ='none';
      userElem.style.display='';
      userNameElem.textContent=user.displayName;
    } else{
      loginElem.style.display='';
      userElem.style.display='none';
    }
  };


loginForm.addEventListener('submit',(event)=>{
  event.preventDefault();

  const emailVelue=emailInput.value;
  const passwordVelue=passwordInput.value;
  
  setUsers.logIn(emailVelue,passwordVelue,toggleAuthDom);
 
});

loginSignup.addEventListener('click', event=>{
  event.preventDefault();
  const emailVelue=emailInput.value;
  const passwordVelue=passwordInput.value;
  
  setUsers.signUp(emailVelue,passwordVelue,toggleAuthDom);
 
});

toggleAuthDom();

