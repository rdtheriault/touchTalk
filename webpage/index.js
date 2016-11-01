$(document).ready(function() {
	
	var gender;
	var count = 0;
	
	//place button listeners here//
	
	$("#maleButton").click(function(){
		count = 1;
		updateShow(count);
	});
	$("#femaleButton").click(function(){
		count = 2;
		updateShow(count);
	});
	$("#nextButton").click(function(){
		if (count===1) {
			window.location.href='gender.html';
		}
		if (count===2) {
			window.location.href='gender.html';
		}
	});
	
	//place key listeners here//

	$(document).keydown(function(e){//space
    	if (e.keyCode == 32 ) {
            count += 1;
			if (count===3) {
				count = 1;
			}
			updateShow(count);
    	}
	if (e.keyCode == 38 ) {
            window.location.href='gender.html';
    	}
    });
	
	//place functions here//
	
	function updateShow(number) {
		if (number===1) {
			$("#maleButton").css("border-color", "yellow");
			$("#femaleButton").css("border-color", "black");
			gender = "male";
		}
		if (number===2) {
			$("#maleButton").css("border-color", "black");
			$("#femaleButton").css("border-color", "yellow");
			gender = "female";
		}
		else {
			gender = "male";
		}
		localStorage.setItem("gender", gender);
	}
});
