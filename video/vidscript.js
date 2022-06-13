// Get the modal
var modals = [
    document.getElementById("cocioModal"),
    document.getElementById("dgiModal"),
    document.getElementById("klatModal"),
    document.getElementById("cobraModal"),
    document.getElementById("skateModal"),
    document.getElementById("visitModal"),
]

var modalImg = [
    document.getElementById("img01"),
    document.getElementById("img02"),
    document.getElementById("img03"),
    document.getElementById("img04"),
    document.getElementById("img05"),
    document.getElementById("img06"),
]

var captionText = [
    document.getElementById("caption1"),
    document.getElementById("caption2"),
    document.getElementById("caption3"),
    document.getElementById("caption4"),
    document.getElementById("caption5"),
    document.getElementById("caption6")
]

var img = [ 
    document.getElementById("cocioImg"),
    document.getElementById("dgiImg"),
    document.getElementById("klatImg"),
    document.getElementById("cobraImg"),
    document.getElementById("skateImg"),
    document.getElementById("visitImg"),
]



for (let i = 0; i < modals.length; i++) { 

  /* Hvis hvert element ved click */
img[i].onclick = function(){
  modals[i].style.display = "block";
   captionText[i].innerHTML = this.alt; 
}

/* Luk modal ved click på X */
 var span = document.getElementsByClassName("close")[i]; 
span.onclick = function() {
  modals[i].style.display = "none";
} 

 /* Luk Modal ved click udenfor vindue */ 
  modals[i].addEventListener('click', ()=>{
     modals[i].style.display = "none";
    })
  }


