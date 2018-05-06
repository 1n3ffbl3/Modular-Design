let model = {
	DB: {},
	name: "",
	nextID: 00,
	create: function(newAnimal) { // args - array or object? with prop values
		if(newThing !== ''){
        	this.db[this.next_id] = newAnimal;
        	this.next_id ++;
        	return 'Animal was added';
        }else{
        	console.log("Error")
        	return 'New animal was an empty string.';
        }
    },				// we should decide on one way so they can swap models
		},
	read_one: function() { // arg - ID

		},
	read_all: function() { // arg - none

		},
	update: function(ID, new_value) { // args - id, {key, newValue}?
		var returner = '';
        if (this.db[ID] && new_value !== ""){
            returner ='All good';
        } else if (this.db[ID] && new_value === ""){
            returner ='Bad input';
        } else if (this.db[ID] !==undefined && new_value !== ""){
            returner ='Bad id';
        } else{
            returner ='Bad id & bad input';
        }  
	    return returner
	},
	remove: function() { // args - id
		if(this.db[ID]){
			this.db[ID] = undefined;
			console.log('item WAS DELETED');
		} else{
			console.log('UNKNOWN ID');
		}
    }
		
};

// we give them just this, they fill it out