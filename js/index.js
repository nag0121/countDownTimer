//initializing phaser
var game = new Phaser.Game(640,360,Phaser.AUTO,'',{preload: preload, create: create, update: update,render: render});
//variables
var graphics; //to create arc
var timer; //countdown timer
var total = 30; //number of seconds
var x = 270; //initial rad of arc
//preload function
function preload () {
//adding assets
    this.layer1 = game.load.image('layer1', 'assets/images/layer_background.png');
    this.layer2 = game.load.image('layer2', 'assets/images/layer_foreground.png');
}
//create function
function create () {
//adding sprites to game
    this.layer1 = game.add.sprite(100,100,'layer2');
    this.layer1.scale.setTo(0.5);
    this.layer1.anchor.setTo(0.5);
//displaying countdown timer    
    this.text = game.add.text(100,100,{
        fill:'#002100'
    });
    this.text.anchor.setTo(0.5);
//creating timer function
    timer = game.time.create(true);

//  Set a TimerEvent to occur after 2 seconds
    timer.loop(1000, counter, this);
//adding graphics to game
    graphics = game.add.graphics(0,0);

    graphics.lineStyle(10, 0x33FF00);

    counter(); 
//  Start the timer running - this is important!
//  It won't start automatically, allowing you to hook it to button events and the like.
    timer.start();
   
}
//update function
function update () {
    
    this.text.text = total; //updating timer value 
    
}
//counter function
function counter () {

    if (total >= 1) {

        x = x - (360/30);

        graphics.arc(100, 100, 78, game.math.degToRad(270),game.math.degToRad(x), true);

        graphics.endFill();

        total--;
        
        
    }      
}
//function render
function render () {

}