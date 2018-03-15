let obj = {
    x: 1,
    y: 2,
    c: 4,
    [Symbol.iterator]() {
        const props = Object.getOwnPropertyNames(obj).sort();
        let counter = 0;
        return {
            next() {
                return (props.length !== counter) ? {
                    value: [props[counter], obj[props[counter++]]],
                    done: false
                } : {
                        done: true
                    }
            }
        }
    }
}

for (let res of obj) {
    console.log(res)
}

export default obj;
