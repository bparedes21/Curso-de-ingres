/*
Apellido: Paredes
Nombre: Brian
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{
	var edadIngresada; //ingreso datos
	var ingresoEstadoCivil;

    edadIngresada=txtIdEdad.value;//paso a variable
    ingresoEstadoCivil=estadoCivil.value;

    edadIngresada=parseInt(edadIngresada);

   
            if (edadIngresada<18)//comparo
            {
              if(ingresoEstadoCivil!="Soltero")
              {
               alert("Es muy pequeño para NO ser soltero.");//mensaje	
               }
            
             }
     

  


}//FIN DE LA FUNCIÓN