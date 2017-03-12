window.onload = function (){
  getJSON("./flux/products/products.json").then(function(response){
    console.log(response);
  },function(error){
    console.log("error : ",error);
  });
};
