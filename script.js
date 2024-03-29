var n1=Math.floor((Math.random()*6)+1);

var n2=Math.floor((Math.random()*6)+1);
//my method using switchcase
switch(n1)
{
    case 1:
        document.querySelector(".img1").setAttribute("src","./images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src","./images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src","./images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src","./images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");
        break;
    default:
        document.querySelector(".img1").setAttribute("src","./images/dice1.png");

}
//angela's method by calculating the source of image everytime
var imgadd="./images/dice"+n2+".png";
document.querySelector(".img2").setAttribute("src",imgadd);

if(n1>n2){
    document.querySelector("h1").innerHTML=("🚩Player 1 wins!");

}
else if(n1<n2){
    document.querySelector("h1").innerHTML=("Player 2 wins!🚩");

}
else if(n1===n2){
    document.querySelector("h1").innerHTML=("DRAW!");

}
