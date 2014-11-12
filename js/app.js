$(document).ready(function(){

//slide down menu for filtering list items
	$('.show').click(function(event){
		event.preventDefault();
		$('.show-options').slideToggle();
		$('.add-form').slideUp();
	});

//slide down menu for adding list items
	$('.add-button').click(function(event){
		event.preventDefault();
		$('.add-form').slideToggle();
		$('.show-options').slideUp();
	});

//clear text box
	$(".text-entry").click(function(){
		$(this).val('');
	});

//adding input to list form and assigning categories to added items
var addItem = function(){
		var item_name_input = $('.add-item-container').find("input[name='grocery-item']").val();
		var item = $('<li><input type="checkbox" name="obtained"><i class="fa fa-close"></i>'+item_name_input+'</li>');
		$('.list-box > ul').prepend(item);
		$('.text-entry').focus().val('');
	};

var assignCategory = function (){	
	if ($("input[value='produce']").is(":checked"))
		{
			$('.shopping-list li').first().addClass("produce-class");
		};
	if ($("input[value='dairy']").is(":checked"))
		{
			$('.shopping-list li').first().addClass("dairy-class");
		};
	if ($("input[value='meat/deli']").is(":checked"))
		{
			$('.shopping-list li').first().addClass("meat-deli-class");
		};
	if ($("input[value='frozen foods']").is(":checked"))
		{
			$('.shopping-list li').first().addClass("frozen-foods-class");
		};
	if ($("input[value='dry goods']").is(":checked"))
		{
			$('.shopping-list li').first().addClass("dry-goods-class");
		};
	if ($("input[value='pharmacy']").is(":checked"))
		{
			$('.shopping-list li').first().addClass("pharmacy-class");
		};
	if ($("input[value='other']").is(":checked"))
		{
			$('.shopping-list li').first().addClass("other-class");
		};
	};

$('.add-item-button').on('click', function(event){
	event.preventDefault();
	addItem();
	assignCategory();
	});

$('.add-item-container').keydown(function (event){
		if(event.which==13)
		{
		addItem();
		assignCategory()};
	});

//graying out checked items
	$(".shopping-list").on('click', "input[name='obtained']", function(){
		$(this).closest("li").toggleClass("checked");
		});

//removing list items
	$(".shopping-list").on('click', ".fa-close", function(){
		$(this).closest("li").remove();
		});

//close form for adding items
$('.add-item-container').click(function(event) {
	event.stopPropagation();
});

$(document).click(function(){
	$('.add-form').slideUp();
});

//filtering by shopping category
$('.show-produce').click(function(event){
	event.preventDefault();
	$('.produce-class').show();
	$('.dairy-class').hide();
	$('.meat-deli-class').hide();
	$('.frozen-foods-class').hide();
	$('.dry-goods-class').hide();
	$('.pharmacy-class').hide();
	$('.other-class').hide();
});

$('.show-all').click(function(event){
	event.preventDefault();
	$('.produce-class').show();
	$('.dairy-class').show();
	$('.meat-deli-class').show();
	$('.frozen-foods-class').show();
	$('.dry-goods-class').show();
	$('.pharmacy-class').show();
	$('.other-class').show();
});

$('.show-dairy').click(function(event){
	event.preventDefault();
	$('.produce-class').hide();
	$('.dairy-class').show();
	$('.meat-deli-class').hide();
	$('.frozen-foods-class').hide();
	$('.dry-goods-class').hide();
	$('.pharmacy-class').hide();
	$('.other-class').hide();
});

$('.show-meat').click(function(event){
	event.preventDefault();
	$('.produce-class').hide();
	$('.dairy-class').hide();
	$('.meat-deli-class').show();
	$('.frozen-foods-class').hide();
	$('.dry-goods-class').hide();
	$('.pharmacy-class').hide();
	$('.other-class').hide();
});

$('.show-frozen').click(function(event){
	event.preventDefault();
	$('.produce-class').hide();
	$('.dairy-class').hide();
	$('.meat-deli-class').hide();
	$('.frozen-foods-class').show();
	$('.dry-goods-class').hide();
	$('.pharmacy-class').hide();
	$('.other-class').hide();
});

$('.show-dry').click(function(event){
	event.preventDefault();
	$('.produce-class').hide();
	$('.dairy-class').hide();
	$('.meat-deli-class').hide();
	$('.frozen-foods-class').hide();
	$('.dry-goods-class').show();
	$('.pharmacy-class').hide();
	$('.other-class').hide();
});

$('.show-pharmacy').click(function(event){
	event.preventDefault();
	$('.produce-class').hide();
	$('.dairy-class').hide();
	$('.meat-deli-class').hide();
	$('.frozen-foods-class').hide();
	$('.dry-goods-class').hide();
	$('.pharmacy-class').show();
	$('.other-class').hide();
});

$('.show-other').click(function(event){
	event.preventDefault();
	$('.produce-class').hide();
	$('.dairy-class').hide();
	$('.meat-deli-class').hide();
	$('.frozen-foods-class').hide();
	$('.dry-goods-class').hide();
	$('.pharmacy-class').hide();
	$('.other-class').show();
});

//close show menu

$('.show-options a').click(function(){
	$('.show-options').slideUp();
});

$('.dropdown').click(function(event) {
	event.stopPropagation();
});

$(document).click(function(){
	$('.show-options').slideUp();
});

//clear all

$(".clear-all").on('click', function(event){
	event.preventDefault();
	$('.shopping-list').find('li').remove();
	});

})