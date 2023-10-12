async function fetch() {
    const response = await axios.get("https://keith.api.stdlib.com/pokefusion@0.2.0/");
    return response;
}

const test = document.getElementById('test');
const img = document.createElement('img');
const name1 = document.createElement('h1');
const name2 = document.createElement('h1');
const fusion = document.createElement('h1');



async function display() {
    const result = await fetch();
    console.log(result);
    fusion.textContent = `NAME: ${result.data.name}`;
    img.src = result.data.image_url;
    name1.textContent = `HEAD: ${result.data.fused.head}`;
    name2.textContent = `BODY: ${result.data.fused.body}`;
    return result;
}

display();

test.appendChild(fusion);
test.appendChild(img);
test.appendChild(name1);
test.appendChild(name2);