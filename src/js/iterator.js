class Car {
    constructor(...args) {
        [
            this.name = "defaultCar",
            this.speed = 150,
            this.releaseDate = new Date().toLocaleString()
        ] = [...args]
    }

    [Symbol.iterator]() {
        let carFeatures = Object.getOwnPropertyNames(this);
        let myObj = this;
        let counter = 0;

        return {
            next() {
                return carFeatures.length !== counter ?
                {   
                    value: {
                        [carFeatures[counter]]: myObj[carFeatures[counter++]]
                    },
                    done: false
                } : {
                    done: true
                }
            }
        }
    }
}

// let car = new Car();

export default Car;