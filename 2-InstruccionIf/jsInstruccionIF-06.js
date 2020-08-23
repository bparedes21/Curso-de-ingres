/*
Apellido: Paredes
Nombre: Brian

Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{

var edadIngresada; //ingreso dato

edadIngresada=txtIdEdad.value; //paso a variable
edadIngresada=parseInt(edadIngresada);

if(edadIngresada<13)
{
alert("Usted tiene "+edadIngresada+" años por lo tanto es niño"); //si es niño imprime mensaje
}
else
{
     if(edadIngresada<18)
     {
     alert("Usted tiene "+edadIngresada+" años por lo tanto es adolecente")
     } 
     else
     {
     alert("Usted tiene "+edadIngresada+" años por lo tanto es mayor "); //si es adolecente imprime mensaje 	
     }
     }







}//FIN DE LA FUNCIÓN