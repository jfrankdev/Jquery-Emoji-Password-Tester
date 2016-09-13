document.passwordForm.password.focus();

$(document).ready(function() {
    var result = $("#password-strength");
   
  
    $('#password').keyup(function(){

        $(".bar-text").html(checkStrength($('#password').val()))
       
    })  
 

    function checkStrength(password){
 
   //initial strength
    var strength = 0;
    
    if (password.length == 0) {
        document.getElementById("normal").style.visibility = "hidden";
        document.getElementById("medium").style.visibility = "hidden";
        document.getElementById("medium2").style.visibility = "hidden";
        document.getElementById("strong").style.visibility = "hidden";
        document.getElementById("verystrong").style.visibility = "hidden";
    }
    //if the password length is less than 7, return message.

    //
    

 
    //length is ok, lets continue.
 
    //if length is 8 characters or more, increase strength value, problematic line
    if (password.length > 0) {strength += 1};

 
    //if password contains both lower and uppercase characters, increase strength value
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) || password.length >= 3)  {strength += 1};
 
    //if it has one special character, increase strength value
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  {strength += 1};

    //if it has one number, increase strength value
    if (password.match(/([0-9])/))  {strength += 1};
 
     //if it has two numbers, increase strength value
    if (password.match(/(.*[0-9].*[0-9])/))  {strength += 1};

    //if it has two special characters, increase strength value
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/)) {strength += 2};
 
    //now we have calculated strength value, we can return messages
 
    //if value is less than 2

       
    //if the password length is less than 7, return message.
    if (strength == 1) {
        
        document.getElementById("medium").style.visibility = "hidden";
        document.getElementById("medium2").style.visibility = "hidden";
        document.getElementById("strong").style.visibility = "hidden";
        document.getElementById("verystrong").style.visibility = "hidden";
        document.getElementById("normal").style.visibility = "visible";
    }

    if (strength == 2) {
        
        document.getElementById("normal").style.visibility = "hidden";
        document.getElementById("medium2").style.visibility = "hidden";
        document.getElementById("strong").style.visibility = "hidden";
        document.getElementById("verystrong").style.visibility = "hidden";
        document.getElementById("medium").style.visibility = "visible";
    }

    if (strength == 3) {
        document.getElementById("normal").style.visibility = "hidden";    
        document.getElementById("medium").style.visibility = "hidden";
        document.getElementById("strong").style.visibility = "hidden";
        document.getElementById("verystrong").style.visibility = "hidden";
        document.getElementById("medium2").style.visibility = "visible";
    }

    if (strength == 5) {
        document.getElementById("medium2").style.visibility = "hidden";
        document.getElementById("normal").style.visibility = "hidden";        
        document.getElementById("medium").style.visibility = "hidden";
        document.getElementById("verystrong").style.visibility = "hidden";
        document.getElementById("strong").style.visibility = "visible";
    }

    if (strength > 5) {
  
        document.getElementById("strong").style.visibility = "hidden";
        document.getElementById("normal").style.visibility = "hidden";        
        document.getElementById("medium2").style.visibility = "hidden";
        document.getElementById("medium").style.visibility = "hidden";
        document.getElementById("verystrong").style.visibility = "visible";
    }

    console.log(strength);
} 



});