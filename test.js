/**
* fonction qui ne fait que retourner la somme de 2 chiffres
*/
function somme(a, b){
	if(typeof(a) != 'number'){
		throw "le paramètre 'a' doit être un nombre";
	}
	if(typeof(b) != 'number'){
		throw "le paramètre 'b' doit être un nombre";
	}	
	
	return a+b;	
}

//test fonctionnel
function testSomme(){
	try{
		//test ok
		var rslt1 = somme(10, 20);
		console.log("test 1 : " + rslt1);
	}
	catch(e){
		console.log("erreur test 1 : " + e);
	}
	
	try{	
		//test ko variable a n'est pas un nombre
		var rslt2 = somme("a", 20);	
		console.log("test 2 : " + rslt2);	
	}
	catch(e){
		console.log("erreur test 2 : " + e);
	}	
	
	try{
		//test ko variable b n'est pas un nombre
		var rslt3 = somme(10, "fg");		
		console.log("test 3 : " + rslt3);		
	}
	catch(e){
		console.log("erreur test 3 : " + e);
	}	
	
	try{	
		//test qui doit etre ok
		var rslt4 = somme(10.10, 20.30);
		console.log("test 4 : " + rslt4);	
	}
	catch(e){
		console.log("erreur test 4 : " + e);
	}		
}