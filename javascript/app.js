class Ship{
  constructor(name,hull,firepower,accuracy){
    this.name=name;
    this.hull=hull;
    this.firepower=firepower;
    this.accuracy=accuracy;
  }
  shoot(target){
    if (Math.random() < this.accuracy) {
      console.log(`${this.name} hit ${target.name}`);
       target.hull-=this.firepower;
  }
  else{
    console.log("Miss Fire");
  }

}
}
const getRandomStats=(num1,num2)=>{
if(num1>1 && num2>1){
  return Math.floor(Math.random() * num2) + num1;
}
else{
  return (Math.random() * (num2-num1) + num1).toFixed(1);
}
}
let game=true;
const playerOne= new Ship('USS Assembly',20,5,.7);

let alien=[];
for(let i=0;i<6;i++){
  alien[i]=new Ship(`alien`,getRandomStats(3,6),getRandomStats(2,4),getRandomStats(.6,.8));

}
let i=0;

  while(game==true){

    playerOne.shoot(alien[i]);
    if(alien[i].hull>0){
      alien[i].shoot(playerOne);
    }
    else{
        console.log(`${alien[i].name} is dead`);
        alien.splice(i,1);
        if(alien.length>0){
          console.log('You chose more aliens')//needs input for future

        }




    }
      if(playerOne.hull<=0){
        console.log("gameOver you died :(");
        game=false;
      }

        if(alien.length<=0){
          console.log('you killed all the aliens');
          game=false;
        }
      }
