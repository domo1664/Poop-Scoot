$(document).ready(function(){
    //Random function used to get a random number between the range chosen as the parameters.
    function randomRange(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    //Variables used to store information that is global to all functions.
    var $player = $('#player');
    var $level = $('#level');
    var $score = $('#score');
    var $body = $('body');
    var $start = $('#start');
    var $title = $('#title');
    var $restart = $('#restart');
    var speed = 1.7;
    var cloudSpeed1 = 0.5;
    var cloudSpeed2 = 0.3;
    var jumping = false;
    var score = 0;
    var scoreDisplay = 0;
    var randPoop = randomRange(1000,2000);
    var randFly = randomRange(2500, 4500);
    var randCloud = randomRange(4000,5000);
    var managerCaller;

    //Creates poop on screen with randPoop as the duration
    var poopCreator = setInterval(function(){
        $level.append('<div class="poop">');
    }, randPoop);
    //Creates flies on screen with randFly as the duration
    var flyCreator = setInterval(function(){
        $level.append('<div class="fly">');
    }, randFly);
    //Creates clouds on screen with randCloud as the duration
    var cloud1Creator = setInterval(function(){
        $level.append('<div class="sky1">');
    }, randCloud);
    //Creates clouds on screen with randCloud as the duration
    var cloud2Creator = setInterval(function(){
        $level.append('<div class="sky2">');
    }, randCloud);
    //If you press the spacebar it animates the players margins
    $(window).keydown(function(e) {
        if (e.keyCode === 32) {
            $player.animate({
                'bottom': '30%'
            },400);
        }
    });
    //If you release the spacebar it animates the players margins to its default
    $(window).keyup(function(e) {
        if (e.keyCode === 32) {
            $player.animate({
                'bottom': '0'
            },400);
        }
    });
    //Give the game a grayscale filter
    $level.addClass('gray');
    //The heart and soul of poop scoot
    function gameManager() {
        var $poop = $('.poop');
        var $fly = $('.fly');
        var $cloud1 = $('.sky1');
        var $cloud2 = $('.sky2');
        var playerRight = $player.offset().left + $player.outerWidth();
        var playerBtm = $player.offset().top + $player.outerHeight();
        var playerTop = $player.offset().top;
        var poopBtm = $poop.offset().top + $poop.outerHeight();
        var poopLeft = $poop.offset().left;
        var poopRight = $poop.offset().left + $poop.outerWidth();
        var flyBtm = $fly.offset().top + $fly.outerHeight();
        var flyLeft = $fly.offset().left;
        var flyRight = $fly.offset().left + $fly.outerWidth();
        var cloud1Right = $cloud1.offset().left + $cloud1.outerWidth();
        var cloud2Right = $cloud2.offset().left + $cloud2.outerWidth();
        var wndoLeft = $body.offset().left;
        //The score was too high multiplying the score by 0.01 reduces the number
        score++;
        scoreDisplay = Math.floor(score * 0.01);
        $score.text('Score: ' + scoreDisplay);
        //Adds and removes filters based on the score
        if(scoreDisplay>20){
            $level.removeClass('gray');
            $level.addClass('sepia');
            $body.addClass('orange');
        }
        //Adds and removes filters based on the score
        if(scoreDisplay>40){
            $level.removeClass('sepia');
            $body.removeClass('orange');
        }
        //Adds and removes filters based on the score
        if(scoreDisplay>60){
            $level.addClass('hue');
            $body.addClass('blue');
        }
        //Adds and removes filters based on the score
        if(scoreDisplay>80){
            $level.removeClass('hue');
            $body.removeClass('blue');
            $level.addClass('invert');
            $body.addClass('black');
        }
        //Animate all side scrolling objects at varying speeds;
        $poop.animate({left : '-=' + speed + '%'},35);
        $fly.animate({left : '-=' + speed + '%'},35);
        $cloud1.animate({left : '-=' + cloudSpeed1 + '%'},35);
        $cloud2.animate({left : '-=' + cloudSpeed2 + '%'},35);
        //Collision detection (My Pride and Joy)
        if (((playerRight > poopLeft) && (playerBtm === poopBtm)) ||
           ((playerRight > flyLeft) && (playerTop < flyBtm) &&
           (playerRight < flyRight))){
            setInterval(function(){
                $poop.stop(); //Stops animation
                $fly.stop();  //Stops animation
                $player.stop(); //Stops animation
                $cloud1.stop(); //Stops animation
                $cloud2.stop(); //Stops animation
                clearInterval(poopCreator); //Stop Interval
                clearInterval(flyCreator); //Stop Interval
                clearInterval(managerCaller); //Stop Interval
                clearInterval(cloud1Creator); //Stop Interval
                clearInterval(cloud2Creator); //Stop Interval
            },0);
            //Display restart button to the screen
            $restart.css('display','inline-block');
        }
        //Deletes object when off the screen
        if(wndoLeft > poopRight){
            $poop.first().remove();
        }
        //Deletes object when off the screen
        if(wndoLeft > flyRight){
            $fly.first().remove();
        }
        //Deletes object when off the screen
        if(wndoLeft > cloud1Right){
            $cloud1.first().remove();
        }
        //Deletes object when off the screen
        if(wndoLeft > cloud2Right){
            $cloud2.first().remove();
        }
    }
    //Button that starts the game by calling the gameManager
    $start.click(function(){
      $start.css('display','none');
      $title.css('display','none');
      managerCaller = setInterval(gameManager,0);
    });
    //Restarts the entire page from the cache
    $restart.click(function(){
      location.reload();
    });
});
