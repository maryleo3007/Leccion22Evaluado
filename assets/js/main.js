var panditas = [];

function Panda(name,img) {
  this.name = name;
  this.img = img;
}

function showHide(id) {
  if(id.style.display ==='none'){
      id.style.display="block";
  }else{
     id.style.display="none";
  }
}

function closePanda() {
  this.parentNode.style.display = "none";
}

function createHtmlPanda(name,srcFoto) {
  var df = document.createDocumentFragment();
   var figure= document.createElement("figure");
   figure.setAttribute("class","figure-panda");
   var img = document.createElement("img");
   img.setAttribute("src",srcFoto);
   var button = document.createElement("button");
   button.setAttribute("class","btn-close-panda");
   button.appendChild(document.createTextNode("X"));

   figure.appendChild(img);
   figure.appendChild(button);
   df.appendChild(figure);
   return df;
}

function printPandaHtml(parent){
    parent.innerHTML = "";
    panditas.forEach(function(elemento){
        parent.appendChild(createHtmlPanda(elemento.name,elemento.img));
    });
}

window.addEventListener("load",function(){

  var contentLeft = document.getElementById("contentLeft");
  var contentRight = document.getElementById('contentRight');
  var btnExtincion = document.getElementById('btnExtincion');
  var btnOrigen = document.getElementById('btnOrigen');
  var btnCloseImgPanda = document.getElementsByClassName('btn-close-panda');
  var btnRestaurar = document.getElementById("btnRestaurar");
  var figurePanda = document.getElementsByClassName("figure-panda");
  var contenedorImagenes = document.getElementById("contenedorImagenes");

  var panda1 = new Panda("panda1","assets/img/panda1.jpg");
  var panda2 = new Panda("panda2","assets/img/panda2.jpg");
  var panda3 = new Panda("panda3","assets/img/panda3.jpg");
  var panda4 = new Panda("panda4","assets/img/panda4.jpg");
  panditas.push(panda1,panda2,panda3,panda4);

  printPandaHtml(contenedorImagenes);

  //mostrar ocultar div
  btnOrigen.addEventListener("click",function () {
    showHide(contentLeft);
  });

  btnExtincion.addEventListener("click",function () {
    showHide(contentRight);
  });

  //cerrar imagenes de panda
  for (var i = 0; i < btnCloseImgPanda.length; i++) {
    btnCloseImgPanda[i].addEventListener("click",closePanda);
  }
  //restaurar imagenes
  btnRestaurar.addEventListener("click",function () {
    for (var i = 0; i < figurePanda.length; i++) {
      figurePanda[i].removeAttribute("style");
    }
  });
});
