class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {

        if (model === "" || storage < 0 || price < 0 || condition === "") {
            throw new Error("Invalid smartphone!");
        } else {
            this.availableSmartphones.push({ model, storage: storage, price, condition: condition });
            return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
        };
    };

    sellSmartphone(model, desiredStorage) {
        let foundModel = this.availableSmartphones.find(x => x.model === model);
        let soldPrice = 0;

        if (!foundModel) {
            throw new Error(`${model} was not found!`);
        } else {
            if (foundModel.storage >= desiredStorage) {
                soldPrice = foundModel.price;
            } else if (Math.abs(foundModel.storage - desiredStorage) <= 128) {
                soldPrice = foundModel.price - (foundModel.price * 0.10);
            } else {
                soldPrice = foundModel.price - (foundModel.price * 0.20);
            };

            this.soldSmartphones.push({
                model: foundModel.model,
                storage: foundModel.storage,
                soldPrice,
            });
            this.availableSmartphones = this.availableSmartphones.filter(ph => ph.model != model);
            this.revenue += soldPrice;
            return `${model} was sold for ${soldPrice.toFixed(2)}$`
        };
    };

    upgradePhones() {
        if (this.availableSmartphones.length === 0) {
            return "There are no available smartphones!"
        };

        this.availableSmartphones = this.availableSmartphones.map((phone) => {
            let doubledStorage = phone.storage * 2;
            let priceFixed = phone.price.toFixed(2);

            return {
                ...phone,
                storage: doubledStorage,
                price: priceFixed,
            };

        });

        let phonesAvailable = this.availableSmartphones.map((phone) =>
            `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price}$`
        ).join("\n");

        return `Upgraded Smartphones:\n${phonesAvailable}`;
    };

    salesJournal(criteria) {
        if (criteria !== "storage" && criteria !== "model") {
            throw new Error("Invalid criteria!");
        }

        if (criteria === "storage") {
            this.soldSmartphones.sort((ph1, ph2) => ph2.storage - ph1.storage);
        } else if (criteria === "model") {
            this.soldSmartphones.sort((ph1, ph2) => ph1.model.localeCompare(ph2.model));
        }

        let printResult = [];

        printResult.push(`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`);
        printResult.push(`${this.soldSmartphones.length} smartphones sold:`);
        this.soldSmartphones.forEach(el => printResult.push(`${el.model} / ${el.storage} GB / ${el.soldPrice.toFixed(2)}$`));
        return printResult.join("\n");
    }
}

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));



