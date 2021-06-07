canvas=new fabric.Canvas("myCanvas")
var player_X=10;
var player_Y=10;
var block_height=30;
var block_width=30;
var player_object="";
var block_object="";


function player_update(){
    fabric.Image.fromURL("player.png", function (Img){
    player_object = Img;
    player_object.scaleToWidth(100);
    player_object.scaleToHeight(100);
    
    player_object.set({
        top:player_Y,
        left:player_X
    });
    canvas.add(player_object);
});
}
function player_object1(getImage){
    fabric.Image.fromURL(getImage, function (Img){
   block_object = Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    
    block_object.set({
        top:player_Y,
        left:player_X
    });
    canvas.add(block_object);
});
}
window.addEventListener("keydown", keyDown)

function keyDown(e){
    keyPressed=e.keyCode
    if (keyPressed=="70") {
        player_object1("ironman_face.png")
        console.log("ironman")
    }
    if (keyPressed=="66") {
        player_object1("spiderman_body.png")
        console.log("spiderman")
    }
    if (keyPressed=="76") {
        player_object1("hulk_legs.png")
        console.log("hulk")
        
    }
    if (keyPressed=="82") {
        player_object1("thor_right_hand.png")
        console.log("thor")
    }
    if (keyPressed=="72") {
        player_object1("captain_america_left_hand.png")
        console.log("captain")
    }
    if (keyPressed=="38") {
        up();
        }
        if (keyPressed=="40") {
            down();
        }
        if (keyPressed=="39") {
            right();
        }
        if (keyPressed=="37") {
            left();
        }
        if (e.shiftKey==true && keyPressed=="80") {
            block_height=block_height+10;
            block_width=block_width+10;
            document.getElementById("width").innerHTML=block_width;
            document.getElementById("height").innerHTML=block_height;
            console.log(block_width)
            console.log(block_height)
        }
        if (e.shiftKey==true && keyPressed=="77") {
            block_height=block_height-10;
            block_width=block_width-10;
            document.getElementById("width").innerHTML=block_width;
            document.getElementById("height").innerHTML=block_height;
            console.log(block_width)
            console.log(block_height)
        }
}
function up(){
    if (player_Y >= 0) {
    player_Y = player_Y - block_height;
    console.log("up"); 
    canvas.remove(player_object);
    player_update();       
}
}
function down(){
if (player_Y <= 500) {
player_Y = player_Y + block_height;
console.log("down"); 
canvas.remove(player_object);
player_update();       
}
}
function left(){
if (player_X >= 0) {
player_X = player_X - block_width;
console.log("left"); 
canvas.remove(player_object);
player_update();       
}
}
function right(){
if (player_X <= 700) {
player_X = player_X + block_width;
console.log("right"); 
canvas.remove(player_object);
player_update();       
}
}
