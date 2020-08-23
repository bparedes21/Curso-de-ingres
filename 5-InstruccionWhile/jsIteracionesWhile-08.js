/*
Apellido: Paredes
Nombre: Brian
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var numeroIngresado;
	var multiplicacionNegativos;
	
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";

	while(respuesta=="si")
	{	
			numeroIngresado=prompt("Ingrese un numero");
			numeroIngresado=parseInt(numeroIngresado);	
			if(numeroIngresado>0)
			{
				sumaPositivos=sumaPositivos+numeroIngresado;
			}
			
			if(numeroIngresado<0)
			{
				multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
			}
			else
			{
			alert("Ingresar numeros positivos o negativos");
			}
				
						
			respuesta=prompt("desea continuar? si/no");
			
	}
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;
}//FIN DE LA FUNCIÓN