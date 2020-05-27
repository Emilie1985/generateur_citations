//listes des éléments de phrases
const sujet = [["Le chat", "L'éléphant", "La voiture", "Jack", "La pomme", "La guitare", "Le livre", "La maison", "La boîte", "L'album"], 
			["The cat", "The elephant", "The car", "Jack", "The apple", "The guitar", "The book", "The house", "The box", "The album"]] ;

const verbe = [["chante", "joue", "roule", "parle", "rampe", "s'ennuie", "boit", "travaille", "crie", "dort"], 
			["sings", "plays", "rolls", "talk", "crawls", "is borring", "drinks", "works", "screams", "sleeps"]];

const complement = [["dehors.", "le soir.", "en Italie.", "toute la journée.", "sous la pluie.", "dans la rue.", "très fort."], 
				 ["outside.", 'the evening.', "in Italy.", "all day long.", "under the rain.", "in the street.", "loudly."]]; 			

let langue ;  
//Fonction qui sélectionne un élément aléatoire d'une liste
function aleatoire (liste, langue) {
	const position = (Math.floor(Math.random()*liste[langue].length));
	return liste[langue][position] ;
}
//Fonction qui génère une phrase 
function phrase() {
	const sujetResult = aleatoire(sujet, langue) ;
	const verbeResult = aleatoire(verbe, langue);
	const complementResult = aleatoire(complement, langue) ;
	return sujetResult +" "+ verbeResult + " "+  complementResult ;
}
//Input pour entrer le nombre de phrases
const p_phrase = document.getElementById('p_phrase');
const nombrePhrases = document.createElement('input');
nombrePhrases.setAttribute("type", "number");
nombrePhrases.setAttribute("placeholder", "1-5");
nombrePhrases.setAttribute("min", "1");
nombrePhrases.setAttribute("max", "5");
const bouton2 = document.createElement('input');
bouton2.setAttribute("type", "submit"); 

//Paragraphe avec le résultat
const p_final = document.getElementById('p_final');

//Input "Souhaitez-vous recommencer?"
const p_recommencer = document.getElementById("p_recommencer");
const input_recommencer = document.createElement('input'); 
input_recommencer.setAttribute("type", "text") ; 
input_recommencer.setAttribute("placeholder", "O/N ? ")
const bouton3 = document.createElement('input');
bouton3.setAttribute("type", "submit");
bouton3.setAttribute("value", "Recommencer ?");

//Fonction qui génère les phrases
function plusieursPhrases(){
	//Liste qui va contenir les phrases
	const lesPhrases=[];
	//Création de l'input pour entrer le nombre de phrases
	p_phrase.innerHTML = "Combien de phrases souhaitez-vous générer ? ";
	p_phrase.appendChild(nombrePhrases);
	p_phrase.appendChild(bouton2);
	//Fonction qui se déclenche au clic sur bouton2
	bouton2.onclick = function() {
		if (isNaN(nombrePhrases.value) || nombrePhrases.value < 1 || nombrePhrases.value > 5) {
		alert("L'élément entré ne convient pas. Entrez un nombre entier entre 1 et 5.") ; 
		plusieursPhrases();
		} 	
		else {
			p_phrase.innerHTML = "Vous avez choisi " + nombrePhrases.value + " phrase(s).";
			for (let i=0; i<nombrePhrases.value; i++){
				lesPhrases.push(phrase()) ; 
				}
			p_final.innerHTML = "<strong>La ou les phrase(s) générée(s) : </strong><br/> " + lesPhrases.join("<br/>") ;  
			p_recommencer.innerHTML = "Souhaitez-vous recommencer? O/N";
			p_recommencer.appendChild(input_recommencer) ;
			p_recommencer.appendChild(bouton3); 
		}
	}
}
//Fonction qui demande la langue puis execute plusieursPhrases() 
function choixLangue() {
	//Création du input pour la langue
	const langueNom = document.createElement('input') ; 
	langueNom.setAttribute("type", "text") ; 
	langueNom.setAttribute("placeholder", "F/A ?") ; 
	const p_langue = document.getElementById('p_langue') ; 
	p_langue.innerHTML = "En quelle langue souhaitez-vous générer la ou les phrase(s) Français ou Anglais ? " ; 
	p_langue.appendChild(langueNom) ;
	const bouton1 = document.createElement('input');
	bouton1.setAttribute("type", "submit");
	p_langue.appendChild(bouton1);
	//Fonction qui se déclenche au clic sur bouton 1
	bouton1.onclick = function() {
		switch (langueNom.value) {
			case "F" : 
			case "f" :
				langue = 0 ;
				p_langue.innerHTML = "Vous avez choisi Français.";
				plusieursPhrases();
				break ;			
			case "A" :
			case "a" :  
				langue = 1 ;
				p_langue.innerHTML = "Vous avez choisi Anglais." ;
				plusieursPhrases();
				break ;			
			default : 
				alert("Vous devez saisir 'F' pour Français ou 'A' pour Anglais.") ;
				choixLangue()  ;
		}	
	}	
}
//Fonction qui s'execute en boucle tant que again = O 
function demarrer(again){ 
	switch (again) {
		case "O" : 
		case "o" :	
			p_phrase.innerHTML="";
			p_final.innerHTML="";
			p_recommencer.innerHTML="";
			nombrePhrases.value = "";
			input_recommencer.value="";
			choixLangue();		
			bouton3.onclick = function() {
				again = input_recommencer.value;
				demarrer(again);
			}
			break;
		case "N" : 
		case "n" :
			p_recommencer.innerHTML="A bientôt !";
			break ;	
		default : 
			alert("L'élément entré n'est pas valide. Répondez par oui 'O' ou non 'N'");						
	}
} 






