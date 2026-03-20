// for(let i=0;i<=3;i++){
let i=0
while (i<=3){
    i=i+1
    let playerMove=prompt("Enter Your Choice: Rock, Paper or Scissors");
    let x=Math.random();
    let computerMove;
    if (x<0.34){
        computerMove='Rock';
    }else  if (x<=0.67){
        computerMove="Paper";
    }else{
        computerMove='Scissors'
    }
    if (playerMove===computerMove){
        alert(`It's a Tie! Both chose ${playerMove}`);
    } else if (playerMove==="Rock"){
        if (computerMove==="Paper"){
            alert("You Lose! Computer chose Paper");
        } else {
            alert("You Win! Computer chose Scissors");
        }
    } else if (playerMove==="Paper"){
        if (computerMove==="Scissors"){
            alert("You Lose! Computer chose Scissors");
        } else {
            alert("You Win! Computer chose Rock");
        }
    } else if (playerMove==="Scissors"){
        if (computerMove==="Rock"){
            alert("You Lose! Computer chose Rock");
        } else {
            alert("You Win! Computer chose Paper");
        }
    } else {
        alert("Invalid Input! Please choose Rock, Paper or Scissors");
    }
}
// if (x<0.34){
//     computerMove="Rock";
//     if (playerMove=='Paper'){
//         alert("You Won")
//     }else if(playerMove=='Scissors'){
//         alert("Computer Won")
//     }else{
//         alert("Its a Tie!!")
//     }
// } else  if (x<=0.67){
//     computerMove="Paper";
//     if (playerMove=='Rock'){
//         alert("Computer Won")
//     }else if(playerMove=='Scissors'){
//         alert("You Won")
//     }else{
//         alert("Its a Tie!!")
//     }
// }else if(x<=1){
//     computerMove="Scissors";
//     if (playerMove=='Rock'){
//         alert("You Won")
//     }else if(playerMove=='Paper'){
//         alert("Computer Won")
//     }else{
//         alert("Its a Tie!!")
//     }
// }else{
//     alert("Wrong Input")
// }
// rock paper clicking game
