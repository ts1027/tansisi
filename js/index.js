$(function(){        
    	$(".main-menu span").click(function(i){
		var id =  $(this).attr('class');
		id = id.split('-');

		$(".menu-container .content").slideUp('slow');
		$(".menu-container #menu-"+id[1]).slideDown('slow');		
		$(".menu-container .homepage").slideUp('slow');
		return false;
	});


	$(".main-menu span.homebutton").click(function(){
		$(".menu-container .content").slideUp('slow');
		$(".menu-container .homepage").slideDown('slow');
		$(".myhead").animate({marginLeft:'45%'}, "slow");
		$(".myhead").animate({marginTop:'120px'}, "slow");
		return false;
	});

	$(".main-menu span.aboutbutton").click(function(){
		$(".menu-container .content").slideUp('slow');
		$(".menu-container .about-section").slideDown('slow');
		$(".myhead").animate({marginTop:'0'}, "slow");
		$(".myhead").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu span.projectbutton").click(function(){
		$(".menu-container .content").slideUp('slow');
		$(".menu-container .gallery-section").slideDown('slow');
		$(".myhead").animate({marginTop:'0'}, "slow");
		$(".myhead").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu span.contactbutton").click(function(){
		$(".menu-container .content").fadeOut();
		$(".menu-container .contact-section").slideDown('slow');
		$(".myhead").animate({marginTop:'0'}, "slow");
		$(".myhead").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$('.toggle-menu').click(function(){
        $('.show-menu').stop(true,true).slideToggle();
        return false;
    });

    $('.show-menu span').click(function() {
    	$('.show-menu').fadeOut('slow');
    });

    var pages=$(".box-content .zuopin")
    var btns=$(".pages li")
    btns.click(function(){
    	var index=btns.index(this);
    	pages.css({display:'none'}).eq(index).fadeIn(1000)

     })
})
