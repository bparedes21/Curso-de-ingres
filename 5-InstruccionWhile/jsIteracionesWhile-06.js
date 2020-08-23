/*
Al presionar el botón pedir 5 números e 
informar la suma acumulada y el promedio.
*/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	

	contador=0;
	acumulador=0;
	numeroIngresado=prompt("Ingrese los 5 numeros:");
	numeroIngresado=parseInt(numeroIngresado);

	

	while(contador<5)
		{
				while(numeroIngresado==false || numeroIngresado==0)
				{   alert(numeroIngresado);
					numeroIngresado=prompt("Ingrese los 5 numeros:");
					numeroIngresado=parseInt(numeroIngresado);
				}
			
			acumulador=acumulador+numeroIngresado;
			contador=contador+1;
			numeroIngresado=prompt("Ingrese el numero"+contador);
			numeroIngresado=parseInt(numeroIngresado);
		}	


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;

}//FIN DE LA FUNCIÓN