const boton1 = document.querySelector('[data-bs-target="#collapse1"]');
const boton2 = document.querySelector('[data-bs-target="#collapse2"]');
const boton3 = document.querySelector('[data-bs-target="#collapse3"]');
const boton4 = document.querySelector('[data-bs-target="#collapse4"]');
const boton5 = document.querySelector('[data-bs-target="#collapse5"]');
const boton6 = document.querySelector('[data-bs-target="#collapse6"]');
const boton7 = document.querySelector('[data-bs-target="#collapse7"]');
const boton8 = document.querySelector('[data-bs-target="#collapse8"]');

let body = document.body;

boton1.onclick =()=>{
    body.style.backgroundColor = "orange"
}

boton2.onclick =()=>{
    body.style.backgroundColor = "blue"
}

boton3.onclick =()=>{
    body.style.backgroundColor = "green"
}

boton4.onclick =()=>{
    body.style.backgroundColor = "pink"
}

boton5.onclick =()=>{
    body.style.backgroundColor = "red"
}

boton6.onclick =()=>{
    body.style.backgroundColor = "darkmagenta"
}

boton7.onclick =()=>{
    body.style.backgroundColor = "yellow"
}

boton8.onclick =()=>{
    body.style.backgroundColor = "black"
}
