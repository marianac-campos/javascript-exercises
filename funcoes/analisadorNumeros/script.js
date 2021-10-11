let valor = document.querySelector('input#valor');
let lista = document.querySelector('select#guardaNumeros');
let resp = document.querySelector('div#resp');
let valores = [];

function isNumber(num){
    if(Number(num) >= 1 && Number(num) <= 100){
        return true;
    }else {
        return false
    };
};

function inList(num, l){
    if(l.indexOf(Number(num)) != -1){
        return true;
    }else {
        return false
    };
};

function cadastrar(){
    if(isNumber(valor.value) && !inList(valor.value, valores)){
        valores.push(Number(valor.value));
        let item = document.createElement('option');

        item.text = `Numero ${valor.value} adicionado`;
        lista.appendChild(item);

        resp.innerHTML = "";
    } else{
        alert("Digite um número dentro das regras!");   
    };

    valor.value = '';
    valor.focus();
};

function finalizar(){
    if(valores.length < 2){
        alert("Adicione pelo menos dois valores");
    } else {
        let maiorValor = valores[0];
        let menorValor = valores[0];
        let somaValores = 0;

        let total = valores.length;

        for(let pos in valores){
            somaValores += valores[pos];

            if(valores[pos] > maiorValor){
                maiorValor = valores[pos];
            };
            if(valores[pos] < menorValor){
                menorValor = valores[pos];
            };
        };
        
        let media = somaValores/total

        resp.innerHTML += `<p>Tivemos <b> ${valores.length} </b> numeros cadastrados</p>`;
        resp.innerHTML += `<p>O numero <b> ${maiorValor} </b>, foi o <b> maior </b> cadastrado</p>`;
        resp.innerHTML += `<p>E o numero <b> ${menorValor} </b> foi o <b> menor </b> cadastrados</p>`;
        resp.innerHTML += `<p>A <b> soma </b> dos valores e de <b> ${somaValores} </b></p>`;
        resp.innerHTML += `<p>A <b> media </b> dos valores e de <b> ${media} </b> </p>`;
    };
};

function limpar(){
    location.reload();
};