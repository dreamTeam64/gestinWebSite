var frame;
var spinner;

frame = document.getElementsByTagName('iframe')[0];
console.log(frame);

spinner = document.getElementById('spinner');


frame.addEventListener("load",function(){
  spinner.style.display = "none";
});
