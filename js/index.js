document.passwordForm.password.focus();

$(document).ready(function () {
	$('#password').keyup(function () {
		$(".bar-text").html(checkStrength($('#password').val()))
	});

	function checkStrength(password) {
		//initial strength
		var strength = 0;
		if (password.length == 0) {
			$('#normal, #medium, #medium2, #strong, #verystrong').addClass('hide');
		}
		//if length is 8 characters or more, increase strength value
		if (password.length > 0) {
			strength += 1
		}
		//if password contains both lower and uppercase characters
		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) || password.length >= 3) {
			strength += 1
		}
		//if it has one special character
		if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
			strength += 1
		}
		//if it has one number
		if (password.match(/([0-9])/)) {
			strength += 1
		}
		//if it has two numbers
		if (password.match(/(.*[0-9].*[0-9])/)) {
			strength += 1
		}
		//if it has two special characters
		if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/)) {
			strength += 2
		}

		//evaluate to emojis
		switch(true){
			case (strength == 1):
			console.log(strength);
			$('#normal').removeClass('hide');
			$('#medium, #medium2, #strong, #verystrong').addClass('hide');
			break;
			case (strength == 2):
			console.log(strength);
			$('#medium').removeClass('hide');
			$('#normal, #medium2, #strong, #verystrong').addClass('hide');
			break;
			case (strength == 3):
			console.log(strength);
			$('#medium2').removeClass('hide');
			$('#normal, #medium, #strong, #verystrong').addClass('hide');
			break;
			case (strength == 5):
			console.log(strength);
			$('#strong').removeClass('hide');
			$('#normal, #medium, #medium2, #verystrong').addClass('hide');
			break;
			case (strength > 5):
			console.log(strength);
			$('#verystrong').removeClass('hide');
			$('#normal, #medium, #medium2, #strong').addClass('hide');
			break;
		}
	}
});
