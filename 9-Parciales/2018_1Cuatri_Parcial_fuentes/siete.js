/*
Ejercicio 7  (2 pts) ITERACIONES
Apellido:Paredes
Nombre:Brian
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
 el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/function mostrar()
{
var validarSexo;
var validarNotas;
var contadorAlumnos;
var promedioDeNotas;
var banderaPrimerNumero;
var menorNota;
var sexoDePersona;
var contadorVarones;
var sumaDeNotas;
var contador;

contadorAlumnos=0;
banderaPrimerNumero=1;
sumaDeNotas=0;
contador=0;	
contadorVarones=0;
	while(contador<5)
	{

		validarNotas=prompt("Ingrese nota entre 0 y 10");
		validarNotas=parseInt(validarNotas);

		while(validarNotas<0 || validarNotas>10)
		{
			validarNotas=prompt("Ingrese una nota entre 0 y 10 nuevamente");
			validarNotas=parseInt(validarNotas);
		}
		
		validarSexo=prompt("Ingrese Sexo f o m");
		while(!(validarSexo=="F"||validarSexo=="f"||validarSexo=="m"||validarSexo=="M"))
		{
			validarSexo=prompt("Ingrese nuevamente Sexo f o m");
		}
		if(banderaPrimerNumero==1||validarNotas<menorNota)
		{
			menorNota=validarNotas;
			sexoDePersona=validarSexo;
		}
		banderaPrimerNumero=0;
		if((validarSexo=="m"||validarSexo=="M") && validarNotas>=6)
		{
			contadorVarones=contadorVarones+1;
		}	
		
		sumaDeNotas=sumaDeNotas+validarNotas;
		contador=contador+1;
	}
	promedioDeNotas=sumaDeNotas/5;
	alert("Promedio de notas totales: "+promedioDeNotas);
	alert("Nota mas baja: "+menorNota);
	alert("Cantidad de varones con nota mayor o igual a 6: "+contadorVarones);
	
	//document.write("Promedio de notas totales: "+"</br>"+"Nota mas baja y sexo: "+"</br>"+"Cantidad de varones con nota mayor o igual a 6: ");
}
