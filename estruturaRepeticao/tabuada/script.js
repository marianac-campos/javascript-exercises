function resolver(){
    let valor = document.getElementById('txtValor');
    let tab = document.getElementById('selectTab');

    if(valor.value.length == 0){
        window.alert("Valor Inválido!");
    } else {
        let n = Number(valor.value);

        tab.innerHTML = "";

        for(let c=1; c<=10; c++){
            let item = document.createElement('option');
            item.text = `${c} x ${n} = ${c*n}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
        };
    };

};


