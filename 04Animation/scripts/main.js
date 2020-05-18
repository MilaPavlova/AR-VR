

// // changing individual properties with code and using setInterval
var rotationSpeed1 = 0.02;
var myBox = document.getElementById('myBox');

function spin(){
 myBox.object3D.rotation.x += rotationSpeed1;
 console.log(myBox.object3D.rotation.x);
 }

setInterval(spin, 26);





var rotationSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
 myOtherBox.object3D.rotation.x += rotationSpeed;
 console.log(myOtherBox.object3D.rotation.x);
 }

setInterval(spin, 16);
//equivalent to 60 fps
