$(function(){
  //scroll navbar
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("a").removeClass("active1");
        $("nav").removeClass("navbar-dark");
        $("a").addClass("active2");
        $(".navbar").removeClass("active1");
        $("nav").addClass("navbar-light");
        $(".navbar").addClass("active2");
        $(".logo").attr("src", "images/logo.svg");
    } else {
       $("a").removeClass("active2");
       $("a").addClass("active1");
       $("nav").addClass("navbar-dark");
       $("nav").removeClass("navbar-light");
       $(".navbar").addClass("active1");
       $(".navbar").removeClass("active2");
       $(".logo").attr("src", "images/logo1.svg");
    }
});

//scrolTop
$btnScroll = $('.scrolTop');
$up = function(){
  $("html, body").scrollTop(0);
};
$(window).scroll(function(){
  if ($(this).scrollTop() > 400) {
    $btnScroll.removeClass("no-view");
    $btnScroll.addClass("view");
  }else{
    $btnScroll.removeClass("view");
    $btnScroll.addClass("no-view");
  }
});
 
$btnScroll.on('click', function(e){
  e.preventDefault();
  $up();
  return false;
});

//resize navbar
$(document).ready( function() {
  if($(window).width() < 792)
  {   
    $("a").removeClass("active1");
        $("nav").removeClass("navbar-dark");
        $("a").addClass("active2");
        $(".navbar").removeClass("active1");
        $("nav").addClass("navbar-light");
        $(".navbar").addClass("active2");
        $(".logo").attr("src", "images/logo.svg");  
  }
  else
  {
    $("a").removeClass("active2");
       $("a").addClass("active1");
       $("nav").addClass("navbar-dark");
       $("nav").removeClass("navbar-light");
       $(".navbar").addClass("active1");
       $(".navbar").removeClass("active2");
       $(".logo").attr("src", "images/logo1.svg");
  }
});

function resizeFunction() { 
    if ($(window).width() < 970) {
      $("a").removeClass("active1");
      $("nav").removeClass("navbar-dark");
      $("a").addClass("active2");
      $(".navbar").removeClass("active1");
      $("nav").addClass("navbar-light");
      $(".navbar").addClass("active2");
      $(".logo").attr("src", "images/logo.svg"); 
  }
  else
  {
    $("a").removeClass("active2");
       $("a").addClass("active1");
       $("nav").addClass("navbar-dark");
       $("nav").removeClass("navbar-light");
       $(".navbar").addClass("active1");
       $(".navbar").removeClass("active2");
       $(".logo").attr("src", "images/logo1.svg");
  }
}

resizeFunction();

$(window).resize(function() {
  resizeFunction();
});


//Galery
var $li = $('.img-list').find('> li'),
$links = $li.find('> a'),
$galery = $('.gallery'),
$lightbox = $galery.find('.lightbox'),
$next = $('.next'),
$prev = $('.prev'),
$overlay = $('.overlay'),
$closeButton = $('.close'),
liIndex,
targetImg;


var imgSources = [
'images/img-1-lg.jpg',
'images/img-2-lg.jpg',
'images/img-3-lg.jpg',
'images/img-4-lg.jpg',
'images/img-5-lg.jpg',
'images/img-6-lg.jpg',
'images/img-7-lg.jpg',
'images/img-8-lg.jpg',
'images/img-9-lg.jpg',
'images/img-10-lg.jpg',
'images/img-11-lg.jpg',
'images/img-12-lg.jpg',
'images/img-13-lg.jpg',
'images/img-14-lg.jpg',
'images/img-15-lg.jpg',
'images/img-16-lg.jpg',
'images/img-17-lg.jpg',
'images/img-18-lg.jpg'
];

var imgs = [];
for (var i = 0; i < imgSources.length; i++) {
imgs[i] = new Image();
imgs[i].src = imgSources[i];
}

function replaceImg(src) {
$lightbox.find('.img').attr('src', src);
}

function getHref(index) {
return $li.eq(index).find('>a').attr('href');
}
function openLigtbox() {

$lightbox.removeClass('no-view');
$lightbox.addClass('view');
}

function closeLigtbox() {
$lightbox.removeClass('view');
$lightbox.addClass('no-view');
}

$closeButton.click(closeLigtbox);

$(document).on('keyup',function(evt) {
if (evt.keyCode == 27) {
closeLigtbox();
}
});


$overlay.click(closeLigtbox);

$links.click(function(e) {
e.preventDefault();
targetImg = $(this).attr('href');
liIndex = $(this).parent().index();
replaceImg(targetImg);
openLigtbox();
});

$next.click( function() {  
if ( (liIndex + 1) < $li.length ) { 
targetImg = getHref(liIndex + 1);
liIndex ++;
} else {
targetImg = getHref(0);
liIndex = 0;
}
replaceImg(targetImg);
});

$prev.click( function() {  
if ( (liIndex) > 0 ) { 
targetImg = getHref(liIndex - 1);
liIndex --;
} else {
targetImg = getHref($li.length - 1);
liIndex = $li.length - 1;
}
replaceImg(targetImg);
});
});


