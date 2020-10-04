$("#save").click(function() {
	var bookname=$("#book-name").val();
	var auther=$("#auther-name").val();
	var bookcover=$("#book-cover").val();
	var quote=$("#quote").val();
	var rate =$("#rate").val();
	var ownerwindow = window.open()
	$("<li>"+ownerwindow.document.write(bookname),
ownerwindow.document.write(auther),
ownerwindow.document.write(bookcover),
ownerwindow.document.write(quote),
ownerwindow.document.write(rate)+"</li>").appendTo("#list")


});
