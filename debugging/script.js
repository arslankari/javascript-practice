 

//  const measureKalvin = function(){
//     const measurement = {
//         type  : "Temp",
//         unit  : "celsius",
//         value : Number  (prompt("temperature in calsius :"))
//     };

//     console.table(measurement);

//     const kalvin = measurement.value  + 273 ;
//     return kalvin ; 
//  }

//  console.log(measureKalvin());

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];


const printForecast = function (arr) {
    let str = '';
    for(let i = 0; i < arr.length ; i++){
        str += `${arr[i]}*C in ${i + 1} days ... `
    }
    console.log("... " + str );
}


printForecast(data1);
printForecast(data2);

