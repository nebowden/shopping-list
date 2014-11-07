$(document).ready(function(){

//slide down menu for filtering list items
	$('.show').click(function(){
		$('.show-options').slideToggle();
	});

//slide down menu for adding list items
	$('.add-button').click(function(){
		$('.add-form').slideToggle();
	});

//adding input to list form
	$('.add-item-button').click(function(){
		var item_name_input = $('.add-item-container').find("input[name='grocery-item']").val();
		var item = $('<li><input type="checkbox" name="obtained">'+item_name_input+'<i class="fa fa-close"></i></li>');
		$('.list-box > ul').prepend(item);
	});

//graying out checked items
	$("ul").on('click', 'li', function(){
		$(this).toggleClass("checked");
		});

})