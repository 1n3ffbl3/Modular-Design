let zookeeper = require("./model");

let kanguroo = {
	name: "Stefan",
	specie: "kangaroo"
};
zookeeper.buyMoreAnimals(kanguroo);
console.log(zookeeper.animals);
console.assert(zookeeper.animals[0] != undefined, "Zookeeper supposes to have new animal!");
console.assert(zookeeper.animals[0] == kanguroo, "Zookeeper supposes to have new animal!");
zookeeper.feedAnimal(kanguroo.name);
console.assert(zookeeper.eatAnimal(kanguroo.name)[0] == kanguroo, "Eating is not working correctly!");
zookeeper.buyMoreAnimals(kanguroo);
console.assert(zookeeper.renameAnimal(kanguroo.name, "Viola") == "Viola", "renaming is not working correctly!")
let szczur = {
	name: "Ratatouille",
	specie: "orca"
}
zookeeper.buyMoreAnimals(szczur);
zookeeper.marryTwoAnimals(kanguroo.name, szczur.name);
console.assert(kanguroo.marriedTo == szczur.name && szczur.marriedTo == kanguroo.name, "Marrying is not working correctly");

