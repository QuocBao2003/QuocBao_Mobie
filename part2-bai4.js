const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
const tip=[];
const totals=[];

function calcTip(bill){
  return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
}

for(let i=0; i<bills.length; i++){
  tip.push(calcTip(bills[i]));
  totals.push(bills[i] + tip[i]);
}

function calcAverage(arr){
  let sum =0;
  for(let i=0;i<arr.length; i++){
    sum += arr[i];
  }
  return sum/arr.length;
}

const avergeTotal = calcAverage(totals);
console.log(avergeTotal)