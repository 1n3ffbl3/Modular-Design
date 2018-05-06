let zookeeper = require("./model")
let factory = require("./animalFactory")

function addAnimal() {
    let name = document.getElementById("animalName").value;
    let specie = document.getElementById("specie").value;

    let animal = factory.createAnimal(name, specie);

    if (animal != undefined) {
        zookeeper.buyMoreAnimals(animal);
    }
}