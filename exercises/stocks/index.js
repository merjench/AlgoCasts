// Problem:
// The prediction of a particular stock for a period is given to you
// and you want to maximize the profit of that stock by buying it once and selling it once in tht period.


// ---------------------------Solution 3---------------------------------------------------------///

var array = [4, 9, 1, 10, 13, 0, 10]

// you want to find two times, ONE to buy stock and one to sell, so we maximize our profite:
// like so:  max(sellingPrice - buyingPrice)
// by looking at above numbers we can see that we can't sell before we actually buy.
// hence we can't buy it at $0 and then sell it at $13. If we buy it at $0 then we can only sell it at $10

function getMaxProfit(array) {
	var minIdx = 0;
    var maxIdx = 1;
    var currMin = 0;
    var maxProfit = 0;

    if(array.length < 2) {
        throw new Error("Need atleast two time periods to be profitable!");
    }

    for(var i = 1; i < array.length; i++) {

        // new current min.
        if(array[i] < array[currMin]) {
        	currMin = i;
        }

        // new best profit
        if(array[maxIdx] - array[minIdx] < array[i] - array[currMin]) {
                maxIdx = i;
            	minIdx = currMin;
        }

    }

    maxProfit  = array[maxIdx] - array[minIdx];
    return maxProfit;
}

var array1 = [10, 7, 5, 8, 11, 9, 1];
var array2 = [1];
console.log(getMaxProfit(arr1));


/////////-----------------------------------Solution 1------------------------------////

//Provided this solution

function maxProfit(price) {
  let maxProfit = 0
  for (let i = 0; i < price.length; i++){
    for (let k = 0; k < price.lenght; k++) {
      let earlierNums = Math.min(i, k)
      let finalNums = Math.min(i, k)

      let initialPrice = price[earlierNums]
      let finalPrice = price[finalNums]

      let profite = finalPrice - initialPrice;

      maxProfit = Math.max(maxProfit, profite)
    }
  }
  return maxProfit
}
