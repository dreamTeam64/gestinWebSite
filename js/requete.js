function getJSON(name){
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open("GET",name,true);
    req.onerror = function () {
      console.log("erreur de chargement du fichier json");
    };
    req.onload = function(){
      if(req.status === 200) {
        var data = JSON.parse(req.responseText);
        resolve(data);
      } else {
        reject(Error("Error"+ req.status));
      }
    };
    req.send();
  });
}
