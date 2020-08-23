/*
Apellido: Paredes
Nombre: Brian
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;//declaracion de variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero=1;
	respuesta='si';
	
	while(respuesta=="si") // bucle while
	{
		numeroIngresado=prompt("Ingresar numero"); //ingreso de datos
		numeroIngresado=parseInt(numeroIngresado);

		if(banderaDelPrimero==1 || numeroIngresado>numeroMaximo) // si es el primer numero o si el numero es mayor a el primero
		{
			numeroMaximo=numeroIngresado;
			alert("maximo"+numeroMaximo);
		}
		if(banderaDelPrimero==1 || numeroIngresado<numeroMinimo)// si es el primer numero o si el numero es menor a el primero
		{
			numeroMinimo=numeroIngresado;
			alert("minimo"+numeroMinimo);
		}
		banderaDelPrimero=0; // una vez que se ejecuta alguno de los if el valor de la variable cambia a 0.
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN