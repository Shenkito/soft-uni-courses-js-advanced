function heroicInventory(input) {
    
    let result = [];
    
    for (let lines of input) {
        let obj = {};
        let line = lines.split(" / ");
        obj.name = line[0];
        obj.level = Number(line[1]);
        
        let items = line[2];
        // obj.items = items ? items.split(", ") : [];
        if (items) {
            obj.items = items.split(", ");
        } else {
            obj.items = [];
        }
        result.push(obj)
    }
    
    return JSON.stringify(result);
}

heroicInventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);