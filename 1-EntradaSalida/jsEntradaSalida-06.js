/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroIngresadoUno;//declaracion de variables
	var numeroIngresadoDos;
    var totalSuma;
    numeroIngresadoUno=txtIdNumeroUno.value;//ingreso de datos en variable por id
	numeroIngresadoDos=txtIdNumeroDos.value;

	numeroIngresadoUno=parseInt(numeroIngresadoUno);//pasar  a entero
	numeroIngresadoDos=parseInt(numeroIngresadoDos);
    
    totalSuma =numeroIngresadoUno+numeroIngresadoDos;//resultado del calculo

    alert("El resultado de la suma es: "+totalSuma);//mostrar suma
}

