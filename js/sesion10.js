window.addEventListener('load', function(){
    
    //evento para el reto 1 del globo
    document.addEventListener('keydown', function inflarGlobo(e){
        e.preventDefault();
        let globo=document.querySelector("#globo");
        let style=getComputedStyle(globo).getPropertyValue('font-size');
        let tamanio_letra = parseFloat(style); 
        
        if(tamanio_letra==80){
            globo.innerHTML= "💥";
            document.removeEventListener('keydown', inflarGlobo);
        }

        if (e.keyCode == '38') {
            // up arrow
            console.log("arriba");
            globo.style.fontSize=tamanio_letra+2;
            console.log(tamanio_letra);
        }
        else if (e.keyCode == '40') {
            // down arrow
            console.log("abajo");
            globo.style.fontSize=tamanio_letra-2;
            console.log(tamanio_letra);
        }
    });

    //reto 2
    let button=document.querySelector("button");
    button.addEventListener('click',function(){
        let modal=document.querySelector("#modal");
        modal.style.display="block";

        let image = document.querySelector("#modal-image");
        image.setAttribute('src','https://picsum.photos/300/200' ) ;

        let close=document.querySelector(".close");
        close.addEventListener('click', function(){
            modal=document.querySelector("#modal").style.display="none";
        });
    });

    //reto 3
    let div_tabs=document.querySelector("#tab-panel");
    createTabs(div_tabs);

});


function createTabs(node) {
    // Code goes here
    let arr_divs=document.querySelectorAll("#tab-panel div");
    console.log(arr_divs);
    arr_divs[0].style.display="block";
    for (let index = 0; index < arr_divs.length; index++) {
        arr_divs[index].style.display="none";
        let button=document.createElement("button");
        button.setAttribute("id", "buton-"+index);
        button.innerHTML=arr_divs[index].getAttribute("data-tabname");
        node.appendChild(button);
    }
    let b1=document.querySelector("#buton-0");
    b1.addEventListener('click', function(){
        arr_divs[0].style.display="block";
         arr_divs[1].style.display="none";
         arr_divs[2].style.display="none";
    });
    let b2=document.querySelector("#buton-1");
    b2.addEventListener('click', function(){
        arr_divs[0].style.display="none";
        arr_divs[1].style.display="block";
        arr_divs[2].style.display="none";
    });
    let b3=document.querySelector("#buton-2");
    b3.addEventListener('click', function(){
        arr_divs[0].style.display="none";
        arr_divs[1].style.display="none";
        arr_divs[2].style.display="block";
    });
}