enum Status {
    Rich,
    Poor,
    SomeOneElse
}

enum Products {
    Banan,
    Apple,
    Meat
}

abstract class SocialStatus {
    protected abstract socialStatus: Status;
}

class StatusData extends SocialStatus {
    private eatingProducts: Products[] = []
    constructor(
        protected socialStatus: Status,
    ) {
        super();
    }

    get receiveEatingProducts() {
        return this.eatingProducts;
    }

    set eatingProduct(val: Products) {
        this.eatingProducts.push(val);
    }
}

class Kitchen {
    protected _products: Products[] = [];

    get kitchenProducts() {
        return this._products;
    }

    set addProduct(val: Products) {
        this._products.push(val);
    }
}

class StatusOnLiner<Rank> {
    constructor(
        private _socialNumber: number,
        protected socialStatus: Rank
    ) { }
    get receiveSocialNumber() {
        return this._socialNumber;
    }
}

class Liner extends Kitchen {
    private _socials: StatusOnLiner<StatusData>[] = [];
    private _totalPassengerAmount: number = 0;
    constructor() {
        super();
    }
    get receiveSocials() {
        return this._socials;
    }

    set addSocial(val: StatusOnLiner<StatusData>) {
        this._socials.push(val);
    }

    countPassengerAmount(): number {
        return this._totalPassengerAmount =
            this._socials.reduce((sum: number, next: StatusOnLiner<StatusData>) => {
                return sum + next.receiveSocialNumber;
            }, 0)
    }

    checkRequiredProducts(): boolean {
        return this._products.every(product => product === (
            this.kitchenProducts.find(value => value === product
            )
        ))
    }
}

const poor = new StatusData(Status.Poor);
poor.eatingProduct = Products.Apple;
const poorOnLiner = new StatusOnLiner<StatusData>(20, poor);
const liner = new Liner();
liner.addSocial = poorOnLiner;

let kitchen = new Kitchen();
kitchen.addProduct = Products.Banan;
kitchen.addProduct = Products.Apple;
console.log(liner.checkRequiredProducts());
console.log(liner)