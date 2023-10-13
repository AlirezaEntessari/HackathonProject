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

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const headInput = document.getElementById('head').value;
    const bodyInput = document.getElementById('body').value;

    if(bodyInput.toLowerCase() === currentFusion.fused.body.toLowerCase() && headInput.toLowerCase() === currentFusion.fused.head.toLowerCase() && !correct){
        form.reset();
        correct = true;
        head.classList.add('show');
        body.classList.add('show');
        points++;
        pointsElement.textContent = `POINTS: ${points}`;
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
    fetch()
    head.classList.remove('show');
    body.classList.remove('show');
})

fetch();

