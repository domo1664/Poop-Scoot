###Techniques Used###
    -filters with transitions
    -keyframes animation via css
    -animations via jQuery
    -DOM manipulation via jQuery

###Approach###
    -Manipulated the margins of enemy objects to move them across the screen.
    -Use setInterval to continuously create objects to the screen.

###User Stories###
    -As a user I want to jump over poop and dodge birds
    -As a user I want a game that never ends and is really responsive
    -As a user I want the background of the game to change colors as the game progesses.

###MVP Description###
    -The MVP looks like boxes a black box for the player object.
    -Also a red box for all enemy objects, as well as, red boxes for the clouds.

###Planning Phase###
    -Wireframing and diving head first into the problems at hand.
    -Thinking and dreaming in code. (Lucid Dreaming)
    -In all seriousness asking, everyone for help and googling my thumbs off.

###Pseudo Code###
    -Create a start screen that starts the game.
    -Create a Player object
    -Create a score keeper
    -Spawn poop off the screen to be animated onto the screen.
    -Delete poop after scrolls pass the player object off the screen.
    -If player object collides with poop stop the game. Give an option to retry.
    -Spawn flies off the screen to be animated onto the screen.
    -Delete fly after scrolls pass the player object off the screen.
    -If player object collides with fly stop the game. Give an option to retry.
    -Score is calculated by the distance travel.
    -If you restart you score restarts and the game starts from beginning.
    -Create clouds to give the game depth.
