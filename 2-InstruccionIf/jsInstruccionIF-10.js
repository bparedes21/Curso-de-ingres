/*
Apellido:Paredes
Nombre:Brian

Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	var numeroRandom; //declaro variables
	numeroRandom= Math.floor(Math.random()*10)+1; //calculo el numero random (+1 por que sino toma 0 y no toma 10)
	var mensajeAlert;

	alert(numeroRandom);
		if(numeroRandom<4)
		{
    
    	mensajeAlert=("Vamos, la proxima se puede"); //imprimo resultado	

		}

    	else
   		 {
  		  if	(numeroRandom<9)
			{
   			mensajeAlert="APROBÓ";// imprimo resultado
			}


			if(numeroRandom>8)
			{
 			mensajeAlert="EXCELENTE "; //imprimo resultado
			}
   		 }
	
         alert(mensajeAlert);





}//FIN DE LA FUNCIÓN 