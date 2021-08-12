window.addEventListener('load', function(){
    document.addEventListener('keydown', function(e){
        let globo=document.querySelector("#globo");
        let style=getComputedStyle(globo).getPropertyValue('font-size');
        let tamanio_letra = parseFloat(style); 
        
        if(tamanio_letra==80){
            globo.innerHTML= "💥";
            setTimeout(function(){
                alert("Exploto el globo");
                location.reload();
            },1000);
        }

        if (e.keyCode == '38') {
            // up arrow
            console.log("arriba");
            globo.style.fontSize=tamanio_letra+5;
            console.log(tamanio_letra);
        }
        else if (e.keyCode == '40') {
            // down arrow
            console.log("abajo");
            globo.style.fontSize=tamanio_letra-5;
            console.log(tamanio_letra);
        }
    });
});