window.onload = function(){
  var mess_class;
  var spanElt;

  mess_class = document.getElementsByClassName('mess')[0];

  console.log(mess_class);
  console.log(mess_class.childNodes);

  console.log(mess_class.querySelector("span"));
  console.log(mess_class.querySelector("span").nextElementSibling);

  function animText(){
    setTimeout(function () {

      spanElt = mess_class.querySelector("span");

      spanElt.removeAttribute("class");
      spanElt.setAttribute("class","inactive");
      spanElt.nextElementSibling.removeAttribute("class");
      spanElt.nextElementSibling.setAttribute("class","active");


      mess_class.insertBefore(spanElt.nextElementSibling,spanElt);


      animText();
    }, 10000);
  }

  animText();


};
