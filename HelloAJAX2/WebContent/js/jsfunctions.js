
function showHello(str){
var request = new XMLHttpRequest(); //Non IE

request.onreadystatechange = function(){
	if(this.readyState==4 && this.status == 200){
		console.log(request.responseText);
		document.getElementById("ServerResponse").innerHTML = request.responseText;
	}
};
request.open("GET","saluto?user="+str, true); // Setto la richiesta verso il server
request.send(); //Invio

}