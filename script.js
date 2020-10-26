// para subir e descer

//botão e div que sobe e desce (slider)
var toggle = document.getElementById('toggle');
var slider = document.querySelector('.slider');

toggle.addEventListener('click', toggleSlider);

// se o slider estiver aberto, muda o nome para closed
// (e vice-versa)
// no CSS altera-se a localização (-100%)
function toggleSlider(){
    if (slider.classList.contains('opened')) {
        slider.classList.remove('opened');
        slider.classList.add('closed');
    } else {
        slider.classList.remove('closed');
        slider.classList.add('opened');
    }
}


/*obter altura dos .title-wrappers
para centrar os h1 em altura*/
const vh = window.innerHeight;
var wrapper = document.getElementsByClassName('title-wrapper');

// calc é 100% da altura do viewport,
// menos altura do div
// a dividir por dois para fazer a margin-top

/*getElementsByClassName retorna uma array
então temos de iterar todas as wrapper*/
 /*
    // caso seja fora de loop
    wrapper[0].style.marginTop = (vh - wrapper[0].offsetHeight) /2 +"px";

    // margin top é 221
    console.log(wrapper[0].style.marginTop,
        "221px");

    wrapper[1].style.marginTop = (vh - wrapper[1].offsetHeight) /2 +"px";  */

for (var i = 0; i < wrapper.length; i++) {
    wrapper[i].style.marginTop = (vh - wrapper[i].clientHeight) /2 +"px";

    console.log("scroll", wrapper[0].scrollHeight);
    console.log("client", wrapper[0].clientHeight);
 }


 // TRANSPARENCY
// IP LOCATION
/* apenas funciona dentro do protocolo
de segurança https */

// recorrer a este website para aceder ao IP do user
fetch('https://ipapi.co/json/')
.then(function(response) {
  response.json()
  .then(jsonData => {
      // log do objeto jsonData
      // com info sobre o utilizador
      console.log(jsonData);
      
      // escrever na div
      // tornar string o objeto jsonData
      document.getElementById("demo").innerHTML = JSON.stringify(jsonData);
    })
})
// no caso de erro, comunicar
.catch(function(error) {
  console.log(error)
});


 document.getElementById("demo").innerHTML =
 "Screen width: " + screen.width
 + ", Screen Height: " + screen.height
 + ", Screen Color Depth: " + screen.colorDepth
 + ", App Version: " + navigator.appVersion
 + ", User Agent:" + navigator.userAgent
 + ", Platform: " + navigator.platform
 + ", Language: " + navigator.platform
 + ", Are you online?" + navigator.onLine
 + ", Everything: " + jsonData;