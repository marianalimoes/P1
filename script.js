var d = document;

// OPEN & CLOSE
// se o slider estiver aberto, muda o nome para .closed (e vice-versa)
// no CSS altera-se a localização (-100%)
var toggle = d.getElementById('toggle');
var slider = d.querySelector('.slider');

// no click, abrir
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
// recorrer a este website para aceder ao IP do user
fetch('https://ipapi.co/json/')
    .then(function(response) {
        response.json().then(jsonData => {
            console.log(jsonData.city);
            
            // ir buscar respetivo dado e
            // escrever dentro de cada elemento
            d.getElementById('online').innerText = "Are you online? " + navigator.onLine;
            d.getElementById("ip").innerText = "Your IP Address: " + jsonData.ip;
            d.getElementById("cont").innerText = "Continent: " + jsonData.continent_code;
            d.getElementById("country").innerText = "Country: " + jsonData.country_code + " | " + jsonData.country_name;
            d.getElementById("region").innerText = "Region: " + jsonData.region;
            d.getElementById("city").innerText = "City: " + jsonData.city;
            d.getElementById("postal").innerText = "Postal-Code: " + jsonData.postal;
            d.getElementById("latlong").innerText = "Coordinates: " + jsonData.lat + ", " + jsonData.long;
            d.getElementById("timezone").innerText = "Timezone: " + jsonData.timezone;
            d.getElementById("utc").innerText = "UTC: " + jsonData.utc_offset;
            d.getElementById("calling").innerText = "Dial Code: " + jsonData.country_calling_code;
            d.getElementById("currencyName").innerText = "Currency: " + jsonData.currency_name;
            d.getElementById("lang").innerText = "Languages: " + jsonData.languages;
            d.getElementById("org").innerText = "Organization: " + jsonData.org;
            d.getElementById("ip").innerText = "Your IP Address: " + jsonData.ip;
            d.getElementById("platform").innerText = "Platform: " + navigator.platform;
            d.getElementById("userAgent").innerText = "User Agent: " + navigator.userAgent;
            d.getElementById("appVersion").innerText = "App Version: "+ navigator.appVersion;
            
        });
    })
    .catch(function(error) {
        console.log(error)
    });

// FONT WEIGHT
// após x milissegundos, aumentar tamanho de privacy
setTimeout(weight,700)
var priv = d.getElementById("privacy");
function weight() {
    priv.classList.toggle('black');
}


// SCROLLER
setInterval(scroller, 10);

// apanhar as linhas do texto (<p>)
let lines = d.querySelectorAll('.line');

// randomizar começo/left de cada line
function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function scroller() {
    // como querySelectorAll retorna uma lista,
    // usar um loop para iterar por todas as lines
    lines.forEach(line => {

        // aplicar left random para começar em sítios diferentes
        ////// TENTATIVA de aplicar nrs randomizados à padding da linha
        // var rando = getRandom(5)
        // line.style.paddingLeft = rando;

               // para aumentara margem da esquerda
        let margin = line.offsetLeft;
        margin += 1;

        // aplicar margem
        line.style.left= `${margin}px`;
        // string literal; igual a escrever (""+margin+"px")

        // para voltar ao início
        const canvas = innerWidth;
        const lineWidth = line.getBoundingClientRect().width;

        // se margem da esq. for > que o viewport, voltar ao início
        if (margin > canvas){
            line.style.left = "" + lineWidth *(-1) + "px";
        }
    })
}