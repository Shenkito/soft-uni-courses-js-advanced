function heroes() {

    let heroes = {
        mage: function(name) {
            return {
                name: name,
                health: 100,
                mana: 100,
                cast: function(spell) {
                    console.log(`${this.name} casts ${spell}`);
                    this.mana -= 1;
                }
            }
        },
        fighter: function(name) {
            return {
                name: name,
                health: 100,
                stamina: 100,
                fight: function(spell) {
                    console.log(`${this.name} slashes at the foe!`);
                    this.stamina -= 1;
                }
            }
        }
    }
    return heroes;
}

let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
console.log(scorcher2.stamina);
console.log(scorcher.mana);