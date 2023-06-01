let i1 = document.getElementById("im1");
let i2 = document.getElementById("im2");
let i3 = document.getElementById("im3");
let i4 = document.getElementById("im4");

document.getElementById("im1").addEventListener("mouseover",function(e){
    e.target.src="./nasa/11.jpg"
});

document.getElementById("im1").addEventListener("mouseout",function(){
    document.getElementById("im1").src="./nasa/1.jpg"
});

document.getElementById("im2").addEventListener("mouseover",function(e){
    e.target.src="./nasa/22.jpg"
});

document.getElementById("im2").addEventListener("mouseout",function(){
    document.getElementById("im2").src="./nasa/2.jpg"
});

document.getElementById("im3").addEventListener("mouseover",function(e){
    e.target.src="./nasa/33.jpg"
});

document.getElementById("im3").addEventListener("click",function(){
    document.getElementById("im3").src="./nasa/3.jpg"
});

document.getElementById("im4").addEventListener("mouseover",function(e){
    e.target.src="./nasa/44.jpg"
});

document.getElementById("im4").addEventListener("click",function(){
    document.getElementById("im4").src="./nasa/4.jpg"
});


document.getElementById("ee").addEventListener("click",function(){
    document.getElementById("eee").textContent="<label>donner link</label> <input ><br><br> <label>donner src photo</label><input><br><br> <label>donner titre</label><input><br><br>";
});
