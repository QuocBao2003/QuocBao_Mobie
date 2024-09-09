const [user1,user2]=[
    {name :'Marks',mass:78,height :1.69},
    {name :'John',mass:92,height :1.95},
  ]
  
  function BMI2(mass,height){
    return mass / (height * height);
  };
  
  if(BMI2(user1.mass,user1.height)>BMI2(user2.mass,user2.height)){
    console.log(`${user1.name} (${user1.mass},${user1.height}) is higher than ${user2.name} (${user2.mass},${user2.height})  `);
  }else {
    console.log(`${user2.name} (${user2.mass},${user2.height}) is higher than ${user1.name} (${user1.mass},${user1.height})  `);
  }
  