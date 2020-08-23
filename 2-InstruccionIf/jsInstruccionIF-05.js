
/*
Apellido: Paredes
Nombre: Brian

Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
{
var edadIngresada;//ingreso dato

edadIngresada=txtIdEdad.value;//paso a variable
edadIngresada=parseInt(edadIngresada);

if(edadIngresada<13) //comparo
{
alert("Usted tiene "+edadIngresada+" años por lo tanto no es adolescente") ;//si no es adolecente imprime mensaje
}

if (edadIngresada>17) 
{
alert("Usted tiene "+edadIngresada+" años por lo tanto no es adolescente") ;//si no es adolecente imprime mensaje
}


}//FIN DE LA FUNCIÓN