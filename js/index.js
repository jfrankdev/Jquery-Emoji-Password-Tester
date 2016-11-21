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
  $('#normal, #medium, #medium2, #strong, #verystrong').addClass('hide');
}


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



    //if the password length is less than 7, return message.

    if (strength == 1) {
        $('#normal').removeClass('hide');
        $('#medium, #medium2, #strong, #verystrong').addClass('hide');
    }

    if (strength == 2) {
      $('#medium').removeClass('hide');
      $('#normal, #medium2, #strong, #verystrong').addClass('hide');
    }

    if (strength == 3) {
      $('#medium2').removeClass('hide');
      $('#normal, #medium, #strong, #verystrong').addClass('hide');
    }

    if (strength == 5) {
      $('#strong').removeClass('hide');
      $('#normal, #medium, #medium2, #verystrong').addClass('hide');
    }

    if (strength > 5) {
      $('#verystrong').removeClass('hide');
      $('#normal, #medium, #medium2, #strong').addClass('hide');
    }
  }
});
