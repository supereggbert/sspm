$(function(){
  var offset=0;
  var lastScroll=0;
  $(window).bind('scroll',function(){
    var scrollTop=$(window).scrollTop();
    offset+=(scrollTop-lastScroll)/10;
    offset=Math.max(0,Math.min(offset,20));
    $('.header').css('top',-offset+"px");
    $('.header').css('height',79-offset+"px");
    lastScroll=scrollTop;
  });
});
