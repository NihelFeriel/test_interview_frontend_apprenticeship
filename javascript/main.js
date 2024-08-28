const getEvenNumbers = (numbers) => {
    return numbers.filter(number => number % 2 === 0);
};

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); 

// Another solution with Math.random

function getEvenNumber() {
    const number =[];
    for (let i = 0; i <5 ; i++) {
        const randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        number.push(randomNumber);
      
    }

    return console.log(number.filter(number => number % 2 === 0));
    
}

getEvenNumber();


async function fetchTodos() {

    try {

        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        if (!response.ok) {

            throw new Error('Erreur');
        }
        const getElementTodos = document.getElementById('todos')
        const data = await response.json();
        console.log(data);
        for (let index = 0; index < 5; index++) {
            creatListe = `  <li>${data[index].title}</li>`
            getElementTodos.innerHTML += creatListe;
           
        }

        return data;

    } catch (error) {

        console.log('Erreur:', error);

        return false;
    }

}

fetchTodos();



const button = document.getElementById('changeTextBtn');

button.addEventListener('click', () => {
  
    const textElement = document.getElementById('myText');
  
    textElement.textContent = 'Hello, Check!';
});

// Another solution with onClick

function changeText() {
   
    const textElement = document.getElementById('myTextSecond');
  
    if (textElement.textContent === 'This is the original text.') {
        textElement.textContent = 'Hello, Check!';
    } else {
        textElement.textContent = 'This is the original text.';
    }
}