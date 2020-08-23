/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

var largoTerreno;
var anchoTerreno;
var perimetroRectangulo;
var totalAlambre;

largoTerreno=txtIdLargo.value;
anchoTerreno=txtIdAncho.value;

largoTerreno=parseInt(largoTerreno);
anchoTerreno=parseInt(anchoTerreno);

perimetroRectangulo=(largoTerreno*2)+(anchoTerreno*2);

totalAlambre=perimetroRectangulo*3;

alert("el resultado "+totalAlambre+" es la cantidad de alambre necesaria");

}
function Circulo () 
{
 
var radioIngresado;
var perimetroCirculo;
var cantidadAlambre;

 
 radioIngresado=txtIdRadio.value;
 radioIngresado=parseInt(radioIngresado);
 
 perimetroCirculo=2*Math.PI*radioIngresado;
 perimetroCirculo=parseInt(perimetroCirculo);

 alert("el resultado "+perimetroCirculo+" es la cantidad de alambre necesaria");


}
function Materiales () 
{
  var largoTerreno;
  var anchoTerreno;
  var metrosCuadrados;
  var cementoNecesario;
  var calNecesaria;

  largoTerreno=txtIdLargo.value;
  anchoTerreno=txtIdAncho.value;

  largoTerreno=parseInt(largoTerreno);
  anchoTerreno=parseInt(anchoTerreno);

  metrosCuadrados=largoTerreno*anchoTerreno;

  cementoNecesario=metrosCuadrados*2;
  calNecesaria=metrosCuadrados*3;

  alert("Se necesitan "+cementoNecesario+" bolsas de cemento. Y se necesitan "+calNecesaria+" bolsas de cal");

}