var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//Selecciono elementos del DOM

var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var indicadorDeColor = document.getElementById("indicador-de-color");

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorDeColor.style.backgroundColor = colorActual;
  })
);

function paletaColores() {
  for (i = 0; i < nombreColores.length; i++) {
    var div = document.createElement('div');
    var color = nombreColores[i];
    div.style.backgroundColor = nombreColores[i];
    div.className = "color-paleta";
    div.style.backgroundColor = color;
    div.addEventListener('click', indicadorColor);
    paleta.appendChild(div);
  }
}

function crearGrillaPx() {
  for (i = 0; i <= 1750; i++) {
    var divGrilla = document.createElement('div');
    grillaPixeles.appendChild(divGrilla);
    divGrilla.addEventListener("mouseover", mover);
    divGrilla.addEventListener('click', pintarPixel);
    divGrilla.addEventListener("mousedown", apretado);
    divGrilla.addEventListener("mouseup", soltado);
  }
}

mouseApretado = false;

function mover(e) {
  if (mouseApretado) {
    pintarPixel(e);
  }
}

function apretado(e) {
  mouseApretado = true;
}

function soltado(e) {
  mouseApretado = false;
}

function indicadorColor (color){
  var seleccion = color.currentTarget;
  indicadorDeColor.style.backgroundColor = seleccion.style.backgroundColor;
}

function pintarPixel(colorseleccionado) {
  var pixel = colorseleccionado.currentTarget;
  pixel.style.backgroundColor = indicadorDeColor.style.backgroundColor;
}

$(document).ready(function () {
  $("#borrar").click(function () {
      $(grillaPixeles).children().animate({ "backgroundColor": "white" }, 1500);
  });
});

$(document).ready(function(){
  var cargar = document.querySelectorAll(".imgs img");
  for (i=0; i<cargar.length; i++){
    cargar[i].addEventListener("click", function (){
      var mostrar = event.currentTarget.getAttribute("id");
      switch (mostrar) {
        case "batman":
          cargarSuperheroe(batman);
          break;
        case "wonder":
          cargarSuperheroe(wonder);
          break;
        case "flash":
          cargarSuperheroe(flash);
          break;
        case "invisible":
          cargarSuperheroe(invisible);
          break;      
      }
    });
  }
});

function guardarDibujo (){
 $("#guardar").click(function (){
  guardarPixelArt();
 }); 
}

//Invoco funciones creadas
paletaColores();
crearGrillaPx();
guardarDibujo ();


