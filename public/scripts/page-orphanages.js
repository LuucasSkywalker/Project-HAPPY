/*----------------------PARTE JAVASCRIPT MAP LEAFLET---------------------*/ 

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


//Criando um icone para ser usado na localização (marker)
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

//Criando um POPUP para ser usado na localização
const popup = L.popup({
    // criado uma const = popup que recebe um objeto {}
    closeButton: false,
    //closeButton: não quero que apareça o closeButton, passada por um boolean 'false'
    className: "map-popup",
    //className: nome da classe
    minWidth: 240,
    //minWidth: Largura mínima
    minHeight: 240,
    //minHeight: Altura mínima
  }).setContent(
    //o POPUP ira retorna um 'setContent' que é uma função que sera o conteúdo do POPUP
    'Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>'
    /* dentro do conteúdo (setContent) foi adicionado um valor string ('') que irá receber
    dentro do seu conteúdo um HTML, com uma tag <a> que recebe um conjunto de
    um link href. Uma class CSS e um <img src=""> para uma imagem*/
     
  );

//Adicionando POPUP de localização dentro do mapa Leaflet
L.marker([-17.7478233,-48.6266595], {icon}).addTo(map)
    /* foi criado dentro dos parâmetros onde á um array um outro elemento que é
    um objeto criado para o icone do marker([-17.7478233,-48.6266595], {icon})
    que é a imagem e suas propriedades css atribuida nesse objeto {icon} para
    adicionar ao map .addTo(map) */

    .bindPopup(popup)  //.bindPopup(popup) ligar popup
    /*foi adicionado ao L.marker pt-(marcador) em cima do mapa de localização o objeto criado
    a cima const = 'popup' como parâmetro para esse marcador ou marker*/ 


    //.bindPopup('A pretty CSS3 popup.<br> Easily customizable.') //ligar popup
    //.openPopup(); //abrir popup
/* adicionando um marcador em um parametro pegando elemento de dois valores
dentro de um array ([-17.7478233,-48.6266595]) e adicionando ao map, .addTo(map)*/ 