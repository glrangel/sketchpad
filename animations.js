var $container,numSquares,squareSize,hasBorder,$borderBox,$trailBox;

$(document).ready(function(){
	onPageLoad();
});
function onPageLoad(){
	$container = $(".container");
	$borderBox = $("#borderBox");
	$trailBox = $("#trailBox")
	hasBorder = 0; //default no border
	numSquares = prompt("Enter size of grid or leave empty for a 10x10 grid.");
	if(numSquares == "")
		numSquares = 10; // default value
	squareSize = 500/numSquares;
	//Create Grid
	for(var i = 0; i < numSquares; i++){
		for(var j = 0; j < numSquares; j++)
			$container.append("<div class=\"square\"></div>");
	}
	setWidthAndHeight(squareSize,hasBorder);

	$(".square").on("mouseover",function(){

		if($trailBox.prop("checked"))
			$(this).removeClass("fadeColor");
		$(this).addClass("colorSquare");
	});	
	
	$(".square").on("mouseout",function(){
		if($trailBox.prop("checked"))
			$(this).addClass("fadeColor");
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
}
function opacityMode(){
	
}


