$("#save").click(function() {
   var bookname=$("#book-name").val();
	var auther=$("#auther-name").val();
	var bookcover=$("#book-cover").val();
	var quote=$("#quote").val();
	var rate =$("#rate").val();
	var url = "file:///C:/Users/Toshiba/Desktop/project-1/project-1/two.html"
	window.open(url)
ownerwindow.document.write(bookname)


});
