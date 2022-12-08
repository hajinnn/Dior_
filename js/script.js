$(document).ready(function(){


  // 햄버거버튼 클릭
  $('header .hamberger').click(function(){
    $('header .hamberger span').toggleClass('active');
    
    $('.hbg-box').toggleClass('active');
    
    
  });
  // 햄버거박스 메뉴 슬라이드 부분

  // $(".menu-top >a").click(function(){
  //   var submenu = $(this).next(".menu-top ul");
  // if( submenu.is(":visible") ){
  //   submenu.slideUp();

  // }
  // else{
  //   submenu.slideDown();

  // }
    
  // });
  

  $('.hbg-box .menu-top').click(function(){
    // $(this).siblings().find('.top-menu svg').removeClass('active');
    // $(this).siblings().children('.sub-menu').slideUp();
    // $(this).find('.top-menu svg').toggleClass('active');
    // $(this).children('.sub-menu').slideToggle();

    $(this).siblings().find('.top-menu svg').removeClass('active');
    $(this).siblings().children('.sub-menu').slideUp();
    $(this).find('.top-menu svg').toggleClass('active');
    $(this).children('.sub-menu').slideToggle();
  });





  
  //sec-4 swiper
  var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 4,
    spaceBetween: 100,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      
      375: {
        slidesPerView: 1,  //브라우저가 375보다 클 때
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      760: {
        slidesPerView: 2,  //브라우저가 760보다 클 때
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      960: {
        slidesPerView: 3,  //브라우저가 960보다 클 때
        spaceBetween: 20,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 4,  //브라우저가 1200보다 클 때
        spaceBetween: 20,
        slidesPerGroup: 4,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
              delay: 1500,
              disableOnInteraction: false,
            },
  });

  $('.slide-view .btn-right').click(function(){
    $('.slide-view .slide-wrap').animate({
        // 애니메이트는 트렌지션 안걸어도 자연스럽게 넘어감
      left: -362
    },function(){
        $('.slide-view .slide-wrap').css({
            left: 0
        }).find('.img-box').first().appendTo('.slide-view .slide-wrap');
        // find 를 사용하는 이유는 하위요소의 이미지를 찾는것
        
    });
});

  // AOS
  AOS.init();

  // window width 플러그인 제거
  var ww = $(window).width();
  if(ww <= 1217) {
      console.log('mob')
      skrollr.init().destroy();
  }else {
  }
  $(window).resize(function(){
      var ww = $(window).width();
      console.log(ww)
      if(ww == 1183) {
          window.location.reload()
          skrollr.init().destroy();
      }   
  });

// 헤더 스크롤 이벤트
$(window).scroll(function(){
  const sct = $(window).scrollTop();
  if(sct >= 200){
      $('header').addClass('active');
      $('header .header-wrap .icon-box .search-box input').addClass('active');
      $('header .header-wrap .header-txt a').addClass('active');
      $('header .header-wrap svg').addClass('active');
      $('header .header-wrap .search svg path').addClass('active');
      $('header .header-wrap .icon-box .bag svg path').addClass('active');
      $('.hamberger a').addClass('active');
  }else{
      $('header').removeClass('active');
      $('header .header-wrap .icon-box .search-box input').removeClass('active');
      $('header .header-wrap .header-txt a').removeClass('active');
      $('header .header-wrap svg').removeClass('active');
      $('header .header-wrap .search svg path').removeClass('active');
      $('header .header-wrap .icon-box .bag svg path').removeClass('active');
      $('.hamberger a').removeClass('active');
  }
});


  $('.header-wrap .header-txt li').mouseenter(function(){
    const tab = $(this).attr('data-alt');
    $('.sub-menu-box .sub-menu').removeClass('active');
    $(`#${tab}`).addClass('active');

    $('header').addClass('active');
    $('header .header-wrap svg').addClass('active');
      $('header .header-wrap .search svg path').addClass('active');
      $('header .header-wrap .icon-box .bag svg path').addClass('active');
      $('header .header-wrap .icon-box .search-box input').addClass('active');
    
    // 서브메뉴박스 보이게 처리
    $('.sub-menu-box').slideDown().addClass('active');

    // 로고메뉴 li 들 마우스 엔터&리브 색상 변경
    $('.header-txt li a').mouseenter(function(){
        $(this).addClass('active');
    });
    $('.header-txt li a').mouseleave(function(){
        $(this).removeClass('active');
        $('header').addClass('active');
    
    });
    
});






// 마우스 벗어났을 때 서브메뉴박스 안보이게 처리
$('.sub-mini-box').mouseleave(function(){
  $('.sub-menu-box').slideUp().removeClass('active');
  $('header').removeClass('active');
  
});
// 마우스 벗어났을 때 서브메뉴박스 안보이게 처리
$('.sub-menu-box').mouseleave(function(){
  $(this).slideUp().removeClass('active');
  $('header').removeClass('active');
  $('header .header-wrap svg').removeClass('active');
  $('header .header-wrap .search svg path').removeClass('active');
  $('header .header-wrap .icon-box .bag svg path').removeClass('active');
  $('header .header-wrap .icon-box .search-box input').removeClass('active');
  
});

$('.sub-menu-box #tab1').mouseenter(function(){
    $('.header-wrap .header-txt li .one').addClass('active');
  });
  $('.sub-menu-box #tab1').mouseleave(function(){
    $('.header-wrap .header-txt li .one').removeClass('active');
  });
  $('.sub-menu-box #tab2').mouseenter(function(){
    $('.header-wrap .header-txt li .two').addClass('active');
  });
  $('.sub-menu-box #tab2').mouseleave(function(){
    $('.header-wrap .header-txt li .two').removeClass('active');
  });

  // 동작 script
  
    
    // 카드박스

    $('.box').mouseenter(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
        // $('.box .text-box').addClass('active');
    });
    
  // 스크롤 제어 script
  $(window).scroll(function(){
      var myPos = $(window).scrollTop();
      var sec2Pos = $('.sec2').offset().top;
      var sec3Pos = $('.sec3').offset().top - $(window).height();
      var auditionPos = $('.both-side').offset().top - 300;
      if(myPos < sec2Pos && ww > 1183){
          // $('.sec2-container').attr('data-0', '');
          // $('.sec2-container').attr('data-4000', '');
          // $('.sec2-container').attr('style', '');
          // $('.sec2-container').removeClass('skrollable')
          // $('.sec2-container').removeClass('skrollable-between')
          skrollr.init().destroy();
          // $('.sec2-container').css({
          //     position: 'static',
          //     top: 0,
          //     left: 0,
          //  });
      }else if(myPos >= sec2Pos && myPos < sec3Pos && ww > 1183) {
          console.log('working')
          skrollr.init();
          $('.sec2-container').css({
              position: 'fixed',
              top: 0,
              left: 0
          })
      }else if(myPos >= sec3Pos && myPos < auditionPos){
          // $('.sec2-container').css({
          //     position: 'absolute',
          //     top: 'auto',
          //     bottom: 0,
          //     left: 0
          // })
      }else if(myPos >= (auditionPos)) {
          auditionScr();
      }
  }) 
  

  // audition 스크롤 효과
  function auditionScr() {
      console.log('af')
      $('.both-side-inner > p').css({
          opacity: 1,
          transform: 'translateY(0px)'
      })
      setTimeout(function(){
          $('.both-side-inner > span').css({
              opacity: 1,
              transform: 'translateY(0px)'
          })
      }, 150)
      setTimeout(function(){
          $('.both-side__line').css({
              height: '60vh'
          })
      }, 400)
      setTimeout(function(){
          $('.both-side__middle').css({
              opacity: 1
          })
      }, 1300)
  }



  // sec-3 마우스엔터 효과
  $('.video__more ul li .more').mouseenter(function(){
    $(this).addClass('active');
  });
  $('.video__more ul li .more').mouseleave(function(){
    $(this).removeClass('active');
  });


  

  $('.both-side__box').mouseenter(function(){
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
    // $('.box .text-box').addClass('active');
});


}); //end

