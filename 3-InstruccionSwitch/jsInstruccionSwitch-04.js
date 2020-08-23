/*
Apellido:Paredes
Nombre:Brian
al seleccionar un mes informar.
si tiene 28 días. (Febrero)
si tiene 30 días. (abril, junio, septiembre, noviembre)
si tiene 31 días. (marzo, mayo, julio, agosto, octubre, diciembre)
*/

function mostrar()
{
	var mesDelAño;
    mesDelAño =txtIdMes.value;

    switch(mesDelAño)
    {
        case "Febrero":
            alert("El mes ingresado es "+mesDelAño+" el cual tiene 28 días.");
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("El mes ingresado es "+mesDelAño+" el cual tiene 30 días.");
            break;
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("El mes ingresado es "+mesDelAño+" el cual tiene 31 días.");
            break
    }
}//FIN DE LA FUNCIÓN