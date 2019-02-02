// Check Off Specific Todos By Clicking
$("#todo").on("click", "li", function(){
	// $(this).toggleClass("completed");
	// store value of clicked todo
	var don = $(this).text();
	// move clicked todo to #done list
	$("#done").append("<li class = 'completed'><span><i class='far fa-trash-alt'></i></span> " + don + "</li>");
	// remove clicked todo from #todo list
	$(this).fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Check On Specific Todos By Clicking
$("#done").on("click", "li", function(){
	// $(this).toggleClass("completed");
	// store value of clicked todo
	var don = $(this).text();
	// move clicked todo to #done list
	$("#todo").append("<li><span><i class='far fa-trash-alt'></i></span> " + don + "</li>");
	// remove clicked todo from #todo list
	$(this).fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Click On X To Delite Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
	if (event.which === 13) {
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("#todo").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
	}
})

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
});