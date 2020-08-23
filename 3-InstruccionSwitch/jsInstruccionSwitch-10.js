/*
Apellido:Paredes
Nombre:Brian
Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares
 según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche



function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	
	estacionIngresada=txtIdEstacion.value;
	destinoIngresado=txtIdDestino.value;
	
	switch(estacionIngresada)
	{ 
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;	
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
					break;
				default: 
					alert("No se viaja");
					break;
			}
			break;
		case "Otoño":
			alert("Se viaja");
			break;

		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("No se viaja");
					break;
				default:
					alert("Se viaja");
					break;
			}
			break;
	}
}//FIN DE LA FUNCIÓN
*/
/*
Hacerlo en el ejercicio 08 del IF:

Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"

	a los niños tambien informar "hagan la tarea" 
	
	
	
	

    la menor cantidad de if 
    no repetir los alert o los mensajes 
    
*/
function mostrar()
{
	var edadIngresada; //ingreso datos
	var ingresoEstadoCivil;

    edadIngresada=txtIdEdad.value;//paso a variable
    ingresoEstadoCivil=estadoCivil.value;

    edadIngresada=parseInt(edadIngresada);
    switch(edadIngresada)
    {
    	case 0:
    	case 1:
    	case 2:
    	case 3:
    	case 4:
    	case 5:
    	case 6:
    	case 7:
    	case 8:
    	case 9:
    	case 10:
    	case 11:
    	case 12:
    	case 13:
	    	if(edadIngresada<14)
	    	{
	    		alert("hagan la tarea");
	    	}
	    	break;
    	case 14:
    	case 15:
    	case 16:
    	case 17:
    		alert("respeta a tus mayores");
    		switch(ingresoEstadoCivil)
    		{
    			case "Casado":
    			case "Divorciado":
    			alert("sos muy joven para no ser soltero");
    		}
    		break;
    	default:
    		alert("Se responsable");
	    	switch(ingresoEstadoCivil)
	    		{
	    			case "Casado":
		    			alert("a disfrutar la pareja");
		    			break;
	    			case "Divorciado":
	    			alert("a intentarlo nuevamente");
	    			case "soltero"
	    				alert("a vivir la vida");
	    		}	
    			if(edadIngresada>60)
    			{
					alert("sos persona de riesgo")
    			}
    		break;
    }	
    	
    	

    	


    
    

