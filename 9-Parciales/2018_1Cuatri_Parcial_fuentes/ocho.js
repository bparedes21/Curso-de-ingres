/*Ejercicio 8 (2 pts) ITERACIONES
Apellido: Paredes
Nombre: Brian
Realizar el algoritmo que permita iterar el 
ingreso de dos datos, una letra y un número entre -100 y 100 
(validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/

function mostrar()
{
	var confirmarSioNo;
	var numeroIngresado;
	var validarLetra;
	var numerosParesImpares;
	var numerosPositivos;
	var numerosNegativos;
	var cantidadDeCeros;
	var promedioDePositivos;
	var sumaDeNegativos;
	var numeroMaximo;
	var letraMaximo;
	var numeroMinimo;
	var letraMinimo;
	var banderaDeElPrimero;
	var contadorDePares;
	var contadorDeImpares;
	var contadorDeCeros;
	var contadorDePositivos;
	var contadorDeNegativos;

	banderaDeElPrimero=1;
	contadorDePares=0;
	contadorDePositivos=0;
	contadorDeCeros=0;
	contadorDeImpares=0;
	numerosPositivos=0;
	promedioDePositivos=0;
	numerosNegativos=0;
    numeroMaximo=0;
	numeroMinimo=0;
	letraMaximo="(..)";
	letraMinimo="(..)";

	confirmarSioNo="si";
	while(confirmarSioNo=="si")
	{
		numeroIngresado=prompt("Ingrese un numero entre -100 y 100");//ingreso de datos
		numeroIngresado=parseInt(numeroIngresado);//pasar a entero
		while(!(numeroIngresado>-100||numeroIngresado<100)|| isNaN(numeroIngresado))//validar numero entre -100 y 100
		{
			numeroIngresado=prompt("Ingrese nuevamente un numero entre -100 y 100");//si hubo error ingreso nuevamente
		}	
		
		validarLetra=prompt("Ingrese una letra:");//ingreso de una letra
		while(!(validarLetra>"a"&& validarLetra<"z"))//validar letra entre a y z
		{
			validarLetra=prompt("Ingrese nuevamente una letra:");//si hubo error ingresa nuevamente
		}
		if(numeroIngresado==0)
		{
			contadorDeCeros=contadorDeCeros+1;
		}

		if(banderaDeElPrimero==1||numeroIngresado<numeroMinimo)//aca busca el numero mayor y el numero menor 
		{
			numeroMinimo=numeroIngresado;
			letraMinimo=validarLetra;//guarda la letra de el menor numero
		}
		else
		{
			if(banderaDeElPrimero==1||numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
				letraMaximo=validarLetra;//guarda la letra de el mayor numero
			}
		}
		numerosParesImpares=numeroIngresado%2;
		if(numerosParesImpares==1)
		{
			contadorDePares=contadorDePares+1;
		}
		else 
			if(numerosParesImpares==0)
			{
				contadorDeImpares=contadorDeImpares+1;
			}
		if(numeroIngresado>0)
		{
			numerosPositivos=numerosPositivos+numeroIngresado;
			contadorDePositivos=contadorDePositivos+1;
		}	
		else
		{
			if(numeroIngresado<0)
			{
				numerosNegativos=numerosNegativos+numeroIngresado;
			}
		}

		confirmarSioNo=prompt("Desea continuar? Ingrese si/no");	
	}
	promedioDePositivos=numerosPositivos/contadorDePositivos;
	document.write("La cantidad de números pares: "+contadorDePares+"</br>"+"La cantidad de números impares: "+contadorDeImpares+"</br>"+"El promedio de todos los números positivos ingresados: "+promedioDePositivos+"</br>"+"La suma de todos los números negativos: "+numerosNegativos+"</br>"+"El número "+numeroMaximo+" y la letra "+letraMaximo+" del máximo: "+"</br>"+"El número "+numeroMinimo+" y la letra "+letraMinimo+" del mínimo");
}
