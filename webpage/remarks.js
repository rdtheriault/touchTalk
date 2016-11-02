$(document).ready(function() {
	
	var gender = localStorage.getItem("gender");
    var counter = parseInt("1");
	var catID = "#btn";
	var rowID = "#c";
	var sounda;
	var gender = localStorage.getItem("gender");
	var dir = "none";
    
    $(document).keydown(function(e){//space
    	if (e.keyCode == 32 ) {
            change("next");
    	}
    });
    
    $(document).keydown(function(e){//up
	    if (e.keyCode == 38 ) {
	      play("up"); 
	      }         
	});
	$(document).keydown(function(e){//down
	    if (e.keyCode == 40 ) {
	      play( "down" );  
	      }        
	});
	$(document).keydown(function(e){//right
	    if (e.keyCode == 39 ) {
	      play("right"); 
	      }         
	});
	$(document).keydown(function(e){//left
	    if (e.keyCode == 37 ) {
	      play( "left" );  
	      }        
	});
    
    $("#next").click(function(){
            change("next");
    });
    
    $("#btn1").click(function(){
        change(1);
    });
    $("#btn2").click(function(){
    	change(2);
    });
    $("#btn3").click(function(){
        change(3);
    });
    $("#btn4").click(function(){
    	change(4);
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
    function change(count){
        if (count == "next"){counter++; if (counter === 5){counter = 1;}} //up counter if you have more than 4 categories
        else {counter = parseInt(count);}
		
        if (counter === 1){updateShow ("1");}else{ updateHide("1");}
    	if (counter === 2){updateShow ("2");}else{ updateHide("2");}
    	if (counter === 3){updateShow ("3");}else{ updateHide("3");}
    	if (counter === 4){updateShow ("4");}else{ updateHide("4");}
    }
	
	function updateShow(count){
		var catIDa = catID.concat(count);
		var rowIDa = rowID.concat(count);
		$(rowIDa).show();
		$(rowIDa).css("display", "flex"); 
		$(catIDa).css("border-color", "red"); 
	}
	
	function updateHide(count){
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
        var id = dir.concat(counter);
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
