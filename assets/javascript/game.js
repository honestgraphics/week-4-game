// set default wins and looses 
var wins = 0;
var losses = 0;
var userScore = 0;
//setup crystal variables
var crystal1 = "./assets/images/1.png";
var crystal2 = "./assets/images/2.png";
var crystal3 = "./assets/images/3.png";
var crystal4 = "./assets/images/4.png";
//setup crystal array
var crystalArray = [
  crystal1,
  crystal2,
  crystal3,
  crystal4,
];
//set up vars for random numbers
var num1 = Math.floor((Math.random() * 12) + 1);
var num2 = Math.floor((Math.random() * 12) + 1);
var num3 = Math.floor((Math.random() * 12) + 1);
var num4 = Math.floor((Math.random() * 12) + 1);
//set up numArray
var numArray = [num1, num2, num3, num4];



$(document).ready(function(){
  console.log('hi');

  //function that happens when game starts
  function start () {
    var startButton = "startButton";
    //add attributes to images and place them on html pg
    for (var i=0; i < crystalArray.length; i++){
      var image = $('<img>');
      image.addClass("crystal");
      image.attr("src", crystalArray[i]);
     // image.attr("id", "crystal");
      image.attr("num", numArray[i]);
      console.log(image);
      $("#crystalDiv").append(image);
      

      }
    $('#startButton').hide();
    //create target number & assign random number between 1-120
    var targetNum = Math.floor((Math.random() * 12) + 1);
    //assign total-score attribute of targetNum var to targetNum id in html
    $('#targetNum').attr('total-score', targetNum);
    $('#targetNum').html(targetNum).show();
    $('#userScoreWrapper').show();
  }

  function reset() {

    $("#crystalDiv").each( function(){
      var randonCrystalNumber = Math.floor((Math.random() * 12) + 1);
      $(this).attr('num');
    });
   
    //create target number & assign random number between 1-120
    var targetNum = Math.floor((Math.random() * 120) + 1);
    //assign total-score attribute of targetNum var to targetNum id in html
    $('#targetNum').attr('total-score', targetNum);
   
  }
  //call start function for start button click
    $( "#startButton" ).click(function() {
      start();
      });

      $("body").on( 'click',  '#crystalDiv img', function() {
        
        var localUserScore = parseInt($(this).attr('num'));
        var targetScore = parseInt( $('#targetNum').attr('total-score') );

        userScore = userScore+ localUserScore;

        // set current user score
        $('#userScore span#totalScore').html( userScore );
console.log('target', targetScore);
        // 
        if( userScore > targetScore ){
          console.log('losses');
          $('#userScore span#result').html( 'You Lose!!!' );
          losses = losses+1;

          //re-generate user stats
          generateStats();
          
          // reset user score
          userScore = 0;
          //reset targetScrore and image  random number
          reset();
        }
        else if( userScore == targetScore ){
          console.log('wins');
          $('#userScore span#result').html( 'You Win!!!' );
          wins = wins+1;

          //re-generate user stats
          generateStats();

          // reset user score
          userScore = 0;
          //reset targetScrore and image  random number
          reset();
        }
        else{
          console.log('play again');
        }
        

      });

      function generateStats(){
        $('#userStats #userWins span').html( wins );
        $('#userStats #userLosses span').html( losses );
      }
  //
    


});






