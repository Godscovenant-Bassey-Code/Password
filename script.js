let text = document.getElementById('text-input');
let password = document.getElementById('password-input');
let react = document.getElementById('react-input');
let schoolReact = document.getElementById('school-react-input');
let user = document.getElementById('user-input');
let def = document.getElementById('input-def');
let def1 = document.getElementById('input-def-1');
let schoolInput = document.getElementById('school-input');
let registerPassword = document.getElementById('reg-pass-input');
let textPassword = document.getElementById('reg-input');
const wrapper2 = document.querySelector('.wrapper-2');
const wrapper3 = document.querySelector('.wrapper-3');
const wrapper4 = document.querySelector('.wrapper-4');
const wrapper5 = document.querySelector('.wrapper-5');
const wrapper6 = document.querySelector('.wrapper-6');
const wrapperDef = document.querySelector('.wrapper-def');
const wrapperDef1 = document.querySelector('.wrapper-def-1');
const wrapper = document.querySelector('.wrapper');
const load = document.querySelector('.load');
const passwordCheck = document.querySelector('.password-check');
const passwordCheck1 = document.querySelector('.password-check-1');
const closeBtn = document.querySelector('.close-btn');
const closeBtn1 = document.querySelector('.close-btn-1');
const lock = document.querySelector('.cpass');
// const unlock = document.querySelector('.unlock');
const school = document.querySelector('.home-active');
const login = document.querySelector('.login-active');
const locking = document.querySelector('.lock');
// const unlocking = document.querySelector('.unlock-1');
const schooling = document.querySelector('.home-active-1');
const logining = document.querySelector('.login-active-1');
const splash = document.querySelector('.image');
const navigation = document.querySelector('header');
const splashLoad = document.querySelector('.pageload');
const navbar1 = document.querySelector('.navbar-1');
const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger i');
const logoPhone = document.querySelector('.logo-phone');


text.value = "";
user.value = "";
schoolInput.value = "";
function cpassword(){
if (password.value.length > 4) {
    alert('Password is now saved as ' + password.value);
    wrapper2.classList.add('open');
    wrapper.classList.add('open');
    wrapper.classList.remove('phone');

    document.querySelector(".name").innerHTML = text.value;
} else {
   alert('Create a Password that is more than 4 digit') 
};

if (text.value.length > 6) {
    
} else {
    alert('Create a username that has more than six digit');
    wrapper2.classList.remove('open');
    wrapper.classList.remove('open');
    wrapper.classList.add('open');

    password.value = "";
    text.value = "";

}
}

function epassword(_enter) {

    if (react.value == password.value) {
        alert('Password Correct')
    } else {
        alert('bad')
    };
    react.value = ""

}

function forgot() {
    wrapper3.classList.add('open');
    wrapper2.classList.remove('open');
    user.value = ""
}

function chpassword() {
    if (user.value == text.value) {
        load.classList.add('open')
        setTimeout(()=>{
            load.classList.remove('open')
        },1900);
        setTimeout(()=>{
            closeBtn.classList.add('open');  
            passwordCheck.classList.add('open');
            document.querySelector(".field").innerHTML = text.value;
document.querySelector(".pass-field").innerHTML = password.value;     
        },1905);
    } else {
        load.classList.add('open')
        setTimeout(()=>{
            load.classList.remove('open')
        },1900);
        setTimeout(()=>{
            alert('Incorrect Username');
        },1905);
       closeBtn.classList.remove('open');  
            passwordCheck.classList.remove('open')     
    }

   
};
closeBtn.addEventListener('click', ()=>{
        passwordCheck.classList.remove('open');
        closeBtn.classList.remove('open')
});

lock.addEventListener('click', ()=>{
    wrapperDef.classList.add('open');
    wrapperDef.value = "";
    wrapper3.classList.remove('open');
    wrapper3.value = "";
    wrapper4.classList.remove('open');
    wrapper4.value = "";
    wrapper.classList.add('open');
    wrapper.classList.remove('phone');
    wrapper.value = "";
    passwordCheck1.remove('open');
    wrapper5.classList.remove('open');
    wrapper6.classList.remove('open');
    passwordCheck.classList.remove('open');
    passwordCheck1.classList.remove('open');
    closeBtn.classList.remove('open');
    closeBtn1.classList.remove('open')
    document.querySelector(".cpass").style.display = "aquamarine";
    document.querySelector(".home-active").style.display = "white";
    document.querySelector(".login-active").style.display = "white";
});

locking.addEventListener('click', ()=>{
    wrapperDef.classList.add('open');
    wrapperDef.value = "";
    wrapper3.classList.remove('open');
    wrapper3.value = "";
    wrapper4.classList.remove('open');
    wrapper4.value = "";
    wrapper.classList.add('open');
    wrapper.classList.remove('phone');
    wrapper.value = "";
    passwordCheck1.remove('open');
    wrapper5.classList.remove('open');
    wrapper6.classList.remove('open');
    passwordCheck.classList.remove('open');
    passwordCheck1.classList.remove('open');
    closeBtn.classList.remove('open');
    closeBtn1.classList.remove('open')
    document.querySelector(".lock").style.display = "aquamarine";
    document.querySelector(".home-active-1").style.display = "white";
    document.querySelector(".login-active-1").style.display = "white";
});

