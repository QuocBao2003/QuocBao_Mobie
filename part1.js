// Cau 1
console.log('Chaparter 1')
function BMI(mass,height){
    return mass / (height * height);
}

function markHigherBMI(massMarks,heighMarks,massJohn,heightJohn){
    return BMI(massMarks,heighMarks) > BMI(massJohn,heightJohn)
}
console.log("Chi so BMI cua Marks",BMI(78,1.69));
console.log("Chi so BMI cua jOHN",BMI(92,1.95));
console.log(markHigherBMI(78,1.69,92,1.95));
console.log(markHigherBMI(95,1.88,85,1.76));

// Cau 2


let BMIMarks = BMI(78,1.69);
let BMIJohn = BMI(92,1.95);

if(BMIMarks>BMIJohn){
    console.log("Mark's  BMI{"+BMIMarks+"} is higher than John's{"+BMIJohn+"}");
}else{
    console.log("John's{"+BMIJohn+"} BMI is higher than Mark's{"+BMIMarks+"}");
}

// Cau 3
const [team1,team2,team3,team4,team5,team6]=[
    {name :'Dolphins',score1 : 96,score2 : 108,score3 : 89},
    {name :'Koalas',score1 : 88,score2 : 91,score3 : 110},
    {name :'Dolphins',score1 : 97,score2 : 112,score3 : 101},
    {name :'Koalas',score1 : 109,score2 : 95,score3 : 123},
    {name :'Dolphins',score1 : 97,score2 : 112,score3 : 101},
    {name :'Dolphins',score1 : 109,score2 : 95,score3 : 106},
]



function dtb(team) {
    const totalScore = team.score1 + team.score2 + team.score3;
    return totalScore / 3;
  }
  
  function findWinner(team1, team2) {
    const team1Average = dtb(team1);
    const team2Average = dtb(team2);
  
    if (team1Average > team2Average && team1Average >= 100) {
      return team1.name;
    } else if (team2Average > team1Average && team2Average >= 100) {
      return team2.name;
    } else if (team1Average === team2Average && team1Average >= 100 && team2Average >= 100) {
      return "It's a draw!";
    } else {
      return "No team wins the trophy.";
    }
  }
  
  console.log('Regular match:');
  console.log(findWinner(team1, team2));
  console.log('Bonus 1:');
  console.log(findWinner(team3, team4));
  console.log('Bonus 2:');
  console.log(findWinner(team5, team6));

  //Cau4
  function totalbill(bill){
    const tip = bill>=50 && bill <= 300 ? bill*0.15 : bill*0.2;
    const total = bill + tip;
    return `The bill was ${bill},the tip was ${tip},and the total value ${total}`;
  }
console.log(totalbill(275));
console.log(totalbill(40));
console.log(totalbill(430)); 







