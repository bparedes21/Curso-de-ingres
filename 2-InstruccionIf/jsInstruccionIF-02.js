/*
Apellido: Paredes
Nombre: Brian
Al ingresar una edad debemos informar solo si la persona es mayor de edad*/

function mostrar()
{
var edadIngresada;//ingreso dato
var valorEdad;

edadIngresada=txtIdEdad.value;//paso a variable
edadIngresada=parseInt(edadIngresada);

if(valorEdad>17)//comparo
{
alert("Usted es mayor de 18");//si es mayor imprime mensaje
}

//else 
//{

//	alert ("Su edad es "+edadIngresada+" y no es mayor de 18");
//}


}//FIN DE LA FUNCIÓN