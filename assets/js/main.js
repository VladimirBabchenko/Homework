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
    arrayNumbers.forEach(function(value, i, arr) {
      arr[i] = parseInt(value);
    });
      return arrayNumbers;
  }

  var findAverageValue = function(values, verifyValues) {
    var arrayValues = makeArrayNumbers(values, verifyValues), average, summeryValue = null;
    arrayValues.map(function(value) {
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
        arr.forEach(function(value, i, arr) {
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
        const value1 = arr[0];
        const value2 = arr[1];
        for (var i = 0; i < value1.length; i++) {
           if (value1[i] !== ((value2[value2.length-1-i]))) {
               console.log("Values are not equal");
               return;
           }
        }
        console.log("Values are equal");
    }

    return verifyValues(makeValues());
}

function makeObject(obj) {
    if (!obj || typeof obj !== "object") return;
        obj.maps = function (value, i, arr) {

    }
}

