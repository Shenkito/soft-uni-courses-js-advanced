function objectFactory(library, orders) {

    let result = []; // създавам си празен масив в който да запазвам резултата , така е по условие.

    for (let order of orders) { // обхождам данните от ордъра , като order ще ми върне parts: и template:
        let object = Object.assign({}, order.template); // създавам си нов обект , като присвоявам стойноста която е под order template в случая ще вземе името
        for (let part of order.parts) { // обхождам , като в part присвоявам функцията която трябва да изпълнявам по условие чрез ordera който както споменах по-горе ще ми върне parts а това казано така е името на фукнцията примерно print и т.н
            object[part] = library[part]; // на ключа part примерно "print" , да закача реалната фукниця print която е зададена готова в library`то
        }

        result.push(object); // пушвам в масив , защото така ми е зададено по условие
    }

    console.log(result);
    return result;

}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

objectFactory(library, orders);