school.addEventListener('click', ()=>{
    wrapper4.classList.add('open');
    wrapper.classList.add('open');
    wrapper.classList.remove('phone');
    wrapper2.classList.remove('open');
    wrapper3.classList.remove('open');                     
    wrapper5.classList.remove('open');                     
    wrapper6.classList.remove('open');                     
    wrapperDef.classList.remove('open');
    passwordCheck.classList.remove('open');
    passwordCheck1.classList
    document.querySelector(".home-active").style.color = "aquamarine";
    document.querySelector(".home-active-1").style.color = "aquamarine";
    document.querySelector(".login-active").style.color = "white";
    document.querySelector(".login-active-1").style.color = "white";
    document.querySelector(".cpass").style.color = "white";
    document.querySelector(".lock").style.color = "white";
    // document.querySelector(".unlock-1").style.color = "white";
    // document.querySelector(".unlock").style.color = "white";
    textPassword.value = "";registerPassword.value = ""
});
schooling.addEventListener('click', ()=>{
    wrapper4.classList.add('open');
    wrapper.classList.remove('open');
    wrapper.classList.remove('phone');
    wrapper2.classList.remove('open');
    wrapper3.classList.remove('open');                     
    wrapper5.classList.remove('open');                     
    wrapper6.classList.remove('open');                     
    wrapperDef.classList.remove('open');
    passwordCheck.classList.remove('open');
    passwordCheck1.classList
    document.querySelector(".home-active-1").style.color = "aquamarine";
    document.querySelector(".home-active").style.color = "aquamarine";
    document.querySelector(".login-active-1").style.color = "white";
    document.querySelector(".login-active").style.color = "white";
    document.querySelector(".lock").style.color = "white";
    document.querySelector(".cpass").style.color = "white";
    // document.querySelector(".unlock-1").style.color = "white";
    // document.querySelector(".unlock").style.color = "white";
    textPassword.value = "";registerPassword.value = ""
});

function cspassword() {
    if (registerPassword.value.length > 4) {
        alert('School password is now saved as ' + registerPassword.value);
        wrapper5.classList.add('open');
        wrapper4.classList.remove('open');

        document.querySelector(".name-1").innerHTML = textPassword.value;
    } else {
        alert('Input password that is greater than 4 digit');
    };

    if (textPassword.value.length > 5) {
        
    } else {
        alert('The username should have more than five digits')
    }
    
};

function espassword(_enter) {
    if (schoolReact.value == registerPassword.value) {
        alert ('Password correct');

        schoolReact.value = ""
    } else {
        alert('Wrong password');
        alert('if you have forgotten your password click the forgot password button')
    }
};

function favschcheck() {
    if (schoolInput.value == textPassword.value) {
        load.classList.add('open')
        setTimeout(()=>{
            load.classList.remove('open')
        },1900);
        setTimeout(()=>{
            closeBtn1.classList.add('open');  
            passwordCheck1.classList.add('open');
            document.querySelector(".field-1").innerHTML = textPassword.value;
document.querySelector(".pass-field-1").innerHTML = registerPassword.value;     
        },1905);
    } else {
        load.classList.add('open')
        setTimeout(()=>{
            load.classList.remove('open')
        },1900);
        setTimeout(()=>{
            alert('Incorrect Username');
        },1905);
       closeBtn1.classList.remove('open');  
            passwordCheck1.classList.remove('open')     
}};

closeBtn1.addEventListener('click', ()=>{
    passwordCheck1.classList.remove('open');
    closeBtn1.classList.remove('open')
});

function schoolforget() {
    if (registerPassword.value == schoolReact) {
        alert('The password is correct');
        wrapper6.classList.remove('open');
        wrapper5.classList.add('open');
    } else {
        wrapper6.classList.add('open');
    wrapper5.classList.remove('open');

    schoolInput.value = ""; 
    }
}

