function validate() {    
    var fname = document.reg_form.fname;    
    var lname = document.reg_form.lname;       
    var email = document.reg_form.email;    
    var username = document.reg_form.username;    
    var pwd = document.reg_form.pwd;    

    if (fname.value.length <= 0) {    
        alert("Enter firstname");    
        fname.focus();    
        return false;    
    }    
    if (lname.value.length <= 0) {    
        alert("Enter Lastname");    
        lname.focus();    
        return false;    
    }    
    
    if (email.value.length <= 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    }    
    if (username.value.length <= 0) {    
        alert("Username name is required");    
        mobile.focus();    
        return false;    
    }    
    if (password.value == "select course") {    
        alert("Password is required");    
        course.focus();    
        return false;    
    }  
    
    if (password.value == "select course") {    
        alert("please confirm password");    
        course.focus();    
        return false;    
    }
    return false;    
}    