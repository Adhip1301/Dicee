var n=Math.floor(Math.random()*6)+1;
var random1="dice"+n+".png";
var random11="images/"+random1;
document.getElementsByClassName("img1")[0].setAttribute("src",random11);

var n1=Math.floor(Math.random()*6)+1;
var random2="dice"+n1+".png";
var random22="images/"+random2;
document.getElementsByClassName("img2")[0].setAttribute("src",random22);

if(n>n1)
{
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(n1>n)
{
    document.querySelector("h1").innerHTML="player 2 wins";
}
else if(n==n1)
{
    document.querySelector("h1").innerHTML="Draw";
}