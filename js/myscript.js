
function ReadMore()
{
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var dateText = document.getElementById("date");
    const element = document.getElementById("kingsreview");  // Get the DIV element
  
    if (dots.style.display === "none") {
        element.classList.replace("reviewItemClicked", "reviewItem")
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
      dateText.style.display = "block";
    } else {
    element.classList.replace("reviewItem", "reviewItemClicked")
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
      dateText.style.display = "none";
    }
}

function ReadMoreIT()
{
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var dateText = document.getElementById("date");
    const element = document.getElementById("kingsreview");  // Get the DIV element
  
    if (dots.style.display === "none") {
        element.classList.replace("reviewItemClicked", "reviewItem")
      dots.style.display = "inline";
      btnText.innerHTML = "Leggi di più"; 
      moreText.style.display = "none";
      dateText.style.display = "block";
    } else {
    element.classList.replace("reviewItem", "reviewItemClicked")
      dots.style.display = "none";
      btnText.innerHTML = "Riduci"; 
      moreText.style.display = "inline";
      dateText.style.display = "none";
    }
}



    