let zookeeper = {
	animals: [],
	//animalName is a string which indicates an animal name
	feedAnimal: function (animalName) {
		let animal = this.findAnimal(animalName);
		if(animal != null){
			console.log("This animal called " + animal.name + " is fed!");
		}
	},

	//animalName is a string which indicates an animal name	
	findAnimal: function (animalName) {
		for(let it= 0; it<=this.animals.length -1; ++it) {
			if(this.animals[it].name == animalName){
				return this.animals[it];
			}
		}
		return null;
	},
	//animalName is a string which indicates an animal name
	eatAnimal: function (animalName) {
		let animal = this.findAnimal(animalName);
		if(animal !=null){
			let index= this.animals.indexOf(animal);
			return this.animals.splice(index, 1);
		}
	},
	//oldName is a string which indicates current animal name;
	// newName is a string with new name for animal
	renameAnimal: function (oldName, newName) {
		let animal = this.findAnimal(oldName);
		if(animal != null){
			console.log("This animal " +animal.name+ " changed his name for "+newName+".")
			return animal.name = newName;
		}
	},
	//firstAnimalName is a string which indicates first animal name;
	//secondAnimalName is a string with second animal name
	marryTwoAnimals: function (firstAnimalName, secondAnimalName) {
		let animal1 = this.findAnimal(firstAnimalName);
		let animal2 = this.findAnimal(secondAnimalName);
		if (animal1 != null && animal2 != null) {
			animal1.marriedTo = secondAnimalName;
			animal2.marriedTo = firstAnimalName;
			console.log("Married animal: " + animal1.name + " to animal: " + animal2.name);
		}
	},
	//newAnimals is an array of new animal objects
	buyMoreAnimals: function (...newAnimals) {
		if (newAnimals != null || newAnimals != undefined) {
			for (let it = 0; it < newAnimals.length; ++it) {
				if (newAnimals[it].specie == "kangaroo" || 
					newAnimals[it].specie == "orca" ||
					newAnimals[it].specie == "swallow") {
					if (this.findAnimal(newAnimals[it].name) == null){
						this.animals.push(newAnimals[it]);
					}
				} else {
					console.error("Not correct specie of animal: " + newAnimals[it].specie);
				}
			}
		}
	}
};

module.exports = zookeeper;