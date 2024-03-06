document.getElementById("categories_drop").addEventListener("click", function(event){

    var dropdown = document.getElementById("categories_content")

    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
        dropdown.style.position = "absolute";
      } else {
        dropdown.style.display = "none";
      }


      event.stopPropagation();
})


document.addEventListener("click", function(){
    var dropdown = document.getElementById("categories_content");

    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      }

})