let correct;
let pokemonData;
async function getRandomPokemon() {
    try {
        const randomId = Math.floor(Math.random() * 493) + 1;

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

        pokemonData = response.data;
        console.log(pokemonData);
        correct = false;

        displayPokemonData(pokemonData);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

const id = document.querySelector('.pokemon__id');
const img = document.querySelector('.pokemon__image');
const form = document.getElementById('form');
const pointsElement = document.querySelector('.points');
const next = document.querySelector('.next');
let points = 0;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name').value;
    if(nameInput.toLowerCase() === pokemonData.name.toLowerCase() && !correct){
        form.reset();
        correct = true;
        points++;
        pointsElement.textContent = `POINTS: ${points}`;
        img.classList.add('pokemon__image--show');
        img.classList.remove('pokemon__image');
        next.textContent = "NEXT";
    }
})

function displayPokemonData(data) {

    id.textContent = `ID: ${data.id}`;

    img.src = data.sprites.other["official-artwork"].front_default;
    img.setAttribute("alt", data.name)
    

    const types = document.querySelector('.pokemon__types');
    types.textContent = `Types: ${data.types.map(type => type.type.name).join(', ')}`;
}


next.addEventListener('click', () => {
    next.textContent = "SKIP";
    form.reset();
    getRandomPokemon()
    img.classList.add('pokemon__image');
    img.classList.remove('pokemon__image--show');
})

getRandomPokemon();