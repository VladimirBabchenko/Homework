var fields = [], resources = [];
function makeField (fieldId, resourceName, readinessForHarvest, growthInd, fieldTiredInd, sowed) {
    var obj = {
        fieldId: fieldId,
        resourceName: resourceName,
        readinessForHarvest: readinessForHarvest,
        growthIndex: growthInd,
        fieldTired: fieldTiredInd,
        sowed: sowed
    };
    return fields.push(obj);
}

function checkForHarvest(ind) {
    return checkInd(ind) ? fields[ind].readinessForHarvest :
        fields.every(function(field) { return field.readinessForHarvest });
}

function getFieldsReadyForHarvest() {
    return fields.filter(function(field) {
        return field.readinessForHarvest === true;
    })
}

function getResultHarvesting(amountResource, ind) {
    if (!checkArg(arguments) && !checkInd(ind)) return;
    return fields[ind].growthIndex * amountResource;
}

function checkInd(ind) {
    return isFinite(parseInt(ind)) && ind < fields.length && ind >= 0;
}

function checkArg(arg) {
    return Number.isFinite(parseInt(arg)) && arg >= 0;
}

function checkForSow(ind) {
    return checkInd(ind) ? fields[ind].fieldTired < 1 :
        fields.every(function(field) { return field.fieldTired < 1 })
}

function getFieldsReadyForSow() {
    return fields.filter(function(field) {
        return field.fieldTired > 0;
    })
}

function harvestingProcess() {
    var fieldsReady = getFieldsReadyForHarvest();
    fieldsReady.forEach(function(field) {
        field.resourceName = null;
        field.readinessForHarvest = false;
        field.fieldTired += 0.25;
        field.sowed = false;
        resources.push(field.resourceName);
    })
}

function sowingProcees(ind, resName, growthIndex) {
    if (!checkArg(ind)) return;
    fields[ind].resourceName = resName;
    fields[ind].growthIndex = growthIndex;
    fields[ind].fieldTired = 0;
    fields[ind].sowed = true;
}


console.log(makeField("1a", "wheat", true, 1.25, 0.5, true));
console.log(makeField("1b", "popcorn", true, 1.45, 0.75, false));
// console.log(fields);
// console.log(checkForHarvest());
// console.log(getResultHarvesting(1000, 1));
// console.log(checkForSow(0));
// console.log(getFieldsReadyForSow());
// console.log(getFieldsReadyForHarvest());
// harvestingProcess();
// console.log(fields, "\n", resources);
// sowingProcees(0, "rean", 1,8);
// console.log(fields);