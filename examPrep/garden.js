class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {

        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.")
            return;
        }

        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`

    };

    ripenPlant(plantName, quantity) {

        let foundPlant = this.plants.find(plant => plant.plantName === plantName);
        if (!foundPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        };
        if (foundPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        };
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        };

        foundPlant.ripe = true;
        foundPlant.quantity += quantity;

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else if (quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`;
        };
    }

    harvestPlant(plantName) {
        let foundPlant = this.plants.find(plant => plant.plantName === plantName);
        if (!foundPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        };

        if (!foundPlant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        };

        let harvestedPlant = {
            plantName: foundPlant.plantName,
            quantity: foundPlant.quantity
        }

        this.storage.push(harvestedPlant);
        this.spaceAvailable += foundPlant.spaceRequired;
        this.plants = this.plants.filter(plant => plant.plantName !== plantName);
        return `The ${plantName} has been successfully harvested.`;

    }

    generateReport() {
        let report = [];
        let spaceLeft = `The garden has ${this.spaceAvailable} free space left.`
        report.push(spaceLeft);

        let plantsInTheGardenSorted = this.plants
            .map(plant => plant.plantName)
            .sort((a, b) => a.localeCompare(b))
            .join(", ");

        report.push(`Plants in the garden: ${plantsInTheGardenSorted}`);
        let storageLength = this.storage.length;

        if (storageLength <= 0) {
            report.push("Plants in storage: The storage is empty.");
        } else {
            let plantsInStorageFormated = this.storage
                .map(plant => `${plant.plantName} (${plant.quantity})`)
                .join(", ");
            report.push(`Plants in storage: ${plantsInStorageFormated}`);
        }
        return report.join("\n");

    }

}


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());