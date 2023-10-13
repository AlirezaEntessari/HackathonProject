let correct;
async function getRandomPokemon() {
    try {
        const randomId = Math.floor(Math.random() * 493) + 1;

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

        const pokemonData = response.data;
        console.log(pokemonData);
        correct = false;

        displayPokemonData(pokemonData);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

const name = document.querySelector('.name');
const id = document.querySelector('.id');
const img = document.querySelector('.image');
const form = document.getElementById('form');
const pointsElement = document.querySelector('.points');
const next = document.querySelector('.next');
let points = 0;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name').value;
    if(nameInput !== "" && !correct){
        form.reset();
        correct = true;
        points++;
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