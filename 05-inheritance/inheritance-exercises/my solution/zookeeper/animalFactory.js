function Animal(name, specie) {
    this.name = name,
    this.specie = specie
};

function Kangaroo(name) {
    Animal.call(this, name, "kangaroo")
}

function Orca(name) {
    Animal.call(this, name, "orca")
}

function Swallow(name) {
    Animal.call(this, name, "swallow")
}

const ORCA = "orca", SWALLOW = "swallow", KANGAROO = "kangaroo";

let factory = {
    createAnimal: function(name, type) {
        switch (type) {
            case ORCA: {
                return new Orca(name);
            }
            case SWALLOW: {
                return new Swallow(name);
            }
            case KANGAROO: {
                return new Kangaroo(name);
            }
            default: {
                console.error("Wrong type: " + type);
            }
        }
    }
}

module.exports = factory;