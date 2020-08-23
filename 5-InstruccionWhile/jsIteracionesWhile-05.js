/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	txtIdSexo.value=sexoIngresado;
	while(sexoIngresado!="f" && sexoIngresado=!"m")
	{
		alert("De nuevo");
	}



}//FIN DE LA FUNCIÓN