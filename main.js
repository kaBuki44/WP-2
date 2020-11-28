function charList(startChar, endChar) {
    return String.fromCharCode(...[...Array(endChar.charCodeAt(0) - startChar.charCodeAt(0) + 1).keys()].map(i => i + startChar.charCodeAt(0)))
}

var CODE_SPACE = '\u0020' + charList('\u2000' , '\u200f') + charList('\u2028' , '\u202f');
var FARSI_CHARS = charList('\u0621' , '\u0628') + charList('\u062A' , '\u063A') + charList('\u0641' , '\u0642') + charList('\u0644' , '\u0648') + charList('\u064E' , '\u0651') +'\u0655\u067E\u0686\u0698\u06A9\u06AF\u06BE\u06CC';
var TOTAL_CHARS = CODE_SPACE + FARSI_CHARS;

function isFarsi(txt) {
    return !(new RegExp("[^\s" + TOTAL_CHARS + "]").test(txt));
}
function isEnglish(txt) {
    return !( new RegExp("[^\sa-zA-Z]").test(txt));
}

function validateFirstName(){
    var first_name = document.getElementById("FirstName").value;
    return first_name.length >= 3 && first_name.length <= 50 && isFarsi(first_name);
}
function validateLastName(){
    var last_name = document.getElementById("LastName").value;
    return last_name.length >= 3 && last_name.length <= 100 && isFarsi(last_name);
}
function validateEnglishName(){
    var full_name = document.getElementById("FullName").value;
    return full_name.length <= 150 && isEnglish(full_name.replaceAll(' ' , ''));
}
function validateEmail(){
    var email = document.getElementById("Email").value;
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(String(email).toLowerCase());
}
function validateCell(){
    var cellNum = document.getElementById("CellNum").value;
    return cellNum.length == 9 && !( new RegExp("[^\s0-9]").test(cellNum));
}
function validateSSN(){
    var SSN = document.getElementById("SSN1").value + document.getElementById("SSN2").value + document.getElementById("SSN3").value;
    return SSN.length == 10 && !( new RegExp("[^\s0-9]").test(SSN));
}
function validatePassword(){
    var Password = document.getElementById("Password").value;
    var pattern = /^[a-zA-Z0-9=*$#!+\-]{8,24}$/;
    return pattern.test(Password);
}
function validateConfirmation(){
    var confirmation = document.getElementById("Confirmation").value;
    var Password = document.getElementById("Password").value;
    return validatePassword() && Password == confirmation;
}
function validateAddress(){
	var address = document.getElementById("Address").value;
    return address.length <= 250 && isFarsi(address);
}
function validateDay(){
    var month = document.getElementById("Birthmonth").value;
    var num_days = 30;
    if(!(month == null || month == '')){
        if(parseInt(month) < 6){
            num_days = 31;
        }
    }
    var day = parseInt(document.getElementById("Birthday").value);
    return day > 0 && day <= num_days;
}
function validateMonth(){
    var month = parseInt(document.getElementById("Birthmonth").value);
    return month > 0 && month < 13;
}
function validateYear(){
    var year = parseInt(document.getElementById("Birthyear").value);
    return year >= 1310 && year <= 1390;
}
function validateMarriage(){
    var marriage = document.getElementsByName("Marriage");
    return (marriage[0].checked || marriage[1].checked);
}

function Validator(){
    var err = "";
    var first_name = document.getElementById("ّFirstName");
    if(!validateFirstName()){
		window.alert("اندازه نام حداکثر 50 و حداقل 3 حرف و به زبان فارسی باید وارد شود\n");
        err += "اندازه نام حداکثر 50 و حداقل 3 حرف و به زبان فارسی باید وارد شود\n";
    }
    var last_name = document.getElementById("LastName");
    if(!validateLastName()){
		window.alert("اندازه نام خانوادگی حداکثر 100 و حداقل 3 حرف و به زبان فارسی باید وارد شود\n");
        err += "اندازه نام خانوادگی حداکثر 100 و حداقل 3 حرف و به زبان فارسی باید وارد شود\n";
    }
    var full_name = document.getElementById("ّFullName");
    if(!validateEnglishName()){
		window.alert("اندازه نام انگلیسی حداکثر 150 حرف و به زبان انگلیسی باید وارد شود\n");
        err += "اندازه نام انگلیسی حداکثر 150 حرف و به زبان انگلیسی باید وارد شود\n";
    }
    var email = document.getElementById("ٍEmail");
    if(!validateEmail()){
		window.alert("ایمیل باید معتبر وارد شود\n");
        err += "ایمیل باید معتبر وارد شود\n";
    }
    var cellNum = document.getElementById("CellNum");
    if(!validateCell()){
		window.alert("شماره تلفن همراه باید به اعداد انگلیسی وارد شود\n");
        err += "شماره تلفن همراه باید به اعداد انگلیسی وارد شود\n";
    }
    var SSN = document.getElementById("SSN1").value + document.getElementById("SSN2").value + document.getElementById("SSN3").value;
    if(!validateSSN()){
		window.alert("کد ملی باید معتبر وارد شود\n");
        err += "کد ملی باید معتبر وارد شود\n";
    }
    var Password = document.getElementById("Password");
    if(!validatePassword()){
		window.alert("-+!#$*= اندازه رمز حداکثر 24 و حداقل 8 حرف و به انگلیسی و فقط اعداد، الفبای انگلیسی و\n");
        err += "-+!#$*= اندازه رمز حداکثر 24 و حداقل 8 حرف و به انگلیسی و فقط اعداد، الفبای انگلیسی و\n";
    }
    var confirmation = document.getElementById("Confirmation");
    if(!validateConfirmation()){
		window.alert("تکرار رمز مشابه با اصلی باید وارد شود\n");
        err += "تکرار رمز مشابه با اصلی باید وارد شود\n";
    }
    var address = document.getElementById("Address");
    if(!validateAddress()){
		window.alert("حداکثر اندازه آدرس 250 حرف و به فارسی وارد شود\n");
        err += "حداکثر اندازه آدرس 250 حرف و به فارسی وارد شود\n";
    }
	birth_day = document.getElementById("Birthday");
    if(!validateDay()){
		window.alert("روز تولد باید درست وارد شود\n");
        err += "روز تولد باید درست وارد شود\n";
    }
    birth_month = document.getElementById("Birthmonth");
    if(!validateMonth()){
		window.alert("ماه تولد باید درست وارد شود\n");
        err += "ماه تولد باید درست وارد شود\n";
    }
    birth_year = document.getElementById("Birthyear");
    if(!validateYear()){
		window.alert("سال تولد باید درست وارد شود\n");
        err += "سال تولد باید درست وارد شود\n";
    }
    marriage = document.getElementById("Marriage");
    if(!validateMarriage()){
		window.alert("وضعیت تأهل باید انتخاب شود\n");
        err += "وضعیت تأهل باید انتخاب شود\n";
    }
    
	//document.getElementById("board").innerHTML = (err.replaceAll('\n','<br>'));
	return err == "";

}