login.addEventListener('click', ()=>{
    document.querySelector(".login-active").style.color = "aquamarine";
    document.querySelector(".login-active-1").style.color = "aquamarine";
    document.querySelector(".home-active").style.color = "white";
    document.querySelector(".home-active-1").style.color = "white";
    document.querySelector(".cpass").style.color = "white";
    document.querySelector(".lock").style.color = "white";
    // document.querySelector(".unlock-1").style.color = "white";
    // document.querySelector(".unlock").style.color = "white";
    wrapper.classList.remove('open');
    wrapper2.classList.remove('open');
    wrapper3.classList.remove('open');
    wrapper4.classList.remove('open');
    wrapper5.classList.remove('open');
    wrapperDef.classList.remove('open');
    wrapperDef1.classList.remove('open');
    passwordCheck.classList.remove('open');
    passwordCheck1.classList.remove('open');
    closeBtn.classList.remove('open');
    closeBtn1.classList.remove('open');
    text.value = ""; password.value = ""


});
logining.addEventListener('click', ()=>{
    document.querySelector(".login-active-1").style.color = "aquamarine";
    document.querySelector(".login-active").style.color = "aquamarine";
    document.querySelector(".home-active-1").style.color = "white";
    document.querySelector(".home-active").style.color = "white";
    document.querySelector(".lock").style.color = "white";
    document.querySelector(".cpass").style.color = "white";
    // document.querySelector(".unlock-1").style.color = "white";
    // document.querySelector(".unlock").style.color = "white";
    wrapper.classList.remove('open');
    wrapper.classList.add('phone');
    wrapper2.classList.remove('open');
    wrapper3.classList.remove('open');
    wrapper4.classList.remove('open');
    wrapper5.classList.remove('open');
    wrapperDef.classList.remove('open');
    wrapperDef1.classList.remove('open');
    passwordCheck.classList.remove('open');
    passwordCheck1.classList.remove('open');
    closeBtn.classList.remove('open');
    closeBtn1.classList.remove('open');
    text.value = ""; password.value = ""


});

function passwordDef() {
    if (def.value.length > 4) {
        document.querySelector(".cpass").style.display = "none";
        document.querySelector(".lock").style.display = "none";
        // document.querySelector(".home-active").style.display = "none";
        // document.querySelector(".login-active").style.display = "none";
        // document.querySelector(".About").style.display = "none";
        // document.querySelector(".services").style.display = "none";
        // document.querySelector(".lock").style.display = "none";
        // document.querySelector(".home-active-1").style.display = "none";
        // document.querySelector(".login-active-1").style.display = "none";
        // document.querySelector(".About-1").style.display = "none";
        // document.querySelector(".unlock-1").style.display = "aquamarine";
        // document.querySelector(".service").style.color = "transparent";
        // document.querySelector(".unlock").style.color = "aquamarine";
        wrapperDef.classList.remove('open')
    wrapperDef1.classList.remove('open');
    navigation.classList.add('open');
    splash.classList.remove('open');
wrapper.classList.add('open');
logoPhone.classList.add('open');
document.querySelector(".navbar-1").style.color = "none";
setTimeout(()=>{
    splash.classList.add('open');
    navigation.classList.remove('open');
    wrapperDef.classList.remove('open');
    wrapperDef1.classList.add('open');
    logoPhone.classList.remove('open');
    document.querySelector(".navbar-1").style.color = "block";
},1000);

setTimeout(()=>{
    splashLoad.classList.add('open');
    document.querySelector(".image").style.cursor = "progress";
},500);
    document.querySelector(".login-active").style.color = "aliceblue";
    document.querySelector(".home-active").style.color = "aliceblue";
    document.querySelector(".unlock").style.color = "aquamarine";
    document.querySelector(".unlock-1").style.color = "aquamarine";
    } else {
        alert('Password value should be more than five values')
        wrapperDef.classList.add('open');
    }
    
};

function passwordDefault() {
    login.classList.remove('open');
    if (def.value == def1.value) {
        alert('good');
    // document.querySelector(".unlock").style.color = "white";
    document.querySelector(".login-active").style.color = "aquamarine";
    document.querySelector(".login-active-1").style.color = "aquamarine";
    wrapper.classList.remove('open');
    wrapper.classList.add('phone');
    def1.value = "";
    wrapperDef1.classList.remove('open')
    } else {
        alert('bad')
    }
}
navigation.classList.add('open');
wrapper.classList.add('open');
logoPhone.classList.add('open');
setTimeout(()=>{
    splash.classList.add('open');
    navigation.classList.remove('open');
    wrapper.classList.remove('open');
    logoPhone.classList.remove('open');
    // hamburger.classList.add('open');
},1000);

setTimeout(()=>{
    splashLoad.classList.add('open');
    document.querySelector(".image").style.cursor = "progress";
},500);

function pastworth() {
    document.querySelector(".cpass").style.color = "aquamarine";
    document.querySelector(".lock").style.color = "aquamarine";
    document.querySelector(".home-active").style.color = "white";
    document.querySelector(".home-active-1").style.color = "white";
    document.querySelector(".login-active").style.color = "white";
    document.querySelector(".login-active-1").style.color = "white";
}

function pastworthing() {
    document.querySelector(".lock").style.color = "aquamarine";
    document.querySelector(".cpass").style.color = "aquamarine";
    document.querySelector(".home-active-1").style.color = "white";
    document.querySelector(".home-active").style.color = "white";
    document.querySelector(".login-active-1").style.color = "white";
    document.querySelector(".login-active").style.color = "white";
}

// unlock.addEventListener('click', ()=>{
//     alert('Password already unlocked')
// });
// unlocking.addEventListener('click', ()=>{
//     alert('Password already unlocked')
// });

hamburger.onclick = function() {
    navbar1.classList.toggle('open')
    const isOpen = navbar1.classList.contains('open')
};

