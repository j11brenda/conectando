// JavaScript Document
function LoginConectar (U,P)
{
datos="usuario="+U+"&password="+P;
$.ajax({
	type:"POST",
	url:"192.168.1.140/Sitio6/Log_in_m.php",
	data: datos,
}).done(function(msg){
	alert(msg);
	if(msg==""||msg==nul)
	{alert ("usuario incorrecto");}
	
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('.Enviar').tap(function(){
		var formulario=$(this).parents('form');
		var usuario=document.getElementByID('Usuario').value;
		var password=document.getElementByID('Password').value;
		LoginConectar (usuario,password);
				
		});//tap
	});//deviceready
});//ready
});//function msg
}//funcion