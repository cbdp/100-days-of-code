const moneyNames = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  let output = { status: null, change: [] };
  let change = cash - price;
 
// Transform cash available array into an object
/*
    let cashInDraw = Number.parseFloat(cid
        .map(x => x.filter(n => isNumber(n)))
        .flat()
        .reduce((a, b) => a + b, 0)
        .toFixed(2));
        */
    
  let cashInDraw = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  if (cashInDraw.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  };
/////////////////////////////////////////////////

  let change_arr = moneyNames.reduce(function(acc, curr) {
    let usage = 0;
    while (cashInDraw[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      cashInDraw[curr.name] -= curr.val;
      usage += curr.val;
      change = Number(change.toFixed(2));
    };
    // Add moneyName to the output if used
    if (usage > 0) {
      acc.push([curr.name, usage]);
    };
    return acc;
  }, []); 
    
/////////////////////////////////////////////////

// Other eventualities
  if (cashInDraw.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  };
 
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  };
     
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}

// Test area
checkCashRegister(19.5, 20.0, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90.0],
  ["FIVE", 55.0],
  ["TEN", 20.0],
  ["TWENTY", 60.0],
  ["ONE HUNDRED", 100.0]
]);