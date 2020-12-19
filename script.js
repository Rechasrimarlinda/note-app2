var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var i = 0;

xIcon.addEventListener("click", function(){
  typeNote();
});

checkIcon.addEventListener("click", function(){
  createNote();

  // Input Array
itemArray.push(input.value);
localStorage.setItem('item', JSON.stringify(itemArray));

});

function typeNote(){
    if(container3.style.display == "none"){
      container3.style.display = "block";
    }
    // return typeNote();
    else{
      container3.style.display = "none"  ;
    }
  }

//membuat notes
function createNote(){
  var noteText = document.getElementById("note-text").value;
  var node0 = document.createElement("div");
  var node1 = document.createElement("p");

  node1.innerHTML = noteText;

  node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; margin-left: 20px; overflow:hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)")

  node1.style.background = color();

  node0.appendChild(node1);
  
  container2.insertAdjacentElement("beforeend", node0);

//event doubleclick utk delete
  node1.addEventListener("dblclick", function(){
    confirmDelete();
  });

//konfirmasi delete notes
function confirmDelete(){
  var x = confirm("Are you sure ?");
  if(x){
      node0.remove();
  }
}
//deklarasi contstant
let itemArray = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : [];

localStorage.setItem('item', JSON.stringify(itemArray));
cont note = JSON.parse(localStorage.getItem('item'));

//loop
note.forEach(item) => {
  createNote(item);
});
  document.getElementById("note-text").value = '';
}

//merubah warna pada note yang dibuat
function color(){
  var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328","#ekb123"];

  if(i > random_colors.length - 1){
    i = 0;
  }
  return random_colors[i++];
}