const buttons = document.querySelectorAll('button');
const answers = document.querySelectorAll('.hidden');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        answers[index].classList.toggle('hidden');
    });
});

// const API_URL = 'https://jservice.io/'; // Adjust the URL as needed

// fetch(/api/clues)
//   .then((response) => response.json())
//   .then((data) => {
//     // Handle the data here
//     const questions = data.results;
//     // Now you can use these questions to populate your cards
//   })
//   .catch((error) => {
//     console.error('Error fetching data:', error);
//   });

//   fetch(/api/clues)
//   .then((response) => response.json())
//   .then((data) => {
//     const questions = data.results;
//     const cards = document.querySelectorAll('.card-back p');
    
//     cards.forEach((card, index) => {
//       card.textContent = questions[index].question;
//       card.nextElementSibling.textContent = questions[index].correct_answer;
//     });
//   })
//   .catch((error) => {
//     console.error('Error fetching data:', error);
//   });