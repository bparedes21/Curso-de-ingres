/*4.  
Apellido: Paredes
Nombre: Brian

Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

function CalcularPrecio () 
{ 
    var cantidadLamparas;  
    var marcaLamparas;
    var precioConDescuento;
    var precioLamprasTotal;
    var ingresosBrutos;
    var porcentajeDescuento;

    cantidadLamparas =txtIdCantidad.value;
    marcaLamparas=document.getElementById("Marca").value;

    precioDeLampara=35;
    // precioDeLampara=parseInt(precioDeLampara);
    cantidadLamparas=parseInt(cantidadLamparas);

    if (cantidadLamparas>5)
    {  
        porcentajeDescuento=0.5;
    }
    else
    {
        if(cantidadLamparas==5) 
        {
            if(marcaLamparas=="ArgentinaLuz")
            {
                porcentajeDescuento=0.4;
            }    
            else
            {
                porcentajeDescuento=0.30; 
            }
        }
        else{

         if (cantidadLamparas==4)
        
        { 
            if (marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas")
            {
                porcentajeDescuento=0.25;
            }    
            else
            {   
                porcentajeDescuento=0.20;
            }
        } 
        }
        else{  
        if(cantidadLamparas==3)
        {
            if(marcaLamparas=="ArgentinaLuz")
            {
                porcentajeDescuento=0.15;
            }
            else 
            {
                if(marcaLamparas=="FelipeLamparas")
                {
                    porcentajeDescuento=0.10;
                }
                else
                {
                    porcentajeDescuento=0.05;
                } 
            }
        }
         }
        if(cantidadLamparas<3) 
        {
            porcentajeDescuento=0;
        } 
    }
    precioLamprasTotal=precioDeLampara*cantidadLamparas;
    precioConDescuento=precioLamprasTotal-(precioLamprasTotal*porcentajeDescuento);
    txtIdprecioDescuento.value=precioConDescuento;

    if(precioConDescuento>120)
    {
        ingresosBrutos=precioConDescuento*0.1;
        alert("Usted pago "+ingresosBrutos+" de IIBB.");
    }
  }

*/


4.  
/*
Apellido: Paredes
Nombre: Brian

Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/
function CalcularPrecio () 
{ 
    var cantidadLamparas;  
    var marcaLamparas;
    var precioConDescuento;
    var precioLamprasTotal;
    var ingresosBrutos;
    var porcentajeDescuento;
    ingresosBrutos=0;

    cantidadLamparas =txtIdCantidad.value;
    marcaLamparas=document.getElementById("Marca").value;

    precioDeLampara=35;
    // precioDeLampara=parseInt(precioDeLampara);
    cantidadLamparas=parseInt(cantidadLamparas);


    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            porcentajeDescuento=0;
        break;
        case 3:
            switch(marcaLamparas)
            {
                case "ArgentinaLuz":
                    porcentajeDescuento=0.15;
                    break;
                case "FelipeLamparas":
                    porcentajeDescuento=0.10;
                    break;
                default:
                    porcentajeDescuento=0.05;
                    break;
             }        
        break;
        case 4: 
            switch(marcaLamparas)
            {
                case"ArgentinaLuz":
                case"FelipeLamparas":
                    porcentajeDescuento=0.25;
                    break;
                default:
                    porcentajeDescuento=0.20;
                break;
            }
        break;
        case 5:
            switch(marcaLamparas)
            {   
                case "ArgentinaLuz":
                    porcentajeDescuento=0.4;
                    break;
                default:
                    porcentajeDescuento=0.30; 
                    break;
            }
        break;    
        default :
        //cantidadLamparas>5
            porcentajeDescuento=0.5;   
    }   

    precioLamprasTotal=precioDeLampara*cantidadLamparas;
    precioConDescuento=precioLamprasTotal-(precioLamprasTotal*porcentajeDescuento);
  
    
    if(precioConDescuento>120)
    {
        ingresosBrutos=precioConDescuento*0.1;
        alert("Usted pago "+ingresosBrutos+" de IIBB.");
    }   
    txtIdprecioDescuento.value=precioConDescuento+ingresosBrutos;

}













