function verificar(){
    var date = new Date();
    var yearPresent =  date.getFullYear();
    var year = document.getElementById('txtAno');
    var res = document.getElementById('res');
    
    if(year.value.length == 0 || year > yearPresent ){
        window.alert("Informações Inválidas! Verifique os dados inseridos.");
    } else{
        var fsex = document.getElementsByName('radsex');
        var age = yearPresent - Number(year.value);
        var genero = '';

        if(fsex[0].checked){
            genero = "Masculino";
        } else if (fsex[1].checked){
            genero = "Feminino";
        } else{
            genero = "Não Binário" 
        }

        res.innerHTML = `Você se identifica como ${genero} e tem ${age} anos!`; 
    }
}