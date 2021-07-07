const signupBtn = document.querySelector('.signup-btn')
const loginBtn = document.querySelector('.login-btn')
const modalSignupBtn = document.querySelector('.modal-signup-btn')
const modalLoginBtn = document.querySelector('.modal-login-btn')
const closeBtn = document.querySelector('.close-btn')
const overlay = document.querySelector(".overlay")

function openModal() {
    overlay.style.display = "block"
}

function closeModal() {
    overlay.style.display = "none"
}

signupBtn.addEventListener('click', openModal)
loginBtn.addEventListener('click', openModal)
modalLoginBtn.addEventListener('click', closeModal)
modalSignupBtn.addEventListener('click', closeModal)
closeBtn.addEventListener('click', closeModal)