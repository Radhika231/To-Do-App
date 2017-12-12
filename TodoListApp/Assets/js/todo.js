//check off specific todos by clicking
$("ul").on("click","li",function()
{
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click","span",function(event)
{
	$(this).parent().fadeOut(function()
		{
			$(this).remove();//here this refers to li & not span because of the .parent()
		});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event)
{
	if(event.which===13)
	{
		//grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li & add to ul
		$("ul").append("<li><span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> "+todoText+"</li>");
	}
});

$(".fa-plus").click(function()
{
	$("input[type='text']").fadeToggle();
});