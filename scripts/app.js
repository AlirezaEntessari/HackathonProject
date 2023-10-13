let correct;
async function fetch() {
    const response = await axios.get("https://keith.api.stdlib.com/pokefusion@0.2.0/");
    correct = false;
    display(response);
    return response;
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
    // console.log(headInput + bodyInput + result.data.fused.head + result.data.fused.body);
    // if(headInput.toLowerCase() == result.data.fused.head.toLowerCase() && bodyInput.toLowerCase() == result.data.fused.body.toLowerCase()){
    if(headInput === "" && !correct){
        correct = true;
        head.classList.add('show');
        body.classList.add('show');
        points++;
        pointsElement.textContent = `POINTS: ${points}`;
    }
})

function display(result) {
    console.log(result);
    fusionName.textContent = `NAME: ${result.data.name}`;
    img.src = result.data.image_url;
    head.textContent = `HEAD: ${result.data.fused.head}`;
    body.textContent = `BODY: ${result.data.fused.body}`;
    return result;
}

next.addEventListener('click', () => {
    fetch()
    head.classList.remove('show');
        body.classList.remove('show');
})

fetch();

