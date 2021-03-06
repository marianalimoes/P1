var d = document;

// OPEN & CLOSE
// se o slider estiver aberto, muda o nome para .closed (e vice-versa)
// no CSS altera-se a localização (-100%)
var toggle = d.getElementById('toggle');
var slider = d.querySelector('.slider');

toggle.addEventListener('click', toggleSlider);
function toggleSlider(){
    slider.classList.toggle('opened');
}

// AUDIO
// unlock audio quando se clica no toggle
function playAudio(url) {
    new Audio(url).play();
}

// IP LOCATION
/* apenas funciona dentro do protocolo
de segurança https */
// recorrer a este website para aceder ao IP do user
fetch('https://ipapi.co/json/')
    .then(function(response) {
        response.json().then(jsonData => {
            console.log(jsonData.city);
            
            // ir buscar respetivo dado e
            // escrever dentro de cada elemento
            d.getElementById('online').innerText = "Are you online? " + navigator.onLine;
            d.getElementById("ip").innerText = " | Your IP Address: " + jsonData.ip + " | ";

            d.getElementById("cont").innerText = "Continent: " + jsonData.continent_code;
            d.getElementById("countryCode").innerText = " | " + jsonData.country_code;
            d.getElementById("country").innerText = "| Country: " + jsonData.country_name + " | ";

            d.getElementById("region").innerText = "Region: " + jsonData.region;
            d.getElementById("city").innerText = " | City: " + jsonData.city;
            d.getElementById("postal").innerText = " | Postal-Code: " + jsonData.postal + " | ";

            d.getElementById("latlong").innerText = "Coordinates: " + jsonData.latlong;
            d.getElementById("timezone").innerText = " | Timezone: " + jsonData.timezone;
            d.getElementById("utc").innerText = " | UTC: " + jsonData.utc_offset + " | ";

            d.getElementById("calling").innerText = "Dial Code: " + jsonData.country_calling_code;
            d.getElementById("currencyName").innerText = " | Currency: " + jsonData.currency_name;
            d.getElementById("lang").innerText = " | Languages: " + jsonData.languages + " | ";

            d.getElementById("org").innerText = "Organization: " + jsonData.org;
            d.getElementById("platform").innerText = " | Platform: " + navigator.platform + " | ";
            
            d.getElementById("appVersion").innerText = "App Version: " + navigator.appVersion+ " | ";

            d.getElementById("userAgent").innerText = "User Agent: " + navigator.userAgent + " | ";
            
        });
    })
    .catch(function(error) {
        console.log(error)
    });


// // CENTER WRAPPERS
// /*obter altura dos .title-wrappers
// para centrar os h1 em altura*/

// // cálculo:
// // 100% da altura do viewport,
// // menos altura do div
// // a dividir por dois
// // = margin-top

// const vh = screen.height;
// var wrapper = document.getElementsByClassName('title-wrapper');

// /*getElementsByClassName retorna uma array
// então temos de iterar todas as wrapper*/
//  /*
//     // caso seja fora de loop
//     wrapper[0].style.marginTop = (vh - wrapper[0].offsetHeight) /2 +"px";

//     // margin top é 221
//     console.log(wrapper[0].style.marginTop,
//         "221px");

//     wrapper[1].style.marginTop = (vh - wrapper[1].offsetHeight) /2 +"px";  */

// for (var i = 0; i < wrapper.length; i++) {
//     wrapper[i].style.marginTop = (vh - wrapper[i].clientHeight) /2 +"px";

//     console.log("clientHeight", wrapper[0].clientHeight);
//     console.log("vh", vh);
//     console.log("marginTop", wrapper[0].marginTop);
//  }