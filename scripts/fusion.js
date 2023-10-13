let correct;
let currentFusion;
async function fetch() {
    try {
        const response = await axios.get("https://keith.api.stdlib.com/pokefusion@0.2.0/");
        correct = false;
        currentFusion = response.data;
        console.log(currentFusion);
        display(currentFusion);
    } catch (error) {
        console.error('Error fetching Pokemon fusion:', error);
        throw error;
    }
}

let points = 0;
const fusionName = document.querySelector('.name');
const img = document.querySelector('.image');
const head = document.querySelector('.head');
const body = document.querySelector('.body');
const form = document.querySelector('.form');
const pointsElement = document.querySelector('.points');
const next = document.querySelector('.next');
const headInput = document.getElementById('head');
const bodyInput = document.getElementById('body');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(bodyInput.value.toLowerCase() === currentFusion.fused.body.toLowerCase() && headInput.value.toLowerCase() === currentFusion.fused.head.toLowerCase() && !correct){
        correct = true;
        headInput.classList.remove("correct", 'incorrect');
        bodyInput.classList.remove("correct", 'incorrect');
        headInput.classList.add("correct");
        bodyInput.classList.add("correct");
        // head.classList.add('show');
        // body.classList.add('show');
        fusionName.classList.add('show');
        points++;
        pointsElement.textContent = `POINTS: ${points}`;
        next.textContent = "NEXT";
    }
    else if(bodyInput.value.toLowerCase() === currentFusion.fused.body.toLowerCase()) {
        bodyInput.classList.remove("correct", 'incorrect');
        bodyInput.classList.add("correct");
    }
    else if(headInput.value.toLowerCase() === currentFusion.fused.head.toLowerCase()) {
        headInput.classList.remove("correct", 'incorrect');
        headInput.classList.add("correct");
    }
    if(bodyInput.value.toLowerCase() !== currentFusion.fused.body.toLowerCase() || headInput.value.toLowerCase() !== currentFusion.fused.head.toLowerCase()){
        if(bodyInput.value.toLowerCase() !== currentFusion.fused.body.toLowerCase()) {
            bodyInput.classList.add("incorrect");
        }
        if(headInput.value.toLowerCase() !== currentFusion.fused.head.toLowerCase()) {
            headInput.classList.add("incorrect");
        }
    }
})

function display(result) {
    fusionName.textContent = `NAME: ${result.name}`;
    img.src = result.image_url;
    head.textContent = `HEAD: ${result.fused.head}`;
    body.textContent = `BODY: ${result.fused.body}`;
}

next.addEventListener('click', () => {
    form.reset();
    next.textContent = "SKIP";
    fetch()
    fusionName.classList.remove('show');
    headInput.classList.remove("correct", 'incorrect');
    bodyInput.classList.remove("correct", 'incorrect');
    // head.classList.remove('show');
    // body.classList.remove('show');
})

fetch();

