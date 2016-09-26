$(function(){
  setTimeout(function(){
    $('span[class="active"]').hide("slow");
    $('span[class="inactive"]').show("slow");
  },5000);
});
