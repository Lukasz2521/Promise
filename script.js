//api: https://dog.ceo/dog-api/

document.addEventListener('DOMContentLoaded', () => {
    Dog.get();
    Dog.getAll();
});

const API = {
    GETALL: 'https://dog.ceo/api/breed/hound/images',
    GETRANDOM: 'https://dog.ceo/api/breeds/image/random'
}

const Dog = {
    get() {
        document.querySelector('#getRandom')
        .addEventListener('click', () => {
            Dog.makeRequestAsync(API.GETRANDOM)
            .then((dog) => {
                console.log(dog.message);
            }, (error) => {
                console.log(error);
            });
        });
    },
    getAll() {
        document.querySelector('#getAllDogs')
        .addEventListener('click', () => {
            Dog.makeRequestAsync(API.GETALL)
            .then((dog) => {
                console.log(dog.message);
            }, (error) => {
                console.log(error);
            });
        });
    },
    makeRequestAsync(url) {
        return new Promise((resolve, reject) => {
            var req = new XMLHttpRequest();
            req.open('GET', url, false);
            req.onload = () => resolve(JSON.parse(req.responseText));
            req.onerror = () => reject(req.statusText);
            req.send();
        });
    }
}