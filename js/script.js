function calculo(){
	//Declaração de variáveis
	var gasolina = document.getElementById('gasolina').value;
	var etanol = document.getElementById('etanol').value;
	var result = document.getElementById('result');
	

	//Troca vírgula por ponto
	gasolina = gasolina.replace(',','.');
	etanol = etanol.replace(',','.');
	

	if(gasolina != '' && etanol != ''){
		//Calcula o melhor combustível
		var maisBarato = etanol/gasolina;

		if(maisBarato >= 0.75){
			result.innerHTML = 'Melhor abastecer com gasolina';
			result.style = 'color: #cc0000 ; text-shadow: 2px 2px 2px #000;';
		}else{
			result.innerHTML = 'Melhor abastecer com etanol';
			result.style = 'color: #cc0000 ; text-shadow: 2px 2px 2px #000;';
		}
	}else{
		alert('Preencha todos os campos!');
	}
}

function verificarInput(event){
	var x = event.key;
	if(x != 0 && x != 1 && x != 2 && x != 3 && x != 4 && x != 5 && x != 6 && x != 7 && x != 8 && x != 9 && x != ',' && x != '.' && x != 'Backspace' && x != 'Delete' && x != 'ArrowLeft' && x != 'ArrowRight'){
		alert('Caractere inválido');
		document.getElementById('gasolina').value = '';
		document.getElementById('etanol').value = '';
	} 
}