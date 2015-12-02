$(document).ready(function(){
	
	$(".user-bar-item-settings").click(function(){
		if ($('.popover').hasClass('popover-active')) {
			$('.popover').removeClass('popover-active');	
		} else {
			$('.popover').show();
				$('.popover').addClass('popover-active');
		}
	});	

	$('.header2').click(function(){
		if ($('.popover').hasClass('popover-active')) {
			$('.popover').removeClass('popover-active');	
		} 
	});

	$('.content').click(function(){
		if ($('.popover').hasClass('popover-active')) {
			$('.popover').removeClass('popover-active');	
		} 
	});

	$('.content2').click(function(){
		if ($('.popover').hasClass('popover-active')) {
			$('.popover').removeClass('popover-active');	
		} 
	});

	$('.content3').click(function(){
		if ($('.popover').hasClass('popover-active')) {
			$('.popover').removeClass('popover-active');	
		} 
	});

	$('.search-header').click(function(){
		if ($('.popover').hasClass('popover-active')) {
			$('.popover').removeClass('popover-active');	
		} 
	});
	


	$(".cupcake-image1").hover(function(){
		$(this).addClass('cupcake-image1-active');
		$('.title').addClass('title-active');
	}, function()	{
		$(this).removeClass('cupcake-image1-active');
		$('.title').removeClass('title-active');

	});

	$(".title").hover(function(){
		$(this).addClass('title-active');
		$('.cupcake-image1').addClass('cupcake-image1-active');
	}, function()	{
		$(this).removeClass('title-active');
		$('.cupcake-image1').removeClass('cupcake-image1-active');
	});

	$(".entry-image").hover(function(){
		$(this).addClass('entry-image-active');
	}, function()	{
		$(this).removeClass('entry-image-active');

	});




	$(".entry3").hover(function(){
		$(this).addClass('cupcake-image1-active');
	}, function()	{
		$(this).removeClass('cupcake-image1-active');

	});

	$(".entry-heart").click(function(){
		if ($(this).attr("src")=="assets/img/heart.png"){
			$(this).attr("src", "assets/img/redheart.png");
     	} else {
     		$(this).attr("src", "assets/img/heart.png");
     	}

  	});


  	$(".entry-heart3").click(function(){
		if ($(this).attr("src")=="assets/img/heart.png"){
			$(this).attr("src", "assets/img/redheart.png");
     	} else {
     		$(this).attr("src", "assets/img/heart.png");
     	}

  	});

  	

	$(".user-bar-item-settings").hover(function(){
		$(this).addClass('user-bar-item-settings-active');
	}, function()	{
		$(this).removeClass('user-bar-item-settings-active');

	});

	$(".popover-item").hover(function(){
		$(this).addClass('user-bar-item-settings-active');
	}, function()	{
		$(this).removeClass('user-bar-item-settings-active');

	});

	

	

	



	

		
});




