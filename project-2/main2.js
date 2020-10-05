$("#details1").click(function(){
	var url = "file:///C:/Users/Toshiba/Desktop/project-1/project-1/project-2/The-kite-runner.html"
	window.open(url)
})

$("#details2").click(function(){
	var url = "file:///C:/Users/Toshiba/Desktop/project-1/project-1/project-2/eat,pray,love.html"
	window.open(url)
})

$("#details3").click(function(){
	var url = "file:///C:/Users/Toshiba/Desktop/project-1/project-1/project-2/HowtoFallinLove.html"
	window.open(url)
})

$("#details4").click(function(){
	var url = "file:///C:/Users/Toshiba/Desktop/project-1/project-1/project-2/Wolf-Hall.html"
	window.open(url)
})

$("#details5").click(function(){
	var url = "file:///C:/Users/Toshiba/Desktop/project-1/project-1/project-2/Brideshead-Revisited.html"
	window.open(url)
})

$("#details6").click(function(){
	var url = "file:///C:/Users/Toshiba/Desktop/project-1/project-1/project-2/1984.html"
	window.open(url)
})

$("#add").click(function(){
	var text = $("#input-text").val()
	if(text === ""){
		alert("You must write something!")
	}else{
	$("#addhere").append("<p>"+text+"</p>")	
}
console.log(localStorage)
$("#input-text").val("")
})

$("#enter").click(function() {
	var visitor=$("#your-name").val()
	var url = "file:///C:/Users/Toshiba/Desktop/project-1/project-1/project-2/index2.html"
	alert("Welcome  "+  visitor  +" In Our Books World....."+"Today a reader, Tomorrow a leader")
	window.open(url)
});
// $("#search").click(function(){
// 	var book = ["1948","The kite runner","Eat, Pray, Love","How to Fall in Love","Wolf Hall","Brideshead Revisited"]
// 	var text = $("#search-book").val()
// 	if(text === ""){
// 		alert("You must write something!")
// 	}else if (text === ){
//     window.open()
// 	}
// 	alert("we don't have this book")
	
// })