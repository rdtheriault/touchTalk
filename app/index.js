$(document).ready(function() {
	$('#gender').hide();
	$('#answers').hide();
	$('#remarks').hide();
	var gender = "female";
	var count = 0;
	var count2 = 0;
	var loc = "index";
	chrome.app.window.get('index').fullscreen();
	
	////INDEX place button listeners here index.js INDEX////
	
	$("#maleButton").click(function(){
		count = 1;
		updateShow(count);
	});
	$("#femaleButton").click(function(){
		count = 2;
		updateShow(count);
	});
	$("#nextButton").click(function(){
			$('#index').hide();
			$('#gender').show();
			loc = "gender";
		if (count===3) {
			//window.location.target="gender.html";
		}
		if (count===4) {
			//window.location.target="gender.html";
		}
	});
	
	//place key listeners here//

	$(document).keydown(function(e){//space
    	if (e.keyCode == 32 && loc === "index") {
            count += 1;
			if (count===3) {
				count = 1;
			}
			updateShow(count);
    	}
		if (e.keyCode == 38 && loc === "index") {
            $('#index').hide();
			$('#gender').show();
			loc = "gender";
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
		chrome.storage.local.gender = gender;
	}
	
	
	////GENDER place button listeners here gender.js GENDER////

	$("#answButton").click(function(){
		count2 = 1;
		updateShow2(count2);
	});
	$("#remaButton").click(function(){
		count2 = 2;
		updateShow2(count2);
	});
	$("#toIndex").click(function(){
		$('#gender').hide();
		$('#index').show();
		loc = "index";
	});
	$("#nextButton2").click(function(){
		if (count2===1) {
			$('#gender').hide();
			$('#answers').show();
			loc = "answers";
		}
		if (count2===2) {
			$('#gender').hide();
			$('#remarks').show();
			loc = "remarks";
		}
		if (count2===0) {
			alert('Make a Selection')
		}
	});

	updateShow(count2);//is this needed? I think it might set it to 0 to get started

	//place key listeners here//

	$(document).keydown(function(e){//space
    	if (e.keyCode == 32 && loc === "gender") {
            count2 += 1;
			if (count2===3) {
				count2 = 1;
			}
			updateShow(count2);
    	}
	if (e.keyCode == 38 && loc === "gender") {
            if (count2===1) {
				$('#gender').hide();
				$('#answers').show();
				loc = "answers";
			}
			if (count2===2) {
				$('#gender').hide();
				$('#remarks').show();
				loc = "remarks";
			}
    	}
    });
	
	//place functions here//
	
	function updateShow2(number) {
		if (number===1) {
			$("#answButton").css("border-color", "yellow");
			$("#remaButton").css("border-color", "black");
		}
		if (number===2) {
			$("#answButton").css("border-color", "black");
			$("#remaButton").css("border-color", "yellow");
		}
	}
	
	////ANSWERS   ANSWERS////
	
    var counterA = parseInt("1");
	var catIDA = "#Abtn";
	var rowIDA = "#Ac";
	var soundaA;
	var dirA = "none";
    
    $(document).keydown(function(e){//space
    	if (e.keyCode == 32 && loc === "answers") {
            changeAnsw("next");
    	}
    });
    
    $(document).keydown(function(e){//up
	    if (e.keyCode == 38 && loc === "answers") {
	      playAnsw("up"); 
	      }         
	});
	$(document).keydown(function(e){//down
	    if (e.keyCode == 40 && loc === "answers") {
	      playAnsw( "down" );  
	      }        
	});
	$(document).keydown(function(e){//right
	    if (e.keyCode == 39 && loc === "answers") {
	      playAnsw("right"); 
	      }         
	});
	$(document).keydown(function(e){//left
	    if (e.keyCode == 37 && loc === "answers") {
	      playAnsw( "left" );  
	      }        
	});
    
    $("#Anext").click(function(){
        changeAnsw("next");
    });
    
    $("#Abtn1").click(function(){
        changeAnsw(1);
    });
    $("#Abtn2").click(function(){
    	changeAnsw(2);
    });
    $("#Abtn3").click(function(){
        changeAnsw(3);
    });
    $("#Abtn4").click(function(){
    	changeAnsw(4);
    });
    $("#toGender").click(function(){
		$('#answers').hide();
		$('#gender').show();
		loc = "gender";
	});
    //listen for button clicks by class (all up,down,left,right) to send to audio function. Exp - all up class buttons send "up" to function
    $(".Aup").click(function(){
    	playAnsw("up");
    });
    $(".Adown").click(function(){
    	playAnsw("down");
    });
    $(".Aright").click(function(){
    	playAnsw("right");
    });
    $(".Aleft").click(function(){
    	playAnsw("left");
    });
    
    //Changes the viewable buttons (show/hide) and sets global variable counter accordingly.
    function changeAnsw(count){
        if (count == "next"){counterA++; if (counterA === 4){counterA = 1;}} //up counter if you have more than 4 categories
        else {counterA = parseInt(count);}
		
        if (counterA === 1){updateShowAnsw ("1");}else{ updateHideAnsw("1");}
    	if (counterA === 2){updateShowAnsw ("2");}else{ updateHideAnsw("2");}
    	if (counterA === 3){updateShowAnsw ("3");}else{ updateHideAnsw("3");}
    }
	
	function updateShowAnsw(count){
		var catIDa = catIDA.concat(count);
		var rowIDa = rowIDA.concat(count);
		$(rowIDa).show();
		$(rowIDa).css("display", "flex"); 
		$(catIDa).css("border-color", "red"); 
	}
	
	function updateHideAnsw(count){
		var catIDa = catIDA.concat(count);
		var rowIDa = rowIDA.concat(count);
		$(rowIDa).hide();
		$(catIDa).css("border-color", "black");
	}
	
	function buildDirAnsw(gen, sound) {
		if (gen==='male') {
			file = gen + '/' + 'answers' + '/' + sound
		}
		if (gen==='female') {
			file = gen + '/' + 'answers' + '/' + sound
		}
		return file;
	}

    //Builds the ID of the audio file from direction sent by clicking or using arrow keys and global variable counter. Then plays corresponding audio.
    function playAnsw(dir){
        var audio;
        var id = dir.concat(counterA);
        switch(id){
            case "up1":
				buildDirAnsw(gender, "1.mp3");
                audio = new Audio(file);
                break;
            case "down1":
                buildDirAnsw(gender, "2.mp3");
                audio = new Audio(file);
                break;
	    case "right1":
                buildDirAnsw(gender, "3.mp3");
                audio = new Audio(file);
                break;
            case "left1":
                buildDirAnsw(gender, "4.mp3");
                audio = new Audio(file);
                break;
	    case "up2":
                buildDirAnsw(gender, "a.mp3");
                audio = new Audio(file);
                break;
            case "down2":
                buildDirAnsw(gender, "b.mp3");
                audio = new Audio(file);
                break;
	    case "right2":
                buildDirAnsw(gender, "c.mp3");
                audio = new Audio(file);
                break;
            case "left2":
                buildDirAnsw(gender, "d.mp3");
                audio = new Audio(file);
                break;
	    case "up3":
                buildDirAnsw(gender, "yes.mp3");
                audio = new Audio(file);
                break;
            case "down3":
                buildDirAnsw(gender, "no.mp3");
                audio = new Audio(file);
                break;
	    case "right3":
                buildDirAnsw(gender, "true.mp3");
                audio = new Audio(file);
                break;
            case "left3":
                buildDirAnsw(gender, "false.mp3");
                audio = new Audio(file);
                break;
	    case "up4":
                buildDirAnsw(gender, "none.mp3");
                audio = new Audio(file);
                break;
            case "down4":
                buildDirAnsw(gender, "none.mp3");
                audio = new Audio(file);
                break;
	    case "right4":
                buildDirAnsw(gender, "none.mp3");
                audio = new Audio(file);
                break;
            case "left4":
                buildDirAnsw(gender, "none.mp3");
                audio = new Audio(file);
                break;
        }
        audio.play();
    }
	
	
	//REMARKS remarks REMARKS//
	
    var counter4 = parseInt("1");
	var catID = "#btn";
	var rowID = "#c";
	var sounda;
	var dir = "none";
    
    $(document).keydown(function(e){//space
    	if (e.keyCode == 32 && loc === "remarks") {
            change4("next");
    	}
    });
    
    $(document).keydown(function(e){//up
	    if (e.keyCode == 38 && loc === "remarks") {
	      play("up"); 
	      }         
	});
	$(document).keydown(function(e){//down
	    if (e.keyCode == 40 && loc === "remarks") {
	      play( "down" );  
	      }        
	});
	$(document).keydown(function(e){//right
	    if (e.keyCode == 39 && loc === "remarks") {
	      play("right"); 
	      }         
	});
	$(document).keydown(function(e){//left
	    if (e.keyCode == 37 && loc === "remarks") {
	      play( "left" );  
	      }        
	});
    
    $("#next").click(function(){
        change4("next");
    });
    
    $("#btn1").click(function(){
        change4(1);
    });
    $("#btn2").click(function(){
    	change4(2);
    });
    $("#btn3").click(function(){
        change4(3);
    });
    $("#btn4").click(function(){
    	change4(4);
    });
    $("#toGender2").click(function(){
		$('#remarks').hide();
		$('#gender').show();
		loc = "gender";
	});
    //listen for button clicks by class (all up,down,left,right) to send to audio function. Exp - all up class buttons send "up" to function
    $(".up").click(function(){
    	play("up");
    });
    $(".down").click(function(){
    	play("down");
    });
    $(".right").click(function(){
    	play("right");
    });
    $(".left").click(function(){
    	play("left");
    });
    
    //Changes the viewable buttons (show/hide) and sets global variable counter accordingly.
    function change4(count){
        if (count == "next"){counter4++; if (counter4 === 5){counter4 = 1;}} //up counter if you have more than 4 categories
        else {counter4 = parseInt(count);}
		
        if (counter4 === 1){updateShow4 ("1");}else{ updateHide4("1");}
    	if (counter4 === 2){updateShow4 ("2");}else{ updateHide4("2");}
    	if (counter4 === 3){updateShow4 ("3");}else{ updateHide4("3");}
    	if (counter4 === 4){updateShow4 ("4");}else{ updateHide4("4");}
    }
	
	function updateShow4(count){
		var catIDa = catID.concat(count);
		var rowIDa = rowID.concat(count);
		$(rowIDa).show();
		$(rowIDa).css("display", "flex"); 
		$(catIDa).css("border-color", "red"); 
	}
	
	function updateHide4(count){
		var catIDa = catID.concat(count);
		var rowIDa = rowID.concat(count);
		$(rowIDa).hide();
		$(catIDa).css("border-color", "black");
	}
	
	function buildDir(gen, sound) {
		if (gen==='male') {
			file = gen + '/' + 'remarks' + '/' + sound
		}
		if (gen==='female') {
			file = gen + '/' + 'remarks' + '/' + sound
		}
		return file;
	}

    //Builds the ID of the audio file from direction sent by clicking or using arrow keys and global variable counter. Then plays corresponding audio.
    function play(dir){
		
        var audio;
        var id = dir.concat(counter4);
        switch(id){
            case "up1":
		buildDir(gender, "food.mp3");
                audio = new Audio(file);
                break;
            case "down1":
                buildDir(gender, "water.mp3");
                audio = new Audio(file);
                break;
	    case "right1":
                buildDir(gender, "restroom.mp3");
                audio = new Audio(file);
                break;
            case "left1":
                buildDir(gender, "rest.mp3");
                audio = new Audio(file);
                break;
	    case "up2":
                buildDir(gender, "happy.mp3");
                audio = new Audio(file);
                break;
            case "down2":
                buildDir(gender, "sad.mp3");
                audio = new Audio(file);
                break;
	    case "right2":
                buildDir(gender, "upset.mp3");
                audio = new Audio(file);
                break;
            case "left2":
                buildDir(gender, "excited.mp3");
                audio = new Audio(file);
                break;
	    case "up3":
                buildDir(gender, "pencil.mp3");
                audio = new Audio(file);
                break;
            case "down3":
                buildDir(gender, "eraser.mp3");
                audio = new Audio(file);
                break;
	    case "right3":
                buildDir(gender, "tissues.mp3");
                audio = new Audio(file);
                break;
            case "left3":
                buildDir(gender, "paper.mp3");
                audio = new Audio(file);
                break;
	    case "up4":
                buildDir(gender, "help.mp3");
                audio = new Audio(file);
                break;
            case "down4":
                buildDir(gender, "comehere.mp3");
                audio = new Audio(file);
                break;
	    case "right4":
                buildDir(gender, "explain.mp3");
                audio = new Audio(file);
                break;
            case "left4":
                buildDir(gender, "assignment.mp3");
                audio = new Audio(file);
                break;
        }
        audio.play();
    }

	
	
	
});
