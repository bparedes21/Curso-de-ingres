/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeIngresado;//declaracion de variables
	var importeConDescuento;//declaracion de variables
	
	
	
	importeIngresado=txtIdImporte.value; //valor ingresa en variable

	importeIngresado=parseInt(importeIngresado);//numero a entero

    //calculoDelDescuento=(importeIngresado*25)/100 // calcular el porcentaje
    
   // importeConDescuento=importeIngresado-calculoDelDescuento; //resta de importe y descuento

   importeConDescuento=importeIngresado/1.25;//calculo del descuento
   
   importeConDescuento=parseInt(importeConDescuento);//pasar a entero

   txtIdResultado.value=importeConDescuento; // devuelve el resultado
}
