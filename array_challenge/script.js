function calcTip (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 ;
}

const bills = [125, 555, 44];

const tips = [];

for(const bill of bills) {
    tips.push(calcTip(bill));
}

console.log("Tips :",tips);

const total = [];
for(let i=0 ; i < bills.length ; i++){
    total.push(bills[i]+ tips[i])
}
console.log("Total :",total)