function validurl(url1) {
    if (url1.value=='') {
        url1.setCustomValidity(' این فیلد اجباری می باشد ');
        document.getElementById('url').style.backgroundColor='#FFEAEA';
        document.getElementById('url').style.border='1px solid red';

    }
    else if (url1.validity.typeMismatch) {
        url1.setCustomValidity('آدرس اینترنتی معتبر نمی باشد  ');
        document.getElementById('url').style.backgroundColor='#FFEAEA';
        document.getElementById('url').style.border='1px solid red';
    }
    else{
        url1.setCustomValidity('');
    }
}
/****************tel***********************/
function validtel(tel) {
    if (tel.value=='') {
        tel.setCustomValidity('فیلد تلفن نباید خالی باشد  ');
        document.getElementById('mobile').style.backgroundColor='#FFEAEA';
        document.getElementById('mobile').style.border='1px solid red';
    }
    else if (tel.validity.patternMismatch) {
        tel.setCustomValidity('شماره تلفن  موبایل معتبر نمی باشد  ');
        document.getElementById('mobile').style.backgroundColor='#FFEAEA';
        document.getElementById('mobile').style.border='1px solid red';
    }
    else{
        tel.setCustomValidity('');
        document.getElementById('mobile').style.backgroundColor='#D1F9E2';
        document.getElementById('mobile').style.border='1px solid #60F29D';
    }
}
/*********************************************/
var password=document.getElementById('password');
var repassword=document.getElementById('repassword');
function validatpassword() {
    if (password.value!= repassword.value) {
        repassword.setCustomValidity('پسورد ها باهم برابر نیستند ');
        document.getElementById('password').style.backgroundColor='#FFEAEA';
        document.getElementById('password').style.border='1px solid red';
        document.getElementById('repassword').style.backgroundColor='#FFEAEA';
        document.getElementById('repassword').style.border='1px solid red';
    }
    else{
        repassword.setCustomValidity('');
        document.getElementById('password').style.backgroundColor='#D1F9E2';
        document.getElementById('password').style.border='1px solid #60F29D';
        document.getElementById('repassword').style.backgroundColor='#D1F9E2';
        document.getElementById('repassword').style.border='1px solid #60F29D';
    }
    return true;
}
password.onchange=validatpassword;//انتصاب دادن این تابع ه تگ مورد نظر 
repassword.onkeyup=validatpassword;
/*****************password*******************************/
function vlidpassword(password1) {
    if (password1.value=='') {
        password1.setCustomValidity('فیلد پسورد نباید خالی باشد   ');
        document.getElementById('password').style.backgroundColor='#FFEAEA';
        document.getElementById('password').style.border='1px solid red';
        document.getElementById('repassword').style.backgroundColor='#FFEAEA';
        document.getElementById('repassword').style.border='1px solid red';
    }
    else if (password1.validity.patternMismatch) {
        password1.setCustomValidity('فیلد پسورد معتبر نمی باشد   ');
        document.getElementById('password').style.backgroundColor='#FFEAEA';
        document.getElementById('password').style.border='1px solid red';
        document.getElementById('repassword').style.backgroundColor='#FFEAEA';
        document.getElementById('repassword').style.border='1px solid red';
    }
    else{
        password1.setCustomValidity('');
        document.getElementById('password').style.backgroundColor='#D1F9E2';
        document.getElementById('password').style.border='1px solid #60F29D';
    }
    return true;
}
/****************end password********************************/
function vlidEmail(textbox) {
    if (textbox.value=='') {

        textbox.setCustomValidity('فیلد ایمیل نباید خالی باشد ');
        document.getElementById('email').style.backgroundColor='#FFEAEA';
        document.getElementById('email').style.border='1px solid red';
        document.getElementById('email1').innerHTML='ایمیل  نباید خالی باشد  ';
    }
    else if (textbox.validity.typeMismatch) {
        textbox.setCustomValidity('این ایمیل معتبر نمی باشد ');
        document.getElementById('email').style.backgroundColor='#D1F9E2';
        document.getElementById('email').style.border='1px solid #60F29D';
    }
    else
    {
        textbox.setCustomValidity('');
        document.getElementById('email').style.backgroundColor='#D1F9E2';
        document.getElementById('email').style.border='1px solid #60F29D';
    }
    return true;
}
function vlidlname(lname) {
    if (lname.value=='') {
        lname.setCustomValidity('این فیلد نباد خالی باشد ');
        document.getElementById('lname').style.backgroundColor='#FFEAEA';
        document.getElementById('lname').style.border='1px solid red';
        document.getElementById('lname1').innerHTML='این فیلد نباید خالی باشد  ';
    }
    else{
        lname.setCustomValidity('');
        document.getElementById('lname').style.backgroundColor='#D1F9E2';
        document.getElementById('lname').style.border='1px solid #60F29D';
    }
    return true;
}
function vlidfname(fname) {
    if (fname.value=='') {
        fname.setCustomValidity('این فیلد نباد خالی باشد ');
        document.getElementById('fname').style.backgroundColor='#FFEAEA';
        document.getElementById('fname').style.border='1px solid red';
        document.getElementById('fname1').innerHTML='نام نباید خالی باشد ';
    }
    else{
        fname.setCustomValidity('');
        document.getElementById('fname').style.backgroundColor='#D1F9E2';
        document.getElementById('fname').style.border='1px solid #60F29D';
    }
    return true;//اگر کاربر ما مقدار درست را نوشت  باید باید این کد را بنویسد مقدار درست باید به شما برگرداند
}
$(document).ready(function(){
    $("#login").click(function(){
        $(".card").css({
            "transform": "rotateY(180deg) scalex(-1)"
            
        });
        $(".back").hide(400);
        $(".front").show(400);

    })
    $("#signin").click(function(){
        $(".card").css({
            "transform": "rotateY(360deg) scalex(1)"
        });
        $(".back").show(400);
        
        
        

    })
    
});