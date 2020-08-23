/*
Apellido:Paredes
Nombre:Brian
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base,
 se pide el ingreso de una estacion del año y localidad para vacacionar para poder
 calcular el precio final

en Invierno: bariloche tiene un aumento del 20%. Cataratas
 y Cordoba tiene un descuento del 10%. Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y 
Cordoba tiene un aumento del 10%. Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10%. Cataratas tiene
 un aumento del 10%. Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
Curso de ingreso UTN FRA*/

function mostrar()
{
	var estacionIngresada;
	var lugarDeDestino;
	var baseEstadia=15000;
	var descuentoEstadia;
   var descuentoAumento;
    
	estacionIngresada=txtIdEstacion.value;
	lugarDeDestino=txtIdDestino.value;
   baseEstadia=parseInt(baseEstadia);
   descuentoEstadia=0;

   switch (estacionIngresada)
   {
      case "Invierno":
         switch(lugarDeDestino)
         {
            case "Bariloche":
               descuentoAumento=20;//aumento
               break;
            case "Cataratas":
               descuentoAumento=10;//descuento
               descuentoAumento=-descuentoAumento;
               break;
            case "Cordoba":     
               descuentoAumento=10;//descuento
               descuentoAumento=-descuentoAumento;
               break;
               alert(descuentoAumento);
            default:
               descuentoAumento=20;//descuento
               descuentoAumento=-descuentoAumento
            break;  
         }
         break;      
      case "Verano":
         switch(lugarDeDestino)
         {
            case "Bariloche":
               descuentoAumento=20;
               descuentoAumento=-descuentoAumento;
            break;
            case "Cataratas":
               descuentoAumento=10;//aumento  
            break;
            case "Cordoba":  
               descuentoAumento=10;
            case "Mar del plata":
               descuentoAumento=20;
               break;
            default:
            break;   
         }
         break;     
      case "Otoño":
      case "Primavera": 
         switch(lugarDeDestino)
         {
            case "Bariloche":
            descuentoAumento=10;
            break;
            case "Cataratas":
            descuentoAumento=10;
            break;
            case "Mar del plata":
            descuentoAumento=10;//descuento
            descuentoAumento=descuentoAumento
            break;
            default:
            descuentoAumento=0
            break  
         }
         break;
   }
   descuentoEstadia=(baseEstadia*descuentoAumento)/100;
   calularPrecio=baseEstadia+descuentoEstadia;
   alert("Precio final: "+calularPrecio+" en "+lugarDeDestino);


}//FIN DE LA FUNCIÓN