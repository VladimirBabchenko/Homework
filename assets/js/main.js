// Task 2 - increment and getValue; (2 versions)

//ver 2.4

function count() {
  var n = 0;
  return {
    iteration: function() { return n++ },
    reset: function() { return n = 0 },
    getValue: function() { console.log(n) }
  }
}

//ver 2.3
function getObj(obj) {
    var counter = 0;
    obj.iteration = function() {
        return counter++;

    };
    obj.getValue = function() {
        show(counter);
    };
    return obj;
}

function show(value) {
    console.log(value);
}


//ver.2.1
// function getObj(obj, check) {
//   var checkedObj = check(obj);
//   checkedObj.increment = function () {
//     for (var key in checkedObj) {
//       if (typeof checkedObj[key] !== "function") {
//         checkedObj[key] += 1;
//       }
//     }
//     return checkedObj;
//   };
//   checkedObj.getValues = function () {
//     for (var key in checkedObj) {
//       show(key, checkedObj[key]);
//     }
//   };
//   return checkedObj;
// }
//
// function check (obj) {
//   if (!obj || typeof obj !== "object") return Object();
//   return obj;
// }
//
// function show(name, value) {
//   if (typeof value === "function") return;
//   console.log(name + ":" + value);
// }
//
// //ver 2.2
//
// function getObj2(obj, check) {
//   obj.increment =  function () {
//     for (var key in obj) {
//       if (check2(obj[key])) continue;
//       obj[key] += 1;
//     }
//     return obj;
//   };
//   obj.getValues = function () {
//     for (var key in obj) {
//       if (check2(obj[key])) continue;
//       console.log(obj[key])
//     }
//   };
//
//   return obj;
// }
//
// function check2 (obj) {
//   if (typeof obj === "function") return true;
//   return false;
// }


//=====================================================

// Task 3

function transformToNumber(value) {
  return parseFloat(value);
}

// Task 1

function calculateAverage() {
  var makeValues = function () {
    var data = prompt("Enter numbers," , "1, 2, 3, ...");
    if (data === null) {
      console.log("Good buy");
      return;
    }
    return data;
  };

  function checkedValues(values) {
    if (!values) return;
    if (!Number.isFinite(parseInt(values))) {
      console.log("Enter a numbers, pls");
      return;
    }
    return values;
  }

  function makeArrayNumbers(values, verifiedValues) {
    var data = verifiedValues(values);
    if (!data) return;
    var arrayNumbers = data.split(",");
    arrayNumbers.map(function(value, i, arr) {
      arr[i] = parseInt(value);
    });
      return arrayNumbers;
  }

  var findAverageValue = function(values, verifyValues) {
    var arrayValues = makeArrayNumbers(values, verifyValues), average, summeryValue = null;
    arrayValues.forEach(function(value) {
      summeryValue += value;
    });
    average = summeryValue/arrayValues.length;
    return console.log(average);
  };
  return findAverageValue(makeValues(), checkedValues);
}

//=====================================================

// Task 2

function exchangeCurrency() {
  var availableCurrency = {
    "usd": 0.04,
    "euro": 0.03,
    "uah": 1,
    "pound": 0.02,
    "ruble": 2.5
  };

  var receiveCurrency = function () {
    var chosenCurrency = prompt("Enter your currency for exchanging on UAH", "usd, euro, pound, ruble");
    var exchangingAmount = prompt("Enter your amount UAH for exchanging", "1, 10, 1000, ...");
    return [chosenCurrency, exchangingAmount];
  };

  function checkingCurrency(value) {
    var currencyName = value[0], currencyAmount = value[1], currencyRate;
    if (currencyName === null || currencyAmount === null) {
      console.log("Goodbye");
      return;
    }
    if (!(currencyName in availableCurrency)) {
      console.log("You entered invalid currency");
      return;
    }
    currencyRate = availableCurrency[currencyName];

    if (!Number.isFinite(parseInt(currencyAmount))) {
      console.log("You entered invalid amount of money, please enter a number");
    }
    return [currencyAmount, currencyRate];
  }

  function exchangeMoney(currency, verifyCurrency) {
    var dataForExchanging = verifyCurrency(currency);
    if (!dataForExchanging) return;
    var amount = dataForExchanging[0], rate = dataForExchanging[1];
    return console.log(amount * rate);
  }

  return exchangeMoney(receiveCurrency(), checkingCurrency);
}


