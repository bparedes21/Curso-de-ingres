/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total

*/
function mostrar()
{
	var productoIngresado;
	var precioIngresado;
	var validarCantidad;
	var contador;
	var marcaJabon;
	var contadorjabon;
	var contadorAlcohol;
	var contadorBarbijo;
	var BanderaPrimero;
	var mayorPrecio;
	var cantidadUnidades;
	var fabricanteJabon;
	var marcaIngresada;
	cantidadIngresada=parseInt(cantidadIngresada);//pasar a entero
	precioIngresado=parseInt(precioIngresado);
	contador=0;
	BanderaPrimero=1;
	while(contador<5)
	{
		productoIngresado=prompt("Ingrese producto:");//ingreso de datos
		precioIngresado=prompt("Ingrese precio:");
		cantidadIngresada=prompt("Ingrese cantidad:");
		marcaIngresada=prompt("Ingrese marca");
		//validar producto
		while (!((productoIngresado=="barbijo") || (productoIngresado=="jabon") || (productoIngresado=="alcohol")))
		{
			productoIngresado=prompt("Ingrese nuevamente el producto");
		//validar precio
		while (!(precioIngresado>99 && precioIngresado<300))    
		{
			precioIngresado=prompt("Ingrese nuevamente el precio debe estar entre 100 y 300");

		}
		//validar cantidad
		while(cantidadIngresada<0 && cantidadIngresada>1000)
		{
			cantidadIngresada=prompt("Ingrese nuevamente la cantidad debe se entre 1 Y 1000");
		}
		//mayor precio
		if(BanderaPrimero==1||precioIngresado>mayorPrecio)
		{
			mayorPrecio=precioIngresado;
			marcaJabon=

		}

		if(productoIngresado="jabon")
		{
			marcaJabon=prompt("Ingrese la marca de el jabon: A o B");
		}
		contador=contador+1;
	}

}
