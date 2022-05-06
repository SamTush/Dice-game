var randomOne = Math.floor((Math.random()*6)+1);
var randomTwo = Math.floor((Math.random()*6)+1);

switch (randomOne) {
    case 1:
        document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.getElementsByClassName('img1')[0].setAttribute('src', 'images/dice2.png');
        break;
 
    case 3:
        document.getElementsByClassName('img1')[0].setAttribute('src', 'images/dice3.png');
        break;
 
    case 4:
        document.getElementsByClassName('img1')[0].setAttribute('src', 'images/dice4.png');
        break;
 
    case 5:
        document.getElementsByClassName('img1')[0].setAttribute('src', 'images/dice5.png');
        break;
 
    case 6:
        document.getElementsByClassName('img1')[0].setAttribute('src', 'images/dice6.png');
        break;
            
    default:
        break;
}

switch (randomTwo) {
    case 1:
        document.getElementsByClassName('img2')[0].setAttribute('src', 'images/dice1.png');
        break;
    case 2:
        document.getElementsByClassName('img2')[0].setAttribute('src', 'images/dice2.png');
        break;
 
    case 3:
        document.getElementsByClassName('img2')[0].setAttribute('src', 'images/dice3.png');
        break;
 
    case 4:
        document.getElementsByClassName('img2')[0].setAttribute('src', 'images/dice4.png');
        break;
 
    case 5:
        document.getElementsByClassName('img2')[0].setAttribute('src', 'images/dice5.png');
        break;
 
    case 6:
        document.getElementsByClassName('img2')[0].setAttribute('src', 'images/dice6.png');
        break;
            
    default:
        break;
}

if(randomOne > randomTwo){
    document.getElementsByClassName("h1")[0].innerHTML = '<i class="fa fa-trophy" aria-hidden="true"></i> Player 1 Wins';
    document.getElementsByClassName("h1")[0].classList.add("winner");
}else if (randomOne < randomTwo) {
    document.getElementsByClassName("h1")[0].innerHTML = 'Player 2 Wins <i class="fa fa-trophy" aria-hidden="true"></i> ';
    document.getElementsByClassName("h1")[0].classList.add("winnerTwo");
}else{
    document.getElementsByClassName("h1")[0].innerHTML = '<i class="fa fa-trophy" aria-hidden="true"></i> Draw! <i class="fa fa-trophy fa-xlg" aria-hidden="true"></i>';
    document.getElementsByClassName("h1")[0].classList.add("winnerTwo");
}



