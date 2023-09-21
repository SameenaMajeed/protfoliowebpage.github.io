/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


///////////////////////form validation////////////////////////////////

var  nameError = document.getElementById('name-error');
var  phoneError = document.getElementById('phone-error');
var  emailError = document.getElementById('email-error');
var  messageError = document.getElementById('message-error');
var  submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value

    if(name.lenght==0)
    {
        nameError.innerHTML='name is required'
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Write full name'
        return false; 
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #0ae641;"></i>'
    return true
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value

    if(phone.lenght==0)
    {
        phoneError.innerHTML='phone no is required'
        return false
    }
    if(phone.lenght!=10)
    {
        phoneError.innerHTML='phone no should be 10 digit'
        return false
    }
    if(!phone.match( /^\d{10}$/)){
        phoneError.innerHTML='Only digit'
        return false; 
    }
    phoneError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #0ae641;"></i>'
    return true
}
function validateEmail(){
    var email = document.getElementById('contact-email').value

    if(email.lenght==0)
    {
        emailError.innerHTML='Email is required'
        return false
    }
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Email Invalid'
        return false
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #0ae641;"></i>'
    return true
}
function validateMessage(){
    var msg=document.getElementById('contact-msg').value
    var required=60
    var left=required-messageError.lenght
     
    if(left>0)
    {
        messageError.innerHTML=left+'more characters required'
        return false
    }
    messageError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #0ae641;"></i>'
    return true
}
function validateForm(){
    if(!validateName()||validatePhone()||validateEmail()||validateMessage()){
        submitError.style.display='block'
        submitError.innerHTML='please fix error to submit'
        setTimeout(function(){
            submitError.style.display='none';},10000)
        }
    }