//  VARIABLES
const enlaces = document.querySelectorAll('a');
const imagenes = document.querySelectorAll('img');
const parrafos = document.querySelectorAll('p');
const articles = document.querySelectorAll('article');
const section = document.querySelectorAll('section');

let colors = ['#8ECAE6', '#219EBC', '#023047', '#FFB703', '#FB8500'];
// let randomGif = Math.floor(Math.random() * 5) + 1;

// EVENTOS
enlaces.forEach(element => {
    element.addEventListener('click', event => {
        event.preventDefault();
    })
});

imagenes.forEach(element => {
    element.addEventListener('click', () => {
        let randomGif = Math.floor(Math.random() * 5) + 1;
        element.setAttribute('src', `./assets/magic-${randomGif}.gif`);
    })
});

imagenes.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.setAttribute('src', './assets/abracadabra.gif');
    })
});
parrafos.forEach(element => {
    element.addEventListener('click', () => {
        element.setAttribute('style', `color: ${getRandom(colors)}; background: ${getRandom(colors)}`);
    })
});
parrafos.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.setAttribute('style', `color: ${getRandom(colors)}; background: ${getRandom(colors)}`);
    })
});
articles.forEach(element => {
    element.addEventListener('click', () => {
        // let colors = ['#8ECAE6', '#219EBC', '#023047', '#FFB703', '#FB8500'];
        // let randomColor = Math.floor(Math.random() * 4) + 1;
        // element.setAttribute('style', `background: (${colors}[${randomColor})]`);
        element.setAttribute('style', `background: ${getRandom(colors)}`);
    })
});
articles.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.setAttribute('style', `background: ${getRandom(colors)}`);
    })
});

// FUNCIONES 
const getRandom = (array) => {
   return array[Math.floor(Math.random() * 4) + 1];
}

