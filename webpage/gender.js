$(document).ready(function() {

	var gender = localStorage.getItem("gender");
	var count = 0;

	//place button listeners here//

	$("#answButton").click(function(){
		count = 1;
		updateShow(count);
	});
	$("#remaButton").click(function(){
		count = 2;
		updateShow(count);
	});
	$("#nextButton").click(function(){
		if (count===1) {
			window.location.href='answers.html';
		}
		if (count===2) {
			window.location.href='remarks.html';
		}
		if (count===0) {
			alert('Make a Selection')
		}
	});

	updateShow(count);

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
            if (count===1) {
				window.location.href='answers.html';
			}
			if (count===2) {
				window.location.href='remarks.html';
			}
    	}
    });
	
	//place functions here//
	
	function updateShow(number) {
		if (number===1) {
			$("#answButton").css("border-color", "yellow");
			$("#remaButton").css("border-color", "black");
		}
		if (number===2) {
			$("#answButton").css("border-color", "black");
			$("#remaButton").css("border-color", "yellow");
		}
		localStorage.setItem("gender", gender);
	}
});
