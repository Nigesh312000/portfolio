$(document).ready(function()            
                 {
                 var typed3 = new Typed(".type", {
    strings: [""],
    typeSpeed: 60,
    backSpeed: 60,
    smartBackspace: true, // this is a default
    loop: true
  });
    
       $(function() {
        $('.sk').easyPieChart({
            //your options goes here
        });
    });
    
    
   $(function(){
       
        
       $('.htmlchild').css("width",280);
        $('.photoshop').css("width",290);
        $('.illustrator').css("width",200);
        $('.cplus').css("width",250);
        $('.java').css("width",250);
        $('.jqueryj').css("width",240);
   });
    
    $(function(){
        $('.logo').cycle({
            fx:      'turnDown', 
    delay:   -4000 
        })
    });
    
     $('.jsprofile').waypoint(function(direction)
                                {
        if(direction=="down")
            {
                $('nav').addClass('sticky');
            }
        else
            {
                $('nav').removeClass('sticky');
            }},{
        offset: '60px;'
    });
    
    
    $('.jspoint1').waypoint(function(direction)
                              {
        $('.jspoint1').addClass('animated fadeIn');
    },{offset:'50%'});
    
    
    $('.jspoint2').waypoint(function(direction)
                              {
        $('.jspoint2').addClass('animated fadeIn');
    },{offset:'50%'});
    $('.jspoint2').waypoint(function(direction)
                              {
        $('.jspoint3').addClass('animated fadeInUp');
    },{offset:'50%'});
});