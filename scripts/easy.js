let correct;
let currentPokemon;
async function getRandomPokemon() {
    try {
        const randomId = Math.floor(Math.random() * 493) + 1;

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

        currentPokemon = response.data;
        console.log(currentPokemon);
        correct = false;

        displayPokemonData(currentPokemon);
        getRandomNames()
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

async function getRandomNames() {
    const response1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 493) + 1}`);
    const response2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 493) + 1}`);
    const response3 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 493) + 1}`);
    createOptions([response1.data.name, response2.data.name, response3.data.name]);
    return [response1.data.name, response2.data.name, response3.data.name];
}


const name = document.querySelector('.name');
const id = document.querySelector('.id');
const img = document.querySelector('.image');
const form = document.getElementById('form');
const pointsElement = document.querySelector('.points');
const next = document.querySelector('.next');
const option1 = document.getElementById('option1'); 
const option2 = document.getElementById('option2'); 
const option3 = document.getElementById('option3'); 
const option4 = document.getElementById('option4'); 
let points = 0;

function createOptions(nameArr) {
    const optionsArr = nameArr;
    optionsArr.splice(Math.floor(Math.random() * (optionsArr.length + 1)), 0, currentPokemon.name);
    console.log(optionsArr);
    option1.textContent = optionsArr[0];
    option1.value = optionsArr[0];
    option2.textContent = optionsArr[1];
    option2.value = optionsArr[1];
    option3.textContent = optionsArr[2];
    option3.value = optionsArr[2];
    option4.textContent = optionsArr[3];
    option4.value = optionsArr[3];
    
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    selected = event.submitter;
    console.log(event.submitter.value)
    if(selected.value.toLowerCase() === currentPokemon.name.toLowerCase() && !correct){
        form.reset();
        correct = true;
        points++;
        selected.classList.add('correct');
        pointsElement.textContent = `POINTS: ${points}`;
        img.classList.add('image--show');
        img.classList.remove('image');
        next.textContent = "NEXT";
    }
})

function displayPokemonData(data) {
    
    name.textContent = `Name: ${data.name}`;

    id.textContent = `ID: ${data.id}`;

    img.src = data.sprites.other["official-artwork"].front_default;
    img.setAttribute("alt", data.name)
    

    const types = document.querySelector('.types');
    types.textContent = `Types: ${data.types.map(type => type.type.name).join(', ')}`;
}


next.addEventListener('click', () => {
    next.textContent = "SKIP";
    form.reset();
    getRandomPokemon()
    img.classList.add('image');
    img.classList.remove('image--show');
})

getRandomPokemon();