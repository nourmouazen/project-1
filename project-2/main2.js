$("#details1").click(function(){
	var url = "file:///C:/Users/Toshiba/Desktop/project-1/project-2/The-kite-runner.html"
	window.open(url)
})

$("#details2").click(function(){
	var url = "file:///C:/Users/Toshiba/Desktop/project-1/project-2/eat,pray,love.html"
	window.open(url)
})

$("#details3").click(function(){
	var url = "file:///C:/Users/Toshiba/Desktop/project-1/project-2/HowtoFallinLove.html"
	window.open(url)
})


$("#add").click(function(){
	var text = $("#input-text").val()
	if(text === ""){
		alert("You must write something!")
	}else{
	$("#addhere").append("<li>"+text+"</li>")	
}
$("#input-text").val("")
})