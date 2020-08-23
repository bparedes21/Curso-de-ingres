/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta="si";

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);
	

	while(respuesta=="si")
	{
		while(numeroIngresado==false || numeroIngresado==0)
		{   alert(numeroIngresado);
			numeroIngresado=prompt("Ingrese nuevamente:");
			numeroIngresado=parseInt(numeroIngresado);
		}
	
		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
		numeroIngresado=prompt("Ingrese el numero "+contador);
		numeroIngresado=parseInt(numeroIngresado);
		respuesta=prompt("Ingrese si o no");
			while(respuesta==false || !(respuesta>=a || respuesta<=z))
			{
				respuesta=prompt("Ingrese si o no");
			}
	}
		

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN

	/*

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta=true;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);
	

	while(respuesta==true)
	{
		while(numeroIngresado==false || numeroIngresado==0)
		{   alert(numeroIngresado);
			numeroIngresado=prompt("Ingrese los 5 numeros:");
			numeroIngresado=parseInt(numeroIngresado);
		}
	
		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
		numeroIngresado=prompt("Ingrese el numero "+contador);
		numeroIngresado=parseInt(numeroIngresado);
		respuesta=confirm("Desea continuar");
	}
		

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;



	*/
	

	