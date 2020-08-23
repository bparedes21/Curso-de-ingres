/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerNumero;
    var segundoNumero;
	var tercerNumero;
    var numerosSumados;

	primerNumero=txtIdPrecioUno.value;
	segundoNumero=txtIdPrecioDos.value;
	tercerNumero=txtIdPrecioTres.value;

    primerNumero= parseInt(primerNumero);
    segundoNumero=parseInt(segundoNumero);
    tercerNumero=parseInt(tercerNumero);

    numerosSumados=primerNumero+segundoNumero+tercerNumero;
    alert("El resultado "+numerosSumados+" es la suma");
}

function Promedio () 
{
	var primerNumero;
    var segundoNumero;
	var tercerNumero;
	var promedioNumeros;

	primerNumero=txtIdPrecioUno.value;
	segundoNumero=txtIdPrecioDos.value;
	tercerNumero=txtIdPrecioTres.value;

    primerNumero= parseInt(primerNumero);
    segundoNumero=parseInt(segundoNumero);
    tercerNumero=parseInt(tercerNumero);

    promedioNumeros=(primerNumero+segundoNumero+tercerNumero)/3;
    
    alert("El resultado "+promedioNumeros+" es el promedio");
}


function PrecioFinal () 
{
	var primerNumero;
    var segundoNumero;
	var tercerNumero;
	var precioFinal;
	
	primerNumero=txtIdPrecioUno.value;
	segundoNumero=txtIdPrecioDos.value;
	tercerNumero=txtIdPrecioTres.value;

    primerNumero= parseInt(primerNumero);
    segundoNumero=parseInt(segundoNumero);
    tercerNumero=parseInt(tercerNumero);
    
    precioFinal=(primerNumero+segundoNumero+tercerNumero)*1.21;
    
    alert("El resultado "+precioFinal+" es el precio final con iva"); 
   
}