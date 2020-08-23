/*
Apellido: Paredes
Nombre: Brian
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
/*
function mostrar()
{
	var edadIngresada; //ingreso datos
	var ingresoEstadoCivil;

    edadIngresada=txtIdEdad.value;//paso a variable
    ingresoEstadoCivil=estadoCivil.value;

    edadIngresada=parseInt(edadIngresada);

    if (edadIngresada>17)//comparo
    {
    	if(ingresoEstadoCivil=="Soltero")
    	{
        alert("Es soltero y no es menor.");//mensaje
    	}
    }

  


}//FIN DE LA FUNCIÓN
*/

/* switch 10-A
Apellido:Paredes
Nombre:Brian
Hacerlo en el ejercicio 08 del IF:

Se pide ingresar una edad y un estado cicvil
    a todos los mayores de edad, mostrar el mensaje "se responsable"
    a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
    a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
    a los niños tambien informar "hagan la tarea" 
    a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
    a los mayores de edad solteros, tambien informar "a vivir la vida"
    a los mayores de edad casados , tambien informar "a disfrutar la pareja"
    a los divorciados informar tambien "a intentarlo nuevamente"

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
    switch(edadIngresada)//casos por edad
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
           alert("hagan la tarea");
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
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
        case 59:
        case 60:
            switch(ingresoEstadoCivil) // casos por estado civil
                {
                    case "Soltero":
                        alert("a vivir la vida");
                        break;
                    case "Casado":
                        alert("a disfrutar la pareja");
                        break;
                    case "Divorciado":
                        alert("a intentarlo nuevamente");
                        break;
                } 
                alert("Se responsable");
                break;
        default:
            alert("sos persona de riesgo");
            break;      
    }
}  
        
        

        


    
    

