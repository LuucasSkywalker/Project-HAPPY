const map = L.map('mapid').setView([51.505, -0.09], 13);//map pego do Leaflet

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
/*adicionando uma " tilelayer -br(camada)" para o 'map' da const .addTo(map) . Foi passado uma
um paramentro e dentro desse parametro tem um objeto que é attribution*/

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup(); 
/* adicionando um marcador em um parametro pegando elemento dois valores
dentro de um array ([51.5, -0.09]) e adicionando ão map, .addTo(map)*/ 