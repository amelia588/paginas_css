const wrapper=Document.querySelector('.wrapper');
const signUplink=Document.querySelector('.signUp-Link');
const signInlink=Document.querySelector('.signIn-Link');
const toggleLogin=Document.querySelector('.toggle-login');
const close=Document.querySelector('.close');

signUplink.addEventListener('click',()=>{
    wrapper.classList.toggle('show-sign');
    wrapper.classList.add('show-bg');

})

signInlink.addEventListener('click',()=>{
    wrapper.classList.toggle('show-sign');
    wrapper.classList.add('show-bg');
})

toggleLogin.addEventListener('click',()=>{
    toggleLogin.classList.toggle('active');
    wrapper.classList.toggle('active');
})

close.addEventListener('click',()=>{
    toggleLogin.classList.toggle('active');
    wrapper.classList.toggle('active');
    wrapper.classList.remove('show-bg');
})