$(function (){
   steps_image_seting = [
       {
           'imgdisable': 'img/check_icon_disable.png',
           'imgload': 'img/check_icon_load.png',
           'imgactive': 'img/check_icon_active.png'
       },
       {
           'imgdisable': 'img/check_icon_disable.png',
           'imgload': 'img/check_icon_load.png',
           'imgactive': 'img/check_icon_active.png'
       },
       {
           'imgdisable': 'img/check_icon_disable.png',
           'imgload': 'img/check_icon_load.png',
           'imgactive': 'img/check_icon_active.png'
       }
   ];
   countStep = $('.form_wizard section .form_item').length;
   nbr_step = 0;
    
    $('.nxt_btn').click(function (){
        $(window).scrollTop(0);
        if(nbr_step < (countStep-1)){
            nbr_step = nbr_step + 1;
        }
        
        $('.form_wizard header .steps_liste_view .item')
            .eq(nbr_step - 1).find('img')
            .attr('src',steps_image_seting[nbr_step - 1].imgactive);
    
        $('.form_wizard header .steps_liste_view .item')
            .eq(nbr_step).find('img')
            .attr('src',steps_image_seting[nbr_step].imgload);    
    
        
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step).removeClass('disable');
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step).addClass('active');
        
        $('.form_wizard section .form_item:visible').hide();
        $('.form_wizard section .form_item').eq(nbr_step).fadeIn(500);
    });
    
    $('.pre_btn').click(function (){
        $(window).scrollTop(0);
        if(nbr_step > 0){
            nbr_step = nbr_step - 1;
        }
        
        $('.form_wizard header .steps_liste_view .item')
            .eq(nbr_step + 1).find('img')
            .attr('src',steps_image_seting[nbr_step + 1].imgdisable);
            
        $('.form_wizard header .steps_liste_view .item')
            .eq(nbr_step).find('img')
            .attr('src',steps_image_seting[nbr_step + 1].imgload);
    
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step + 1).removeClass('active');
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step + 1).addClass('disable');
        
        $('.form_wizard section .form_item:visible').hide();
        $('.form_wizard section .form_item').eq(nbr_step).fadeIn(500);
    });
});