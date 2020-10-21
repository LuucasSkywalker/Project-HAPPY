//Adicionando Zoom e estrutura leaflet
const map = L.map('mapid').setView([-17.7478233,-48.6266595], 14);
/*mapa do leaflet armazenada em uma constante 'const= map' e ligada a <div id="mapid"> no HTML.
Dentro da função (setView) tem dois parâmetros. Um dos parâmetros é um array que existe 2
 elementoS ("[-17.7478233 ,-48.6266595]" ,14). 
O valor '-17.7478233' é logintude o outro elemento '-48.6266595' é a latitude.
 Ultimo parâmetro ',14' é o zoom. IMPORTANTE 'Para pegar o mapa desejado basta pegar as 
 cordenadas no maps do google*/

//Adicionando MAPA leaflet
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

}).addTo(map);
//adicionando uma " tilelayer -br(camada)" para o 'map' da const .addTo(map) 


//adicionando icone na localização (marker)
const icon = L.icon({
// criado uma const = icon que recebe um objeto {}   
  iconUrl: "./public/images/map-marker.svg",
  //iconUrl: irá pegar imagem para ser usada como icone de logalização
  iconSize: [58, 68],
  //tamanho do icone amarzenada dentro de um array []
  iconAnchor: [29, 68],
  //iconAchor: aonde ele ficará âncorado no mapa, dentro de um array
  popupAnchor: [170, 2]
  //popupAchor: Quando abrir o popup ele ficará ao lado

});

//Adicionando POPUP de localização dentro do mapa Leaflet
L.marker([-17.7478233,-48.6266595]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.') //ligar popup
    .openPopup(); //abrir popup
/* adicionando um marcador em um parametro pegando elemento de dois valores
dentro de um array ([-17.7478233,-48.6266595]) e adicionando ão map, .addTo(map)*/ 