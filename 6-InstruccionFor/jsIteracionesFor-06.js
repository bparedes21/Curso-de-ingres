/*
al presionar el botón pedir un número.
 mostrar los numeros pares desde el 1 al número ingresado, 
 y mostrar la cantidad de numeros pares encontrados.*/

function mostrar()
{
var numeroIngreado;
var i;
var numerosPares;
var i=1;
numeroIngreado=prompt("Ingrese un numero: ");
for	(i;i<numeroIngreado;i++)
{
	numerosPares=i%2;
	if(numerosPares==0)
	{
		alert("numero par: "+i);
	}
}



}//FIN DE LA FUNCIÓN