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
const regExpValidEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput=document.querySelector('.login-email');
const passwordInput=document.querySelector('.login-password');
const loginSignup=document.querySelector('.login-signup');
const userElem=document.querySelector('.user');
const userNameElem=document.querySelector('.user-name');
const exitElem = document.querySelector('.exit');
const editElem = document.querySelector('.edit');
const editContainer = document.querySelector('.edit-container');
const editUsername= document.querySelector('.edit-username');
const editPhotoURL=document.querySelector('.edit-photo');
const userAvatarElem=document.querySelector('.user-avatar');

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
    if(!regExpValidEmail.test(email)) { 
      alert('email невалиден')
      eturn;
    }
    const user=this.getUsers(email);
    if(user&&user.password===password){
      this.autorizedUser(user);
      handler();
    } else {alert('Пользователь с такими данными не найден')}
  },
  logOut(handler){
    this.user=null;
    handler();
  },
  
  signUp(email,password, handler){
    if(!regExpValidEmail.test(email)) { 
      alert('email невалиден')
      eturn;
    }
    if  ( !email.trim()|| !password.trim()){
      alert('Введите данные')
      return;
    }
    if(!this.getUsers(email) ){
      const user={email,password,displayName:email};
      listUsers.push(user)
      this.autorizedUser(user)
      handler();
    }
      else{alert('Пользователь с таким именем уже зарегистрирован')}
    },
    editUser(userName, userPhoto, handler){
      if(userName){
        this.user.displayName=userName;
      }

      if(userPhoto){
        this.user.photo=userPhoto;
      }
      handler();  
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
      userAvatarElem.src=user.photo|| userAvatarElem.src;
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
exitElem.addEventListener('click', event=>{
 event.preventDefault();
 setUsers.logOut(toggleAuthDom);
 
});

editElem.addEventListener('click',event=>{
  event.preventDefault();
  editContainer.classList.toggle('visible');
});

editContainer.addEventListener('click',event=>{
  event.preventDefault();
  setUsers.editUser(editUsername.value,editPhotoURL.value, toggleAuthDom)
});
toggleAuthDom();

