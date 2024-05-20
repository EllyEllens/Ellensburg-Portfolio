const inputs = document.querySelectorAll(".contact-input");

inputs.forEach(() => {
    ipt.addEventListener("focus", () => {
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
    });
    ipt.addEventListener("blur", () => {
        ipt.parentNode.classList.remove("focus");
    });
});






/*----------------TYPING ANIMATION-----------------*/ 
/*var typed = new Typed(".typing",{
    strings:["", "Front-End Developer","Graphic Designer", "Data Analyst", "Youtuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})*/