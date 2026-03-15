const acc = document.querySelectorAll(".accordion");

acc.forEach(button => {

button.addEventListener("click", function(){

const panel = this.nextElementSibling;

if(panel.style.display === "block"){
panel.style.display = "none";
}else{
panel.style.display = "block";
}

});

});
