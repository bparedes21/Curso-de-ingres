/*
APELLIDO:Paredes
NOMBRE:Brian
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y
 censos nos pide realizar una carga de datos validada e ingresada por ventanas
  emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{			
 	var validarSexo;//definicion de variables
 	var validarEdad;
 	var validarEstadoCivilIngresado;
 	var validarSueldo;
 	var validarLegajos;
 	var validarNacionalidad;
 	var sueldoIngresado;
 	var legajoIngresado;
 	var nacionalidadIngresada;
 	var contador;
 	var estadoCivil;
 	var sexoIngresado;
 	var nacionalidadIngresada;

	validarEdad=prompt("Ingrese su edad");//ingreso de datos
	validarEdad=parseInt(validarEdad); //pasar a entero

	while(validarEdad<18||validarEdad>90||isNaN(validarEdad))
	{
		validarEdad=prompt("Ingrese su edad nuevamente entre 18 y 90 años");//ingreso de datos
		validarEdad=parseInt(validarEdad); //pasar a entero
	}
	validarSexo=prompt("Ingrese el sexo F/M");
	while(!(validarSexo=="F" || validarSexo=="f" || validarSexo=="m" || validarSexo=="M"))
	{
		validarSexo=prompt("Ingrese el sexo nuevamente F/M");

	}
	if(validarSexo=="F" || validarSexo=="f")
    {
    	sexoIngresado="Femenino";
    }
    else
    {
    	sexoIngresado="Masculino";
    }

	validarEstadoCivilIngresado=prompt("Ingrese el estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	validarEstadoCivilIngresado=parseInt(validarEstadoCivilIngresado);
	while(!(validarEstadoCivilIngresado==1 || validarEstadoCivilIngresado==2 || validarEstadoCivilIngresado==3 || validarEstadoCivilIngresado==4))
	{
		validarEstadoCivilIngresado=prompt("Ingrese nuevamente el estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	}

	validarSueldo=prompt("Ingresar sueldo:");
	validarSueldo=parseInt(validarSueldo);
	while(validarSueldo<8000 || isNaN(validarSueldo))
	{
		validarSueldo=prompt("Ingresar sueldo nuevamente:");
		validarSueldo=parseInt(validarSueldo);	
	}
	
	validarLegajos=prompt("Ingrese el legajo sin ceros a la izquierda:");
	validarLegajos=parseInt(validarLegajos);
	while(validarLegajos<1000||validarLegajos>9999 ||isNaN(validarLegajos))
	{
		validarLegajos=prompt("Ingrese el legajo sin ceros a la izquierda:");
		validarLegajos=parseInt(validarLegajos);
	}
	validarNacionalidad=prompt("Ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados ");
	while(!(validarNacionalidad=="A"||validarNacionalidad=="a"||validarNacionalidad=="E"|| validarNacionalidad=="e"||validarNacionalidad=="N"||validarNacionalidad=="n"))
	{
		validarNacionalidad=prompt("Ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados ");
	}
    if(validarNacionalidad=="A"||validarNacionalidad=="a")
    {
    	nacionalidadIngresada="argentino";
    }
    else
    {
    	if(validarNacionalidad=="E"|| validarNacionalidad=="e")
    	{
    		nacionalidadIngresada="Extranjero";
    	}
    	else 
    	{
    		if(validarNacionalidad=="N"||validarNacionalidad=="n")
    		{
    			nacionalidadIngresada="Nacionalizados";
    		}
    	}
    }

    switch(validarEstadoCivilIngresado)
	{
		case 1:
			estadoCivil="Soltero";
		break;
		case 2:
			estadoCivil="Casado";
		break;
		case 3:
			estadoCivil="divorciado";
		break;
		case 4:
			estadoCivil="Viudo";
		break;
	}
	
	txtIdEdad.value=validarEdad;			
	txtIdSexo.value=sexoIngresado;
	txtIdEstadoCivil.value=estadoCivil;
	txtIdSueldo.value=validarSueldo;	
	txtIdLegajo.value=validarLegajos;
	txtIdNacionalidad.value=nacionalidadIngresada;	
}
    

    

