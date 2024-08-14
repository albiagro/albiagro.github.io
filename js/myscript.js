
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

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_090i7aw';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

function success() {
  if(document.getElementById("from_name").value==="" || document.getElementById("from_lastname").value==="" || document.getElementById("email").value==="" 
  || document.getElementById("message").value==="") { 
           document.getElementById('button').disabled = true; 
       } else { 
           document.getElementById('button').disabled = false;
       }
   }
   
   document.body.insertAdjacentHTML("afterbegin", "<p>Hello,<Br/>World!</p>");