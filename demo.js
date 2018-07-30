


var scores,activePlayer,roundScore,gamePlaying;
var currentClass = '';      

init();


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        document.querySelector('.btn-hold').disabled = true;
        document.querySelector('.btn-new').disabled = true;
         var cube = document.querySelector('.cube');
         cube.style.webkitAnimationName = 'spin';
         cube.style.animationDuration = '3s';
         var scene = document.querySelector('.scene');
         scene.style.display = 'block';
        setTimeout(function(){
          
        var dice = Math.floor(Math.random() * 6) + 1;
        var showClass = 'show-' + dice;
        if (currentClass) {
            cube.classList.remove( currentClass );
        }
        cube.classList.add(showClass);
        currentClass = showClass;
            document.querySelector('.btn-hold').disabled = false;
        document.querySelector('.btn-new').disabled = false;
        
        if(dice !== 1){
            roundScore += dice;
            document.getElementById('current-'+activePlayer).textContent = roundScore;
        } else {
            setTimeout(nextPlayer,1000);
        }
        cube.style.webkitAnimationName = '';
        },8000);
        var sounds = document.getElementsByTagName('audio');
        for(i=0; i<sounds.length; i++){
            sounds[i].play(); 
        }
      
    }
     
 });

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        
        scores[activePlayer] += roundScore;
        document.getElementById('score-' +activePlayer).textContent = scores[activePlayer];
        
        if(scores[activePlayer] >= 20){
           
            document.getElementById('current-' + activePlayer).textContent = '0';
            document.getElementById('name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
            document.querySelector('.player-' +activePlayer+ '-panel').classList.add('winner');
            var currentPlayer = activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            document.getElementById('name-' +currentPlayer).textContent = 'Loser';
            document.querySelector('.player-' +currentPlayer+ '-panel').classList.remove('active');
            document.querySelector('.player-' +currentPlayer+ '-panel').classList.add('loser');
            var sounds = document.getElementsByTagName('audio');
            for(i=0; i<sounds.length; i++){
               sounds[i].pause(); 
            }
            var scene = document.querySelector('.scene');
            scene.style.display = 'none';
            gamePlaying = false;
    } else{
        nextPlayer();
    }
        
    }
    
    
});

document.querySelector('.btn-new').addEventListener('click',init);

function nextPlayer() {
   
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    var scene = document.querySelector('.scene');
    scene.style.display = 'none';
    
   
}

function init(){
    
   
    var sounds = document.getElementsByTagName('audio');
    sounds.currentTime = 0;
    for(i=0; i<sounds.length; i++){
        sounds[i].currentTime = 0;
        sounds[i].play(); 
    }
    activePlayer = 0;
    scores = [0,0];
    roundScore = 0;
    gamePlaying = true;
    
    
   
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('loser');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('loser');
    
    var scene = document.querySelector('.scene');
    scene.style.display = 'none';
    
    
    
    
}


 












    
    
    
