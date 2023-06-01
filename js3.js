let tt =
document.querySelector('textarea');
let count = document.querySelector('.count');

let charLength;

tt.addEventListener('input',()=>{

    charLength = tt.value.length;
    count.innerHTML = charLength;
   
   
    if(charLength>=80) {
count.style.color='red';
tt.style.color='red';


    }

    else{
       
            count.style.color='black';
            tt.style.color='black';
        }
})


let ttt =
document.querySelector('.in1');

ttt.addEventListener('input',()=>{

    let bb = ttt.value.length;
    
    if(bb>=7) {
ttt.style.color='green';
ttt.style.background='pink';
    }

    else{
            ttt.style.color='black';
            ttt.style.background='white';
        } })



        
        
        // Contrôle du courriel en fin de saisie en utilisant regex
        document.getElementById("email").addEventListener("blur", function (e) {
            // Correspond à une chaîne de la forme xxx@yyy.zzz
            var regexCourriel = /.+@.+\..+/;
            var validiteCourriel = "";
            if (!regexCourriel.test(e.target.value)) {
                validiteCourriel = "Adresse invalide";
            }
            document.getElementById("maill").textContent = validiteCourriel;
        });
