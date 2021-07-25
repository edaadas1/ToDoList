
function ekle(){
    var paragraph = document.createElement("p");
    paragraph.classList.add("ekleneceklerinstili");
    yapilacaklariyaz.appendChild(paragraph);
    paragraph.innerHTML= yapilacak.value;
    yapilacak.value="";
    

    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration= "line-through";
    })

    paragraph.addEventListener("dblclick",function(){
        yapilacaklariyaz.removeChild(paragraph);
    })


}