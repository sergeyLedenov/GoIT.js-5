//1
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const but1 = document.querySelector('[data-action="open-modal"]');
const but2 = document.querySelector('[data-action="close-modal"]');
const body = document.querySelector("body");

but1.addEventListener("click", ()=> {
    console.log(123);
    body.classList.add("show-modal");
});

but2.addEventListener("click", ()=> {
    console.log(123);
   // if (!showModal) {
    body.classList.remove("show-modal");        
    //}
});

backdrop.addEventListener("click", ()=> {
    console.log(123);
    //if (!showModal) {
        body.classList.remove("show-modal");
    //}
});


//2
const redB = document.querySelector(".red");
const greenB = document.querySelector(".green");
const blueB = document.querySelector(".blue");

redB.addEventListener("click", ()=> {
    body.style.background = "red" // or bgcolor
});

greenB.addEventListener("click", ()=> {
    body.style.background = "green"
});

blueB.addEventListener("click", ()=> {
    body.style.background = "blue"
});


//3
const name = document.querySelector("#name");
const res = document.querySelector(".res");

name.addEventListener("input", ()=> {
    res.textContent = name.value;
});


//3.5
const text = document.querySelector("#text");
const maxLength = Number(text.dataset.length);

text.addEventListener("input", ()=> {
    if (text.value.length <= maxLength) {
        text.classList.remove("red-inp");
        text.classList.add("green-inp");
        console.log("<=")
    } else {
        text.classList.add("red-inp");
        text.classList.remove("green-inp");
        console.log(">")
    }
});


//4 
const sizeInp = document.querySelector("#sizeInp");
const size = document.querySelector(".size");
const sizeTxt = document.querySelector(".sizeTxt");



sizeInp.addEventListener("input", ()=> {
    console.log(sizeInp.value);
    
    size.textContent = sizeInp.value;
    sizeTxt.style.fontSize = sizeInp.value + 'px'
});