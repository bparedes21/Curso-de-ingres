/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaFahremheit;
	var temperaturaCentigrados;
	

	temperaturaFahremheit=txtIdTemperatura.value;
	temperaturaFahremheit=parseInt(temperaturaFahremheit);
    temperaturaCentigrados=(temperaturaFahremheit-32)*0.55;
    temperaturaCentigrados=parseInt(temperaturaCentigrados);
    alert("La temperatura "+temperaturaCentigrados+" es en centígrados"); 

}

function CentigradosFahrenheit () 
{
	var temperaturaFahremheit;
	var temperaturaCentigrados;
	

	temperaturaCentigrados=txtIdTemperatura.value;

	temperaturaCentigrados=parseInt(temperaturaCentigrados);

    temperaturaFahremheit=(temperaturaCentigrados/0.55)+32;

    temperaturaFahremheit=parseInt(temperaturaFahremheit);

     alert("La temperatura "+temperaturaFahremheit+" es en Fahrenheit"); 
    
}
