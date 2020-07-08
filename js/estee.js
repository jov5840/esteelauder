$(function(){
    //banner ==================================================
   $('.sp-close-w').click(function(){
      $('#top-banner').hide();
      $('body').removeClass('banner-on');
   })

    //nav ================================================== 
    //메뉴버튼 
   $('.btn-menu').click(function(){
      $('body').toggleClass('open');
      $('body').removeClass('scroll')
      $(this).toggleClass('sp-m-menu sp-m-close');                           
   })

   
    //검색 열기 버튼 
   $('.btn-search-open').click(function(){
      $('.util form').toggle();                         
   })

   var windowW;  
    //resize  
   $(window).resize(function () { 
      windowW=$(this).width(); 
      $('.gnb > li, .gnb > li > a').off();
      $('.gnb > li').removeClass('active');
      if(windowW<1100){
         $('.gnb .sub').css('display','none');
         $('.gnb > li > a').on('click',function(){                
            if($(this).next('.sub').css('display')=='block'){
               $('.gnb .sub').hide();
               $('.gnb > li').removeClass('active');
               }else{                
                  $('.gnb .sub').hide();    
                  $('.gnb > li').removeClass('active');
                  $(this).next('.sub').show();
                  $(this).parent().addClass('active');
               }                
         })        
      }else{
         $('.gnb .sub').css('display','block');
         $('.gnb > li').on({
            'mouseenter':function () {
               if($(this).has('.sub').length == 1){
                  $('header').addClass('show')
               }else{
                  $('header').removeClass('show')
               }
               },
            'mouseleave':function() { 
               $('header').removeClass('show')
            }
         });
      }   
   });

   $('.sp-m-arrow').click(function(){
      $(this).parents('.sub-menu > li').toggleClass('depth')
   })


    //scroll
   $(window).on('mousewheel',function(e, delta){                
      if(delta > 0){
         $('body').removeClass('scroll');
      }else if(delta < 0){
         $('body').addClass('scroll');
      }
   })
    // main-slide ==================================================
   var mainSwiper = new Swiper('.main-slide .swiper-container', {
      navigation: {
         nextEl: '.main-slide .next',
         prevEl: '.main-slide .prev',
      },
      loop:true,
      pagination: {
         el: '.main-slide .swiper-pagination',
         clickable: true,         
      },
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false
        // }
   });

     // newbest ==================================================
   $('.tab-nav a').click(function(e){
      e.preventDefault();         
      var id=$(this).attr('href');
      $('.tab-nav a').removeClass();
      $(this).addClass('active');
      $('.tab-contents > div').hide();
      $(id).show()
      newBestSlideReset();
      if(id=='#tabnew'){
         $('.progress').removeClass('right');
      }else{
         $('.progress').addClass('right');
      }
   })

   var newBest={
      slidesPerView:'auto',
      spaceBetween:20,
      loop:true, 
      centeredSlides:true,
      breakpoints: {            
         768: {
            spaceBetween: 50
         }
      }    
   }
   
   var newBestSlide=new Swiper('.newbest .swiper-container',newBest);
   $(window).resize(function(){        
      newBestSlideReset();
   }).resize();
   
   function newBestSlideReset(){
      if(newBestSlide!=undefined){
         newBestSlide[0].destroy();
         newBestSlide[1].destroy();
      }
      if(windowW<1100){
         newBestSlide=new Swiper('.newbest .swiper-container',newBest);
      }
   }

    // skin ==================================================
    // init Isotope
   var $grid = $('.grid').isotope({
      itemSelector: '.color-shape'
   });
    // store filter for each group
   var filters = {};
   $('.filters').on( 'click', '.button', function( event ) {
      var $button = $( event.currentTarget );
      // get group key
      var $buttonGroup = $button.parents('.button-group');
      var filterGroup = $buttonGroup.attr('data-filter-group');
      // set filter for group
      filters[ filterGroup ] = $button.attr('data-filter');
      // combine filters
      var filterValue = concatValues( filters );
      // set filter for Isotope
      $grid.isotope({ filter: filterValue });
   });
    // change is-checked class on buttons
   $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function( event ) {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      var $button = $( event.currentTarget );
      $button.addClass('is-checked');
      });
   });
    // flatten object by concatting values
   function concatValues( obj ) {
      var value = '';
      for ( var prop in obj ) {
         value += obj[ prop ];        
      }
      return value;
   }

   $('.video-tab-nav img').click(function(){
      $('.video-tab-nav div').hide()
      $('.video-tab-nav li').removeClass();
      $(this).parent('li').addClass('active');
      $(this).next('div').show()
   })
   $('.video button').click(function(){
      $(this).parent('div').hide()
   })

    //review ==================================================
   var reviewSwiper = new Swiper('.review .swiper-container', {
      navigation: {
         nextEl: '.review .next',
         prevEl: '.review .prev',
      },
      loop:true,
      pagination: {
         el: '.review .swiper-pagination',
         clickable: true,         
      },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
         //1100이상
         1100: {
            slidesPerView: 2,
            spaceBetween: 20
         },
      }
   }); 

    //popup
   $('.sp-log').click(function(){
      $('.login-box').toggle()
   })

   $('.sp-map').click(function(){
      $('.map-box').toggle()
   })
})