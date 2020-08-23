/* 
Apellido: Paredes
Nombre: Brian

Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/

function mostrar()
{
var edadIngresada;//ingreso dato

edadIngresada=txtIdEdad.value;//paso a variable
edadIngresada=parseInt(edadIngresada);


if(edadIngresada>17)//comparo
{
alert("Usted es mayor de edad");//si es mayor imprime mensaje
}

if(edadIngresada<18)
{
alert ("Su edad es "+edadIngresada+" y no es mayor de edad");
}




}//FIN DE LA FUNCIÓN