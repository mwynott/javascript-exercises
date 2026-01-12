const sumAll = function(min, max) {
   let sum = 0; 
   const low = Math.min(min, max);
   const high = Math.max(min, max);

   for (let i = low; i <= high; i++) {
    sum += i;
    }
   return sum;
};


// Do not edit below this line
module.exports = sumAll;
