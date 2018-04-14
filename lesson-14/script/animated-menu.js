$(function(){
		// All jQuery code goes here
        $('.navigation > li').hover(function(){
            
            $(this).addClass('openSesame');
            
        }, function(){
            
            $(this).removeClass('openSesame');
        
            
        });
	})
