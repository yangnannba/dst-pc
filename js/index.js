
$(function(){	
$(".banner").backstretch(["images/banner-1.jpg","images/banner-2.jpg","images/banner-3.jpg"], {
        fade: 750,
        duration: 3000,
        preload: 1, //Use the lazy-loading functionality
        start: 2 //Optional - now starts with "dome.jpg"
   }); 
     }); 
     


        $(function () {
            $("#back-to-top").click(function(){
				if ($('html').scrollTop()) {
					$('html').animate({ scrollTop: 0 }, 1000);
					return false;
				}
				$('body').animate({ scrollTop: 0 }, 1000);
				return false;            
           });       
        }); 
        

	 


  
  