//=====================================================

// Task 3

function createEmployeeForm() {
  var makeEmployeeData = function () {
    let name, surname, age, city, gender;
    name = prompt("Enter your name", "Vova, Petya, etc");
    surname = prompt("Enter your surname", "Petrov, Sidorov, etc");
    age = prompt("Enter your age(digits)", "");
    city = prompt("Enter your city of dwelling", "Odessa, Kiev");
    gender = prompt("Enter your gender", "male, female, etc");
    return {"name": name, "surname": surname, "age": age, "city": city, "gender": gender};
  };

  function checkedData(data) {
    if (!(data["name"] || data["surname"] || data["city"] || data["gender"] || data["age"])) {
      console.log("You've entered invalid data");
      return;
    }

    if (!Number.isFinite(parseInt(data["age"]))) {
      console.log("You entered invalid number");
      return;
    }

    if ((!isNaN(parseInt(data["name"]))) || (!isNaN(parseInt(data["surname"]))) || (!isNaN(parseInt(data["city"]))) || (!isNaN(parseInt(data["gender"])))) {
      console.log("You entered wrong data");
      return;
    }

    return data;
  }

  function showEmployeeData (values, verifydData) {
      var data = verifydData(values);
    if (!data) {
      return;
    }

    console.log("Employee data:\n" + "name = " + data["name"] + "\nsurname = " + data["surname"] + "\nage = " + data["age"] + "\ncity = " + data["city"] + "\ngender = " + data["gender"]);
  }

  return showEmployeeData(makeEmployeeData(), checkedData);
}

//=====================================================

// Task 4

function compareValues() {
  const makeValues = function() {
     let arrayValues = [];
     const value1 = arrayValues.push(prompt("Enter value1 for comparison on equality"));
     const value2 = arrayValues.push(prompt("Enter value2 for comparison equality"));
     return arrayValues;
  };

  function verifyValues(arrayValues) {
    if (arrayValues[0] === null || arrayValues[1] === null) {
      console.log("Goodbye");
      return;
    }
    return arrayValues;
  }

  const makeComparison = function(values, checkedValues) {
      var dataComparison  = checkedValues(values);
    if (!dataComparison) {
      return;
    }
    dataComparison[0] === dataComparison[1] ?
      console.log("Values are equal"):
      console.log("Values are not equal");

  };
  return makeComparison(makeValues(), verifyValues);
}

//=====================================================

// Task 5
function addUnitInArray() {
    const fillValues = function() {
        const values = prompt("Enter you values separated by commas", "1, 2, Odessa, etc");
        return values;
    };

    function checkedValues (value) {
        if (value === null) return;
        return value;
    }

    const makeArray = function(value, checked) {
        const data = checked(value);
        if (!data) return;
        let arr = data.split(",");
        arr.map(function(value, i, arr) {
           arr[i] = Number.isFinite(parseInt(value)) ? parseInt(value) : value;
        });
        return arr;
    };

    function addingUnit() {
        var arr = makeArray(fillValues(), checkedValues);
        for (var i = 0; i < arr.length; arr[i++]+=1);
        return arr;
    }

    function showArray(arr) {
        console.groupCollapsed();
        arr.forEach(function(value) {
            console.log("value = " + value);
        });
        console.groupEnd();
        return arr;
    }

    return showArray(addingUnit());
}

//=====================================================

// Task 6

function compareMirrorValues () {
    const makeValues = function() {
        let arr = [];
        arr.push(prompt("Enter first values for comparison"));
        arr.push(prompt("Enter second values for comparison"));
        return arr;
    };

    function verifyValues (arr) {
        const value1 = arr[0].split("");
        const value2 = arr[1].split("");
          var result = value1.every(function (value, i, arr) {
              return parseInt(value) === parseInt(value2[value2.length-1-i])});
        if (result) return console.log("Values are equal");
        return console.log( "Values are not equal")
    }

    return verifyValues(makeValues());
}

//=====================================================























