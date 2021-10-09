function alterar(){
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("image"); 

    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();

    msg.innerHTML = `Agora são ${hour}:${minute}.`;

    if(hour >= 0 && hour < 12){
        img.src = 'img/morning.jpeg';
        document.body.style.background = '#6F6041';

    } else if(hour >= 12 && hour < 18){
        img.src = 'img/afternoon.jpeg';
        document.body.style.background = '#A62F03';

    } else {
        img.src = 'img/nigth.jpeg';
        document.body.style.background = '#141F26';
    }
};