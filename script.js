console.log("eek");

const bento = document.querySelector(".bento");
const bentoButton = document.querySelector(".generator");

const vegetable = ["brocoli", "salted tomato", "kimchi"]
const protein = ["Beef & onyon", "egg", "Katsu"]
const dessert = ["kit kat", "muffin", "PANCAKE"]




bentoButton.addEventListener("click", function(e){
        e.preventDefault();
        console.log("eek!!");
        let todaysBento = generateBento(vegetable, protein, dessert);

        
        bento.innerText = todaysBento;
})

function generateBento(veg, protein, dessert){
    const randomNumber = Math.floor(Math.random() * 3);
    return `${veg[randomNumber]}, ${protein[randomNumber]}, ${dessert[randomNumber]} + rice`
  }