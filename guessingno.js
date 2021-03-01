//creat number
var secretnumber = 4;
//ask user to guess
var stringguess =prompt("Guess a number");
var guess = Number(stringguess);

//check if guess right
if(guess === secretnumber)
{
    alert("YOU GOT IT RIGHT");
}
//OTHERWOSE ,YOU GOT IT WRONG
else if(guess > secretnumber )
{
    alert("Too HIgh ,Guess again");
}
else
{
    alert("Too low,Guess again");
}