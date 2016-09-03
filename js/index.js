document.passwordForm.password.focus();

$(document).ready(function() {
    var result = $("#password-strength");
  
    $('#password').keyup(function(){
        $(".bar-text").html(checkStrength($('#password').val()))
    })  
 
    function checkStrength(password){
 
    //initial strength
    var strength = 0
    
    if (password.length == 0) {
        result.removeClass()
        document.getElementById("normal").style.visibility = "hidden";
        document.getElementById("medium").style.visibility = "hidden";
        return ''
    }
    //if the password length is less than 7, return message.

    
    if (password.length < 7) {
        result.removeClass()
        result.addClass('normal')

        document.getElementById("normal").style.visibility = "visible";

        return 'Normal'
    }

    else {

              document.getElementById("normal").style.visibility = "hidden";
  
    }
 
    //length is ok, lets continue.
 
    //if length is 8 characters or more, increase strength value
    if (password.length > 9) strength += 1
 
    //if password contains both lower and uppercase characters, increase strength value
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1
 
    //if it has one special character, increase strength value
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1
 
    //if it has two special characters, increase strength value
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/)) strength += 1
 
    //now we have calculated strength value, we can return messages
 
    //if value is less than 2

   if (strength ===0) {
        result.removeClass()
        document.getElementById("medium").style.visibility = "hidden";
        return ''
    }    
    //if the password length is less than 7, return message.
    if (strength <= 2) {
        result.removeClass()
        document.getElementById("medium").style.visibility = "visible";
        return ''
    }

    if (strength >= 3) {
        result.removeClass()
        document.getElementById("medium").style.visibility = "hidden";
        return ''
    }
} 


});