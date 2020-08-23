/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    
    var sueldoIngresado;//declaracion de variables
    var aumentoDeSueldo;//declaracion de variables
   // var porcentajeDelSueldo;
	
	sueldoIngresado=txtIdSueldo.value;//ingreso de datos por id

	sueldoIngresado=parseInt(sueldoIngresado);//pasar a entero

	//porcentajeDelSueldo=(sueldoIngresado*10)/100; //calcula el 10%

	//aumentoDeSueldo=porcentajeDelSueldo+sueldoIngresado; //suma sueldo+ 10%

    aumentoDeSueldo=sueldoIngresado*1.1; //sueldo+porcentaje

    aumentoDeSueldo=parseInt(aumentoDeSueldo);//pasar a entero el aumento

	txtIdResultado.value=aumentoDeSueldo; //devuelve la suma del sueldo ingresado mas el 10%
}