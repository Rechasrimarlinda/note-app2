var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");

xIcon.addEventListener("click", function(){
  typeNote();
});

checkIcon.addEventListener("click", function(){
  createNote();
});

function typeNote(){
  if(container3.style.display == "none"){
    container3.style.display = "block";
  }
  else{
    container3.style.display = "none";
  }
}
function createNote(){
  var noteText = document.getElementById("note-text").value;
  var node0 = document.createElement("div");
  var node1 = document.createElement("p");

  node1.innerHTML = noteText;

  node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; margin-left: 20px; overflow:hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)")

