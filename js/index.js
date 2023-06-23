import $ from 'jquery';

$(function(){
  // 미디어 크기 설정
  let windowW = $(window).width();
    if(windowW > 1155){
      nav();
    } else if(windowW > 980 && windowW <= 1154){
      nav();
      action();
    } else if(windowW > 580 && windowW <= 979){
      tNav();
      gallery();
    } else if(windowW <= 579){
      nav();
      gallery();
      form();
    }
});

// function
//nav
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

// gallery
function gallery(){
  let figureW = $('#all figure').width();
  $('#all>figure:last').prependTo('#all');
  $('#all').css('margin-left', '-' + figureW + 'px');

  $('#gallery .prev').on('click', function(){
    $('#all').animate({marginLeft: '+=' + figureW + 'px'}, 600, function(){
      $('#all>figure:last').prependTo('#all');
      $('#all').css('margin-left', '-' + figureW + 'px');
    })
  })
  $('#gallery .next').on('click', function(){
    $('#all').animate({marginLeft: '-=' + figureW + 'px'}, 600, function(){
      $('#all>figure:first').appendTo('#all');
      $('#all').css('margin-left','-' + figureW + 'px');
    })
  })
}

// contact
function form(){
  const $liForm = $('#box04 li>input, #box04 li>textarea');
  $liForm.removeAttr('placeholder');
  $liForm.on('focus', function(){
    $(this).prev('label').fadeOut(400);
  })
  $liForm.on('blur', function(){
    const str = $(this).val();
    if(str === ''){
      $(this).prev('label').fadeIn(400);
    }
  })
}

// modal
function modal(title,pic,year,program,url,text){
  this.title = title;
  this.pic = pic;
  this.year = year;
  this.program = program;
  this.url = url;
  this.text = text;
}
modal.prototype.action = function(){
  document.querySelector('#modal h4').innerHTML = this.title;
  document.querySelector('#modal figure>img').setAttribute('src', this.pic);
  document.querySelector('#modal figure>figcaption').innerHTML = this.title;
  document.querySelector('#modal dl>dd:nth-child(2)').innerHTML = this.year;
  document.querySelector('#modal dl>dd:nth-child(4)').innerHTML = this.program;
  document.querySelector('#modal dl>dd:nth-child(6)>a').setAttribute('href', this.url);
  document.querySelector('#modal dl>dd:nth-child(8)').innerHTML = this.text;
}
let mymodal = [
  new modal('title01','./images/pic01.png','2001','프로그램1','http://www.a1.com','설명01'),
  new modal('title02','./images/pic02.png','2002','프로그램2','http://www.a2.com','설명02'),
  new modal('title03','./images/pic03.png','2003','프로그램3','http://www.a3.com','설명03'),
  new modal('title04','./images/pic04.png','2004','프로그램4','http://www.a4.com','설명04'),
  new modal('title05','./images/pic05.png','2005','프로그램5','http://www.a5.com','설명05'),
  new modal('title06','./images/pic06.png','2006','프로그램6','http://www.a6.com','설명06'),
];
const btn = document.querySelectorAll('#box03 #all>figure');
const close = document.querySelector('#modal .close');
btn.forEach((item,index) => {
  item.addEventListener('click', function(){
    document.querySelector('#modal').style.display = 'block';
    mymodal[index].action()
  })
});
close.addEventListener('click', function(){
  document.querySelector('#modal').style.display = 'none';
});