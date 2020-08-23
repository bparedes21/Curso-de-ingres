/*
Apellido: Paredes
Nombre: Brian
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/
/*

function mostrar()
{
var edadIngresada;//ingreso dato

edadIngresada=txtIdEdad.value;//paso a variable
edadIngresada=parseInt(edadIngresada);



if(edadIngresada>12) //comparo
{
if (edadIngresada<18)
 {
alert("Usted es adolescente") ;//si es adolecente imprime mensaje
 }
}



}//FIN DE LA FUNCIÓN
*/


/*
Se ingresa una hora. Si está entre las 6 y las 11 mostrar: “es de mañana”, si es desde
las 12 a las 19: "es de tarde", de lo cont rario informar que es de noche. Informar si la hora no es válida Si
es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje: "a dormir"
*/

function mostrar()
{
	var horaIngresada;//ingreso dato
	var mensaje;

	horaIngresada=txtIdEdad.value;//paso a variable
	horaIngresada=parseInt(horaIngresada);
	alert(horaIngresada);
	switch(horaIngresada)
	{	
		case 5:
			if(horaIngresada>0 && horaIngresada<6)
			{
				mensaje="a dormir";
			}
		case 11:
			if(horaIngresada>5 && horaIngresada<12)
			{
				mensaje="es de mañana";
			}
		break;
		case 19:
			if(horaIngresada>11&&horaIngresada<20)
			{
				mensaje="es de tarde";
			}
		break;	
		case 24:	
			if (horaIngresada>20 && horaIngresada<25)
				{
					mensaje="es de noche";
				}
		break;
		
		break;
		case 5:
			if(horaIngresada<1 || horaIngresada>24)
			{
				mensaje="la hora no es válida";
			}
		break;
	}

	alert(mensaje);
}


	/*
	if(horaIngresada>5 && horaIngresada<12)
		{
			mensaje="es de mañana";
		}
	else
	{
		if(horaIngresada>11&&horaIngresada<20)
		{
			mensaje="es de tarde";
		}
		else
		{
			if (horaIngresada>20 && horaIngresada<25)
			{
				mensaje="es de noche";
			}
			else
			{
				if(horaIngresada>0 && horaIngresada<6)
				{
					mensaje="a dormir";
				}
				else 
				{
					if(horaIngresada<1 || horaIngresada>24)
					{
						mensaje="la hora no es válida";
					}
				}
			}
		}
	}
	alert(mensaje);
}
	*/