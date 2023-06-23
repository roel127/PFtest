import $ from 'jquery';

$(function(){
  // 미디어 크기 설정
  let windowW = $(window).width();
    if(windowW > 1155){
      nav();
      aside();
    } else if(windowW > 980 && window <= 1154){
      nav();
      aside();
    } else if(windowW > 580 && window <= 979){
      nav();
      aside();
    } else if(windowW <= 579){
      nav();
      aside();
    }
})

// function
function nav(){
  $('nav li>a').on('click', function(){
    const navA = $(this).attr('href');
    console.log(navA);
    const aPos = $(navA).offset().top;
    const headerHeight = $('header').innerHeight();
    $('html, body').animate({scrollTop: aPos - headerHeight}, 800);
  })
}
function tNav(){
  let navW = $('nav').width();
  $('header .btn').on('click', function(){
    $(this).hide();
    $('nav').animate({left:0}, 500);
  });
  $('nav li>a').on('click', function(){
    let aHref = $(this).attr('href');
    let aPos = $(aHref).offset().top;
    let headerH = $('header').innerHeight();
    $('html, body').animate({scrollTop: aPos - headerH});
    $('nav').css('left', '-' + navW + 'px');
    $('header .btn').show();
    return false;
  })
  $('nav .close').on('click', function(){
    $('nav').css('left', '-' + navW + 'px');
    $('header .btn').show();
  })
}