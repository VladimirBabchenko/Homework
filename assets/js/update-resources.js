function chooseFarmForCrop(farm1, farm2) {
    var result = Math.round(Math.random()*100);
    return result < 50 ? farm1 : farm2;
}

function chooseResource(chosen) {
    return Math.round(Math.random() * (chosen.farm.length-1));
}

function chooseProductToPlant() {
    var plants = [{ name: "potatoes", income: 1200 },
    { name: "carrot", income: 1200 },
    { name: "mandarin", income: 1200 }];
    var res = Math.round(Math.random() * (plants.length-1));
    return plants[res];
}

console.log(chooseProductToPlant())

console.log(chooseResource(chooseFarmForCrop(farm1, farm2)));

setTimeout(function callback() {
    try {
        var farm = chooseFarmForCrop(farm1, farm2);
        if(farm.farm.length === 0) return;
        var chosenResource = chooseResource(farm);
        var resultOfPlanting = farm.farm[chosenResource].isReadyForPlanting();
        if (farm.farm[chosenResource].product) {
            farm.farm[chosenResource].harvest();
        } else if (farm.farm[chosenResource].isReadyForPlanting()) {
            farm.farm[chosenResource].plant(chooseProductToPlant().name, chooseProductToPlant().income);
        } else {
            farm.farm.splice(chosenResource, 1);
            throw new Error("The field is needed to restore before planting");
        }
        console.log(farm.farm[chosenResource]);
    } catch (e) {
        console.log(e.name, e.message);
    } finally {
        setTimeout(callback, 1000);
    }
}, 1000);