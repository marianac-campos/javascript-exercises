function contar(){
    let inicio = document.getElementById('txtInicio');
    let final = document.getElementById('txtFim');
    let passo = document.getElementById('txtPasso');

    let resp = document.getElementById('resp');

    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        window.alert("Informações insuficiente! Altere os valores");
        resp.innerHTML = `Não consigo contar sem todos os valores \u{1F622}`;
    } else {
        resp.innerHTML = "Contando... ";
        
        let i = Number(inicio.value);
        let f = Number(final.value);
        let p = Number(passo.value);

        if(i < f) {
            for(let c = i; c <= f; c += p){
                resp.innerHTML += `${c}, `;
            };
        } else {
            for(let c = i; c >= f; c -= p){
                resp.innerHTML += `${c}, `;
            };
        }
        resp.innerHTML += `\u{1F3C1}`;
    };
};


