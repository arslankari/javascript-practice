
const calcAge = function (birthYear){
  return 2026 - birthYear;
}

const yearsTillRetirment = function (birthYear , firstName){
  const age = calcAge(birthYear);
  const retirement = 65 - age ;

  if(retirement > 0 ){
      return `${firstName} retires in ${retirement} years`;
      }
    else
      {
      console.log(`${firstName} has already retired !!`);
      return -1;
    }
}

console.log(yearsTillRetirment(2005 , "Arsalan"));
console.log(yearsTillRetirment(1947 , "Karim"));


