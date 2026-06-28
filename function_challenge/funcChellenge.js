
const calcAverage = (a , b , c) => (a + b + c)/3 ;

// Data test 1
let scoreDolphins = calcAverage(44, 23 , 71)
let scoreKoalas = calcAverage(65, 54, 49)


const checkWinner = (averageDolphin , averageKoalas) =>{

    if (averageDolphin >= 2 * averageKoalas) {
         console.log(`Dolphin win (${averageDolphin} vs. ${averageKoalas})`)
    }
    else if(averageKoalas >= 2 * averageDolphin ){
        console.log(`Koalas win (${averageKoalas} vs. ${averageKoalas})`)
    }
    else{
        console.log("Nither of them won");
    }
} 

checkWinner(scoreDolphins, scoreKoalas);

// Data test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins , scoreKoalas);

const calcAge = function(birthYear){
    return 2026 - birthYear ;
} 



//Playing with Arrays.  
const years = [1919, 2003 , 2005 , 2020 ,1991];

 const ages = []
for (const year of years) {
    
    ages.push(calcAge(year))
    
}
console.log(ages)

