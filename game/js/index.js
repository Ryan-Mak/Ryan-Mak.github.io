$(document).ready(function() {
  //action goes here
  var score = 0;
  var timeLeft = 30;

  $('#scoreBox').hide();
  $('.enemyPhoto').hide();
  $('#resetButton').hide();
  $('#timeLeftBox').hide();
  $('#quitButton').hide();
  $('.enemyBox').hide();

  $('#playLink').click(function() {
    $('#Title').hide();
    $('#Name').hide();
    $('#rules').hide();
    $('#copyright').hide();
    $('#playButton').hide();
    $('.enemyPhoto').show();
    $('#scoreBox').show();
    $('#resetButton').show();
    $('#timeLeftBox').show();
    $('#quitButton').hide();
    $('.enemy').show();
    $('.enemyBox').show();
    $('body').css('cursor', 'url(http://www.cursor.cc/cursor/509/53/cursor.png), auto');
    timeLeft = 30;
    document.getElementById('time').innerHTML = timeLeft;
    countdown();
  });

  $('#resetButton').click(function() {
    //for reset button  
    score = 0;
    document.getElementById('points').innerHTML = score;
    $('#scoreBox').hide();
    $('.enemyPhoto').hide();
    $('#resetButton').hide();
    $('#Title').show();
    $('#Name').show();
    $('#rules').show();
    $('#copyright').show();
    $('#playButton').show();
    $('#timeLeftBox').hide();
    $('#quitButton').hide();
    $('.enemyBox').hide();
    timeLeft= 30;
    location.reload();
     document.getElementById('time').innerHTML = timeLeft;
  });

  $('.enemyPhoto').click(function() {
    //for enemy clicking  
    score = score + 1;
    document.getElementById('points').innerHTML = score;
    $(this).hide();

    setTimeout(function() {
      $('.enemyPhoto').show();
    }, 500);
  });

  function countdown() {
    var gameOver = setInterval(function() {
      document.getElementById('time').innerHTML = timeLeft;

      if (timeLeft == 0) {
        clearInterval(gameOver);
        alert("Time's up! You scored " + score);
        $('#scoreBox').hide();
        $('.enemyPhoto').hide();
        $('#resetButton').hide();
        $('#timeLeftBox').hide();
        $('#quitButton').hide();
        $('.enemyBox').hide();
        $('#Title').show();
        $('#Name').show();
        $('#rules').show();
        $('copyright').show();
        $('#playButton').show();
        score = 0;
        document.getElementById('points').innerHTML = score;


      } else {
        timeLeft--;
      }
    }, 1000);
  }
  
  //move #heavy1
  function moveHeavy1() {
    $('#heavy1').animate({left: "+=100"}, 1000, moveHeavy1Left);
  }
  
  function moveHeavy1Left(){
    $('#heavy1').animate({left: "-=100"}, 1000, moveHeavy1);
  }
 
  moveHeavy1();
  
   //move #heavy2
  function moveHeavy2() {
    $('#heavy2').animate({left: "+=100"}, 1000, moveHeavy2Left);
  }
  
  function moveHeavy2Left(){
    $('#heavy2').animate({left: "-=100"}, 1000, moveHeavy2);
  }
 
  moveHeavy2();
  
  //move heavy3
  function moveHeavy3() {
    $('#heavy3').animate({left: "+=100"}, 1000, moveHeavy3Left);
  }
  
  function moveHeavy3Left(){
    $('#heavy3').animate({left: "-=100"}, 1000, moveHeavy3);
  }
 
  moveHeavy3();
  
   
  //move heavy 4
  function moveHeavy4() {
    $('#heavy4').animate({left: "+=100"}, 1000, moveHeavy4Left);
  }
  
  function moveHeavy4Left(){
    $('#heavy4').animate({left: "-=100"}, 1000, moveHeavy4);
  }
 
  moveHeavy4();
  
    //move heavy 5
  function moveHeavy5() {
    $('#heavy5').animate({left: "+=100"}, 1000, moveHeavy5Left);
  }
  
  function moveHeavy5Left(){
    $('#heavy5').animate({left: "-=100"}, 1000, moveHeavy5);
  }
 
  moveHeavy5();
  
   //move heavy 6
  function moveHeavy6() {
    $('#heavy6').animate({left: "+=100"}, 1000, moveHeavy6Left);
  }
  
  function moveHeavy6Left(){
    $('#heavy6').animate({left: "-=100"}, 1000, moveHeavy6);
  }
 
  moveHeavy6();
  
  //move heavy7
  function moveHeavy7() {
    $('#heavy7').animate({left: "+=100"}, 1000, moveHeavy7Left);
  }
  
  function moveHeavy7Left(){
    $('#heavy7').animate({left: "-=100"}, 1000, moveHeavy7);
  }
 
  moveHeavy7();
  
  //move heavy8
  function moveHeavy8() {
    $('#heavy8').animate({left: "+=100"}, 1000, moveHeavy8Left);
  }
  
  function moveHeavy8Left(){
    $('#heavy8').animate({left: "-=100"}, 1000, moveHeavy8);
  }
 
  moveHeavy8();
  
 //move heavy9
  function moveHeavy9() {
    $('#heavy9').animate({left: "+=100"}, 1000, moveHeavy9Left);
  }
  
  function moveHeavy9Left(){
    $('#heavy9').animate({left: "-=100"}, 1000, moveHeavy9);
  }
 
  moveHeavy9();
    
  //move heavy10
  function moveHeavy10() {
    $('#heavy10').animate({left: "+=100"}, 1000, moveHeavy10Left);
  }
  
  function moveHeavy10Left(){
    $('#heavy10').animate({left: "-=100"}, 1000, moveHeavy10);
  }
 
  moveHeavy10();
  
 

}); //do not remove, closing brackets