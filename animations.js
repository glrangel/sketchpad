var $container,numSquares,squareSize,hasBorder,$borderBox,$trailBox,$colorBox;
var randomColor;

$(document).ready(function(){
	onPageLoad();
});
function onPageLoad(){
	$container = $(".container");
	$borderBox = $("#borderBox");
	$trailBox = $("#trailBox");
	$colorBox = $("#colorBox");
	$opacityBox = $("#opacityBox");
	hasBorder = 0; //default no border
	numSquares = prompt("Enter size of grid (less than or equal to 60) or leave empty for a 10x10 grid.");
	if(numSquares == "" || numSquares > "60")
		numSquares = 10; // default value
	squareSize = 500/numSquares;
	//Create Grid
	for(var i = 0; i < numSquares; i++){
		for(var j = 0; j < numSquares; j++)
			$container.append("<div class=\"square\"></div>");
	}
	setWidthAndHeight(squareSize,hasBorder);

	$(".square").on("mouseover",function(){

		$(this).addClass("colorSquare");
		//check if leave trail is activated
		if($trailBox.prop("checked"))
			$(this).removeClass("fadeColor");
		if($colorBox.prop("checked")){
			randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
			$(this).css("background-color",randomColor);
			//if leave trail is also clicked
			if($trailBox.prop("checked"))
				$(this).removeClass("fadeColor");
		}
		if($opacityBox.prop("checked")){
			if(!($(this).hasClass("opacityMode"))){
				$(this).addClass("opacityMode");
				$(this).css("opacity",0);
			}
			var newOpacity = parseFloat($(this).css("opacity")) + 0.1;
			$(this).css("opacity",newOpacity);
			}
		else
			$(this).css("opacity",1);
	});	
	$(".square").on("mouseout",function(){
		if($trailBox.prop("checked")){
			$(this).css("background-color","")
			$(this).addClass("fadeColor");
		}
	});	
}
function setWidthAndHeight(squareSize, hasBorder){
	$container.children().css("height",squareSize+hasBorder);
	$container.children().css("width",squareSize+hasBorder);
}

function resetBoard(){
	if($borderBox.prop("checked") == true){
		$borderBox.prop("checked",false);
	}	
	if($trailBox.prop("checked") == true){
		$trailBox.prop("checked",false);
	}	
	if($colorBox.prop("checked") == true){
		$colorBox.prop("checked",false);
	}
	if($opacityBox.prop("checked") == true){
		$opacityBox.prop("checked",false);
		opacityMode();
	}
	$container.children().remove();
	onPageLoad();
}
function checkUncheck(){
	if(hasBorder == 0)
		hasBorder = -2;
	else
		hasBorder = 0;
	setWidthAndHeight(squareSize,hasBorder);
	$container.children().toggleClass("addBorder");
}
function leaveTrail(){
	$container.children().addClass("fadeColor");
	if($trailBox.prop("checked") == false){
		$container.children().removeClass("fadeColor");
		$container.children().removeClass("colorSquare");
	}
	if($colorBox.prop("checked") == true)
		resetClasses();
}
function opacityMode(){
	if($(opacityBox).prop("checked"))
	{
		//uncheck everything else	
		document.getElementById("trailBox").disabled = true;
		$(trailBox).prop("checked",false);
		document.getElementById("colorBox").disabled = true;
		$(colorBox).prop("checked",false);
	}
	else{
		document.getElementById("trailBox").disabled = false;
		document.getElementById("colorBox").disabled = false;
	}
	resetClasses();
}
function resetClasses(){
	$container.children().removeClass("fadeColor");
	$container.children().removeClass("colorSquare");
	$container.children().removeClass("opacityMode");
	$container.children().css("opacity",1);
	$container.children().css("background-color","");
}



