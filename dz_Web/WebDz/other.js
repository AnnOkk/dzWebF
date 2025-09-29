cnfrm.addEventListener('click', greet, { once: true });
userName.addEventListener('keyup', e => {
    if(e.key === 'Enter'){
        greet();
    }
});



function greet(){
    const text = userName.value.trim();

    if(text){
        const p = document.createElement("p");
        p.textContent = 'Hello ' + text + ', have a nice day!';
        p.style.color = "white";
        document.body.appendChild(p);
    }
    userName.value = '';
}

document.body.style.backgroundImage = 'url("./images/noch-zviozdnoe-nebo-nebo-derevo.jpg")';
document.getElementById('g').style.color = 'white';
document.getElementById('ayn').style.color = 'white';
