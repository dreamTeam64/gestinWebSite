$(function(){
  moveText();
});

var moveText = function(){
  setTimeout(function(){
    $('span[class="active"]').fadeOut();
    $('span[class="active"]').removeClass("active");
    $('span[class="active"]').addClass("inactive");
    setTimeout(function(){
      $('span[class="inactive"]').fadeIn();
      $('span[class="inactive"]').removeClass("inactive");
      $('span[class="inactive"]').addClass("active");
      moveText();
    },1000);

  },5000);

}
