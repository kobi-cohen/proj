
function go(){
var a=document.getElementById("box2");
a.innerHTML="Hello world";
var i=0;
setInterval (function (){
	if (i%2==0)
		a.innerHTML=i+" ZUGGI";
	else
	a.innerHTML=i+" E-ZUGGI";

	i++;


},2000);

}

var v=

	function(){

		console.log("HI");
	}



v();