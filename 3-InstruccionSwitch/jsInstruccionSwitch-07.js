/*
Apellido:Paredes
Nombre:Brian
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
bariloche sur, este
cataratas norte, oeste
Mar del plata sur, oeste
ushuaia sur, este
*/
function mostrar()
{
	var destinoIngresado;
	destinoIngresado=txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("El punto cardinal donse se encuentra Bariloche es Sur Este");
			break;
		case "Cataratas":
			alert("El punto cardinal donse se encuentra Cataratas es Norte Oeste");
			break;
		case "Mar del plata":
			alert("El punto cardinal donse se encuentra Mar del plata es Sur Oeste");
			break;
		case "Cordoba":
			alert("El punto cardinal donse se encuentra Ushuaia es Sur Este");
			break;
	}

}//FIN DE LA FUNCIÓN