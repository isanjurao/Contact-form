let Name  = document.querySelector('#name');
let pnum  = document.querySelector('#pnum');
let email = document.querySelector('#email');
let mesg  = document.querySelector('#mesg');
let sub   = document.querySelector('#submit');
let reset = document.querySelector('#reset');

let array = [];

function submit(){
   array.push({NAME  : Name.value, PHONE  :pnum.value, EMAIL  :email.value, MESSAGE:mesg.value});
   alert('hogya bhyi hogay submit')
};

sub.addEventListener('click',submit)

reset.addEventListener('click',()=>{
  document.querySelector('.input').innerText = "";
})


    
    
    