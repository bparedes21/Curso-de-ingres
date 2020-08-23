/*

Apellido: Paredes
Nombre: Brian
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var contadorNegativos;
	var contadorPositivos;
	var cantidadDeCeros;
	var paresImpares;
	var cantidadPares;
	var cantidadImpares;
 	var promedioPositivos;
 	var promedioNegativos;
 	var diferenciaPositivosNegativos;
	
	cantidadDeCeros=0;
	sumaNegativos=0;
	respuesta="si";
	sumaPositivos=0;
	contadorNegativos=0;
	contadorPositivos=0;
	cantidadPares=0;
	promedioPositivos=0;
	promedioNegativos=0;
	paresImpares=0;
	while(respuesta=="si")
	{	numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		paresImpares=numeroIngresado%2;
		
		if(numeroIngresado<0)
		{
			sumaNegativos=sumaNegativos+numeroIngresado;
			contadorNegativos=contadorNegativos+1;
		}
		else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos=sumaPositivos+numeroIngresado;
				contadorPositivos=contadorPositivos+1;
			}
			else 
			{ 
				if(numeroIngresado==0)
				{
					cantidadDeCeros=cantidadDeCeros+1;
				}
			}
		}	
		if(paresImpares==0 && numeroIngresado!=0)
		{
			cantidadPares=cantidadPares+1;
		}
		
	respuesta=prompt("desea continuar?");
	}//fin del while
	promedioPositivos=sumaPositivos/contadorPositivos;
	promedioNegativos=sumaNegativos/contadorNegativos;
	diferenciaPositivosNegativos=sumaPositivos+sumaNegativos;

	document.write("La suma de negativos es : "+sumaNegativos+"<br>"+"La suma de los positivos es: "+sumaPositivos+"<br>"+"La cantidad de positivos es: "+contadorPositivos+"<br>"+"La cantidad de negativos es: "+contadorNegativos+"<br>"+"La cantidad de ceros es: "+cantidadDeCeros+"<br>"+"La cantidad de números pares es: "+cantidadPares+"<br>"+"El promedio de positivos es: "+promedioPositivos+"<br>"+"El Promedio de negativos es: "+promedioNegativos+"<br>"+"La diferencia entre positivos y negativos es: "+ diferenciaPositivosNegativos );

}//FIN DE LA FUNCIÓ

