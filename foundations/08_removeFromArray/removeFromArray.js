const removeFromArray = function(array, ...items) {
    const newArray = [];
    array.forEach(part => {
        if (!items.includes(part))
            newArray.push(part);
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
