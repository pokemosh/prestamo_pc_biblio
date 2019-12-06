
alert("Perfect!");
var button = document.querySelector("button");
var isColored = false;

button.addEventListener("click", function(){
if(isColored){
document.body.style.background = "white";
isColored = false;
} else{
document.body.style.background = "blue";
isColored = true;
}
});  
