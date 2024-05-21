console.log("eek");

const bento = document.querySelector(".bento");
const bentoButton = document.querySelector(".generator");

const vegetable = ["brocoli", "salted tomato", "kimchi", ]
const protein = ["Beef & onyon", "egg", "Katsu", "Chicken Wings", "Spinach Tamagoyaki", "Panfried Scallops","Salmon", "tuna"]
const dessert = ["kit kat", "muffin", "PANCAKE", "churro", "fruits"];




bentoButton.addEventListener("click", function(e){
        e.preventDefault();
        console.log("eek!!");
        let todaysBento = generateBento(vegetable, protein, dessert);

        
        bento.innerText = todaysBento;
})

function generateBento(veg, protein, dessert){
    const vegIndex = randomIndex(veg);
    const proteinIndex = randomIndex(protein);
    const dessertIndex = randomIndex(dessert);
    
    return `${veg[vegIndex]}, ${protein[proteinIndex]}, ${dessert[dessertIndex]} + rice`;
}

function randomIndex(array){
    return Math.floor(Math.random() * array.length);
}