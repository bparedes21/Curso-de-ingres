/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendoIngresado; //declaracion de variables
	var divisorIngresado;//declaracion de variables
	var restoDeLaDivision;//declaracion de variables

	dividendoIngresado=txtIdNumeroDividendo.value;//ingreso de datos
	divisorIngresado=txtIdNumeroDivisor.value;

	dividendoIngresado=parseInt(dividendoIngresado);//pasar a entero
    divisorIngresado=parseInt(divisorIngresado);

	
	restoDeLaDivision=dividendoIngresado%divisorIngresado;//calcular resto
	

    alert("El resto de la division es: "+restoDeLaDivision);//mostrar resultado

}
