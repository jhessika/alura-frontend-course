
var titulo = document.querySelector("#titulo");
titulo.textContent = "Aparecida Nutrição";


var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;



if( peso < 0 || peso >= 1000){
	console.log("Pesso invalido!");
	pesoValido = false;
	tdImc.textContent = "Peso invalido!";
	paciente.classList.add("paciente-invalido")
}

if(altura < 0 || altura >= 3.00){
	console.log("altura invalida!");
	alturaValida = false;
	tdImc.textContent = "Altura invalida!";
	paciente.classList.add("paciente-invalido")
	
}

if(pesoValido && alturaValida){
	var imc = peso / (altura * altura);
	tdImc.textContent = imc.toFixed(2);
}


	
}










	 
 
































