function rebour(tps){ //Deffinition d'une fonction
if (tps>0) { //Si le temps est différent de 0
var heure = Math.floor(tps/3600); //Nombre d'heure écoulés
if(heure >= 24){ //Si plus de 24 => 1 jour
var jour = Math.floor(heure/24); //Calcul du nombre de jour
var moins = 86400*jour; // Deffinition et attribution d'une valeur à `moins` qui est la variable soustractrice de la fonction
var heure = heure-(24*jour); //On enléve le nombre d'heure concernée
}else{
var jour = 0; //Sinon, il n'y a pas de jour
var moins = 0; // Et pas ed variable moins
}
moins = moins+3600*heure; // Recalcul
var minutes = Math.floor((tps-moins)/60); // Calcul des minutes
moins = moins + 60*minutes; // Recalcul de la variable moins
var secondes = tps-moins; //Calcul des seconde
minutes = ((minutes < 10) ? "0" : "") + minutes;//On rajoute un 0 si les minutes sont inférieures à 10
secondes = ((secondes < 10) ? "0" : "") + secondes; //On rajoute un 0 si les secondes sont inférieures à 10
//On affiche le resultat dans les div concernées
document.getElementById("heure").innerHTML = heure;
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("seconde").innerHTML = secondes; 
//On met le son
	var sound1 = document.getElementById("sound1");
	sound1.currentTime = 0;
	sound1.play();

var restant = tps-1; //On enléve une seconde
setTimeout("rebour("+restant+")", 1000);//On rappelle la fonction toute les secondes
}else{
	document.getElementById("end").style.display = 'block';
	document.getElementById("first").style.display = 'none';
	//On arrête le son 1
	var sound1 = document.getElementById("sound1");
	sound1.currentTime = 0;
	sound1.pause();
	//On met l'explosion
	var sound = document.getElementById("sound");
	sound.currentTime = 0;
	sound.play();
}
}



// inserer une image 
//var myImg = new Image();
//myImg.src = '../images/the-end.jpg';
//document.body.appendChild(myImg).style.display = 'block'; // L'image est ajoutée au DOM

//Message alert("Compte à rebour fini !"); 

//bouton reset 

function reset() {
 	document.getElementById("end").style.display = 'none';//on enlève le fond explosion
 	document.getElementById("first").style.display = 'block'; //on affiche le premier écran
 	setTimeout("rebour("+20+")", 0); //on remet l'animation (ici à 20s)
 


}
