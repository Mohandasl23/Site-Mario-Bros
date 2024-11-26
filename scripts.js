const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");


function mostraForm() {
	form.style.left = "50%";
	form.style.transform = "translate (-50%)";
	mascara.style.visibility = "visible";	
}
function esconderForm(){
	form.style.left = "-300px";
	form.style.transform = "translate (0)";
	mascara.style.visibility = "hidden";
}
