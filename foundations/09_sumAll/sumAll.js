const sumAll = function(min, max) {
   let sum = 0; 
   const low = Math.min(min, max);
   const high = Math.max(min, max);

   if (min < 0 || max < 0) {
    return "ERROR";
   }

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR"
   }

   for (let i = low; i <= high; i++) {
    sum += i;
    }
   return sum;
};


// Do not edit below this line
module.exports = sumAll;
